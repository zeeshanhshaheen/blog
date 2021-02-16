---
title: "How to test your EventWaitHandle C#"
date: "2017-04-03"
description: "I struggled with testing EventWhatHandle in C# and wanted to share how I was able to wrap a test aroud the code."
categories: 
  - "test-driven-development"
coverImage: "screen-shot-2016-08-18-at-10-27-36-am.png"
---

### **What is EventWaitHandle**

"The [EventWaitHandle](https://msdn.microsoft.com/en-us/library/system.threading.eventwaithandle(v=vs.110).aspx) class allows threads to communicate with each other by signaling and by waiting for signals."

### **Problem faced**

How do I go about testing an EventWaitHandle? Events are being published threads are flying around the application and I want to test my WaitOn() and Set() calls on my EventWaitHandle.

### **Why I am using EventWaitHandle**

I have a function that displays user data, let's call it DisplayUserData. But I need to make sure I have all the latest customer data before presenting it. I publish an Event that makes API calls in order to gather all the user data, called GetUserDataEvent, at the beginning of DisplayUserData. I need to make sure that my GetUserDataEvent has fully completed before displaying any data. I have a GetUserDataEventCompleted that I am waiting for. EventWaitHandle is the solution I have to pause inside of DisplayUserData until GetUserDataEventCompleted has been received. Below is a simple sample of what I have currently going on in my code, that needs to be tested.

```
private EventWaitHandle WaitForUserData;

_eventAggregator.GetEvent<GetUserDataEventCompleted>().Subscribe(OnGetUserDataEventCompleted);

// Event fired from elsewhere in application notifying that all data has been retrieved 
public void OnGetUserDataEventCompleted()
{
	WaitForUserData.Set();
}

public void DisplayUserData()
{
	_eventAggregator.GetEvent<GetUserDataEvent>().Publish();
	WaitForUserData.WaitOne(); // Wait for WaitForUserData.Set() event to occur before continuing 
	
	//Display up to date user data
}
```

### **How to test your EventWaitHandle**

Now how can I test this? How can I ensure that the code WaitOne() is working and code is not attempting to access user data before the Set() is called? We will use some threading in our test!

We will put our function call on its own thread. This allows the GetUserDataEvent.Publish() and the WaitForUserData.WaitOne() to occur on their own thread. Our test code can continue and verify what is happening.

```
var DisplayUserDataThread = new Thread(() =>
{
	DisplayUserData()
});
DisplayUserDataThread.Start();
```

Directly after the call to start our thread we want to assert or verify that our code for displaying user data is not being called. This can be tested in a couple of ways. It is up to you. But for me, I had a mock of my DisplayUserData and was able to verify that it had not been called yet. For a less advanced approach, you can set input a thread delay and ensure that certain values are still null. Such that they have not been populated with the user data yet.

After we have verified our display code has not been called we can populate our user data with simple test data. This is where the mock comes in because since I had mocked out my actually API call no data was coming back. I simply need to input my own test data. I am not trying to test my API calls at this time I have other tests for that, I only want to be testing my EventWaitHandle.

With our test user data generated we can call, GetUserDataEventCompleted. The subscription for this event calls our WaitForUserData.Set().  We expect that once the Set() is called our Display for the user data will be called once. Below is a layout of our entire test created for EventWaitHandle. This now tests that the Display call on user data does not occur until we explicitly get our Set call on WaitForUserData.

```
var DisplayUserDataThread = new Thread(() =>
{
	DisplayUserData()
});
DisplayUserDataThread.Start();

DisplayDataControllerMock.Verify(ddcm => ddcm.Display(It.IsAny<UserData>()), Times.Never);

UserData.UserDataList.Add(TestHelpers.GenerateTestUser());
GetUserDataEventCompleted.Publish();
	
DisplayDataControllerMock.Verify(ddcm => ddcm.Display(It.IsAny<UserData>()), Times.Once);
```

The above works due to mocking using moq library. If you are not familiar with mocking I highly encourage you to look into tutorials on how to use the different mocking libraries available to you.

For help writing your own EventWaitHandle test leave a comment!
