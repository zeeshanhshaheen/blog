import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function HeaderLayout({ }) {
    return (
        <div class="w-screen flex align-center justify-center">
            <header class="w=3/5 flex align-center justify-center">
                {(
                    <><table class="table-fixed w-3/5">
                        <tbody>
                            <td class="w-1/2 flex">
                                <Link href="/">
                                    <a class="flex text-black">
                                        <img
                                            src="/images/profile.jpg"
                                            class="col-start-1 max-h-24 max-w-24"
                                            className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                                            alt="Thomas Desmond"
                                        />
                                        <div class="text-2xl pl-2 place-self-center">Thomas aka TheTomBomb</div>
                                    </a>
                                </Link>
                            </td>
                            <td class="w-1/2 text-right ">
                                <div class="">
                                    <span>
                                        <Link href="/">
                                            <a class="font-semibold pr-3 text-xl">
                                                🏠Home
                                                        </a>
                                        </Link>
                                        <Link href="/bio">
                                            <a class="font-semibold text-xl">
                                                🧔Bio
                                                        </a>
                                        </Link>
                                    </span>
                                </div>
                            </td>
                        </tbody>
                    </table>
                    </>
                )}
            </header>
        </div>
    )
}
