import Link from 'next/link'
import {useRouter} from 'next/router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, fa0 } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css"
export default function Navbar(){
    const router = useRouter();
    console.log(router);
    return <nav className={styles.nav}>
                <Link href="/">
                    <a className={router.pathname === "/" ? styles.active : null}>Home <FontAwesomeIcon icon={faXmark} /></a>                   
                </Link>
                
                <Link href="/movies">
                    <a className={router.pathname === "/movies" ? styles.active : null}>Movies <FontAwesomeIcon icon={fa0} /></a>
                </Link>
                <Link href="/about">
                    <a className={router.pathname === "/about" ? styles.active : null}>About</a>
                </Link>
            </nav>
}