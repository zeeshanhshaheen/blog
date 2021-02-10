import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function HeaderLayout({ }) {
    return (
        // <div class="bg-gray-200 w-screen flex align-center justify-center">

        <div class="w-screen bg-gray-100 flex align-center justify-center">
            {/* <header class="w-3/5 pt-4 flex align-center justify-center"> */}

            <header class="w-3/5 pt-4">
                {(
                    <div class="flex ">
                        <div class="">
                            <Link href="/">
                                <a class="flex text-black">
                                    {/* <img
                                    src="/images/profile.jpg"
                                    class="col-start-1 max-h-24 max-w-24"
                                    className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                                    alt="Thomas Desmond"
                                /> */}
                                    <div class="text-2xl text-black place-self-center">Thomas aka TheTomBomb</div>
                                </a>
                            </Link>
                        </div>
                        <div class="pt-3 inline-block align-right">
                                <Link href="/">
                                    <a class="font-semibold text-black pr-3 text-xl">
                                        Home
                                                        </a>
                                </Link>
                                <Link href="/bio">
                                    <a class="font-semibold text-black text-xl">
                                        Bio
                                                        </a>
                                </Link>
                        </div>
                    </div>
                )}
            </header>
        </div>
    )
}
