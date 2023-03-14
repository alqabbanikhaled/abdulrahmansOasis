import { useState, useEffect } from "react";
import Link from "next/link";
import cn from "classnames";
import { VscMenu, VscClose } from "react-icons/vsc";

import { headerDataAR, headerDataEN } from "./Header.data";
import Subscribe from "../Subscribe/Subscribe";
import styles from "./Header.module.scss";
import LangSwitch from "../LangSwitch/LangSwitch";

const Header = ({ navLinksColor, locale }) => {
  const [isOpen, setIsOpen] = useState();
  const [newNavbar, setNewNavbar] = useState(false);

  const { NAV_LINKS, latestNews } =
    locale == "ar" ? headerDataAR : headerDataEN;

  const handleClick = () => setIsOpen(!isOpen);

  const closeMenu = () => {
    setIsOpen(false);
  };

  const SwitchToNewNav = () => {
    if (window.scrollY >= 66) {
      setNewNavbar(true);
    } else {
      setNewNavbar(false);
    }
  };

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
                src={"/svg/logo_white.svg"}
                srcSet={"/svg/logo_red.svg 600w"}
                alt="logo"
              />
            ) : (
              <img src={"/svg/new_logo.svg"} alt="logo" />
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
                        newNavbar={newNavbar}
                        navLinksColor={navLinksColor}
                        key={index}
                        label={label}
                        link={link}
                        onClick={closeMenu}
                      />
                    )
                  );
                })}
                <li>
                  <LangSwitch navLinksColor={navLinksColor} newNavbar={newNavbar} />
                </li>
              </ul>

              <div className={cn(styles.headerSubscribe, "mt-3")}>
                <p
                  className={cn(
                    styles.subscribeText,
                    "color-gray font-weight-medium"
                  )}
                >
                  {latestNews}
                </p>
                <Subscribe locale={locale} />
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
                      "color-white": navLinksColor != "red" && !newNavbar,
                      "color-red": navLinksColor == "red" || newNavbar,
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

const MenuItem = ({ link, label, onClick, newNavbar, navLinksColor }) => {
  return (
    <li className={cn(styles.menuItem)} onClick={onClick}>
      <Link
        href={link}
        className={cn(
          {
            "color-white": navLinksColor != "red" && !newNavbar,
            "color-red": navLinksColor == "red" || newNavbar,
          },
          "font-weight-medium paragraph11-size"
        )}
      >
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default Header;
