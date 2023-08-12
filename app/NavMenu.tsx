import Link from 'next/link';
import Image from 'next/image';
import styles from './NevMenu.module.css';
import {SignInButton} from "@/components/buttons";

export default function NevMenu() {
    return (
        <nav className={styles.nav}>
            <Link href={"/dashboard"}>
                <Image src="/next.svg" alt="NextSpace Logo" width={216} height={30} priority={true} />
            </Link>

            <ul className={styles.links}>
                <li>
                    <Link href={"/about"}>About</Link>
                </li>
                <li>
                    <Link href={"/blog"}>Blog</Link>
                </li>
                <li>
                    <Link href={"/users"}>Users</Link>
                </li>
                <li>
                    <SignInButton />
                </li>
            </ul>
        </nav>
    )
}