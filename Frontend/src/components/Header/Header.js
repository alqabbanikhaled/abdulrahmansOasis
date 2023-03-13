import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import cn from "classnames";
import { VscMenu, VscClose } from "react-icons/vsc";

import { NAV_LINKS } from "./Header.data";
import Subscribe from "../Subscribe/Subscribe";
import styles from "./Header.module.scss";

const Header = ({}) => {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState();
  //according to it, we change the the background and logo
  const [newNavbar, setNewNavbar] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const SwitchToNewNav = () => {
    if (pathname == "/") {
      if (window.scrollY >= 66) {
        setNewNavbar(true);
      } else {
        setNewNavbar(false);
      }
    }
  };

  useEffect(() => {
    setNewNavbar(pathname == "/" ? false : true);
  }, [pathname]);

  useEffect(() => {
    if (isOpen) {
      document.querySelector("body").style.overflow = "hidden";
    } else document.querySelector("body").style.overflow = "visible";
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener("scroll", SwitchToNewNav);
    return () => {
      window.removeEventListener("scroll", SwitchToNewNav);
    };
  });

  return (
    <>
      <header className={cn(styles.header, { [styles.active]: newNavbar })}>
        <div className={cn(styles.headerContainer, "space-X pt-1 pb-1")}>
          <Link href="./" className={cn(styles.logo)} onClick={closeMenu}>
            {!newNavbar ? (
              <img
                src={"./svg/logo_white.svg"}
                srcSet={"./svg/logo_red.svg 600w"}
                alt="logo"
              />
            ) : (
              <img src={"./svg/new_logo.svg"} alt="logo" />
            )}
          </Link>
          <div className={styles.menuAndContact}>
            <div
              className={
                isOpen
                  ? cn(styles.menuContainer, styles.active)
                  : styles.menuContainer
              }
            >
              <ul className={cn(styles.menu)}>
                {NAV_LINKS.map(({ link, label, isDesktop }, index) => {
                  return (
                    isDesktop && (
                      <MenuItem
                        active={
                          newNavbar &&
                          window != undefined &&
                          window.innerWidth > 600
                        }
                        key={index}
                        label={label}
                        link={link}
                        onClick={closeMenu}
                      />
                    )
                  );
                })}
              </ul>

              <div className={cn(styles.headerSubscribe, "mt-3")}>
                <p
                  className={cn(
                    styles.subscribeText,
                    "color-gray font-weight-bold"
                  )}
                >
                  آخر أخبارنا ومقالاتنا ومواردنا ، سنرسلها إلى صندوق الوارد
                  الخاص بك أسبوعيًا.
                </p>
                <Subscribe />
              </div>
            </div>
            <div className={styles.contactAndMenuIcon}>
              {/* <Link href={"/"} className="paragraph11-size">
                <Button className="red-bg color-white">تواصل معنا</Button>
              </Link> */}
              <div className={styles.navIcon} onClick={handleClick}>
                {isOpen ? (
                  <VscClose />
                ) : (
                  <VscMenu
                    className={cn({
                      "color-white": !newNavbar,
                      "color-red": newNavbar,
                    })}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const MenuItem = ({ link, label, onClick, active }) => {
  return (
    <li
      className={cn(styles.menuItem, { [styles.active]: active == true })}
      onClick={onClick}
    >
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
