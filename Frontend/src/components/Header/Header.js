import { useState, useEffect } from "react";
import Link from "next/link";
import cn from "classnames";
import { NAV_LINKS } from "./Header.data";
import styles from "./Header.module.scss";
import Image from "next/image";

import { VscMenu, VscClose } from "react-icons/vsc";
import OutlinedButton from "../OutlinedButton/OutlinedButton";
import Button from "./../Button/Button";

const Header = ({}) => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  });

  return (
    <>
      <header className={cn(styles.header, { [styles.active]: navbar })}>
        <div className={cn(styles.headerContainer, "space-X pt-1 pb-1")}>
          <Link href="./" className={cn(styles.logo)}>
            <img
              src={"./svg/logo_white.svg"}
              srcSet={"./svg/logo_red.svg 600w"}
              alt="logo"
            />
          </Link>
          {/* <div className={styles.menuAndContact}>
            <div
              className={
                click
                  ? cn(styles.menuContainer, styles.active)
                  : styles.menuContainer
              }
            >
              <ul className={styles.menu}>
                {NAV_LINKS.map(({ link, label, isDesktop }, index) => {
                  return (
                    isDesktop && (
                      <MenuItem key={index} label={label} link={link} />
                    )
                  );
                })}
              </ul>
            </div>
            <div className={styles.contactAndMenuIcon}>
              <Link href={"/"} className="paragraph11-size">
                <Button className="red-bg color-white">تواصل معنا</Button>
              </Link>
              <div className={styles.navIcon} onClick={handleClick}>
                {click ? <VscClose /> : <VscMenu color="#f3ecf9" />}
              </div>
            </div>
          </div> */}
        </div>
      </header>
    </>
  );
};

const MenuItem = ({ link, label }) => {
  return (
    <li className={styles.menuItem}>
      <Link
        href={link}
        scroll={false}
        className="font-weight-medium color-white paragraph11-size"
      >
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default Header;
