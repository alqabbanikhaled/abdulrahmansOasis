//import { useState, useRef } from "react";
import Link from "next/link";
//import { CSSTransition } from "react-transition-group";
import cx from "classnames";
import { NAV_LINKS } from "./Header.data";
import styles from "./Header.module.scss";
import Image from "next/image";

import logoVert from '../../assets/logo-vert.svg';
import logo from '../../assets/logo.svg';
import contactIcon from '../../assets/ic-contact.svg';

const Header = ({ }) => {
    return (
        <>
            <header
                className={cx(styles.header)}
            >
                <div className={styles.headerContainer}>
                    <Link href="./" className={styles.logo + " d-none d-md-block"}>
                        <Image src={logo} alt="logo" />
                    </Link>
                    <Link href="./" className={styles.logo + " d-block d-md-none"}>
                        <Image src={logoVert} alt="logo" />
                    </Link>

                    <div className={styles.menuContainer}>
                        <ul className={styles.menu}>
                            {NAV_LINKS.map(({ link, label, isDesktop }, index) => {
                                return isDesktop && <li key={index}>
                                    <Link href={link} scroll={false}>
                                        <span
                                            className={cx({
                                                //  [styles.activeNavLink]: activePath === link,
                                                [styles.activeNavLink]: true
                                            })}
                                        >
                                            {label}
                                        </span>
                                    </Link>
                                </li>
                            })}
                        </ul>
                    </div>

                    <div className={styles.headerButton}>
                        <Link href={'/contact-us'} scroll={false}>
                            <span
                                className={'font-weight-bold paragraph1-size'}
                            >
                                Contact NEC
                            </span>

                            <span>
                                <Image src={contactIcon} alt="contact" />
                            </span>
                        </Link>
                    </div>

                </div>
            </header>

        </>
    );
};

export default Header;
