import { useState, useEffect } from "react";
import Link from "next/link";
import cn from "classnames";
import { VscMenu, VscClose } from "react-icons/vsc";

import { headerDataAR, headerDataEN } from "./Header.data";
import Subscribe from "../Subscribe/Subscribe";
import styles from "./Header.module.scss";
import LangSwitch from "../LangSwitch/LangSwitch";
import { getSinglePage } from "@/providers/api.service";

const Header = ({ navLinksColor, locale }) => {
  const [isOpen, setIsOpen] = useState();
  const [newNavbar, setNewNavbar] = useState(false);
  const [subscribeNewsData, setSubscribeNewsData] = useState();

  const { NAV_LINKS } = locale == "ar" ? headerDataAR : headerDataEN;

  useEffect(() => {
    async function fetchData() {
      const fetchedJson = await getSinglePage(locale, "subscribe-news-section");
      setSubscribeNewsData(fetchedJson.data?.attributes);
    }
    fetchData();
  }, [locale]);

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
        <div
          className={cn(styles.headerContainer, "space-X", {
            "pt-2 pb-2": !newNavbar,
            "pt-1 pb-1": newNavbar,
          })}
        >
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
                {NAV_LINKS.map(({ link, label, isDesktop, subLinks }, index) => {
                  return (
                    isDesktop && (
                      <MenuItem
                        newNavbar={newNavbar}
                        navLinksColor={navLinksColor}
                        key={index}
                        label={label}
                        link={link}
                        onClick={closeMenu}
                        subLinks={subLinks}
                      />
                    )
                  );
                })}
                <li>
                  <LangSwitch
                    navLinksColor={navLinksColor}
                    newNavbar={newNavbar}
                  />
                </li>
              </ul>
              <div className={cn(styles.headerSubscribe, "mt-3")}>
                {subscribeNewsData?.sectionTitle && (
                  <p
                    className={cn(
                      styles.subscribeText,
                      "paragraph1-size color-gray font-weight-medium"
                    )}
                  >
                    {subscribeNewsData.sectionTitle}
                  </p>
                )}
                <Subscribe
                  locale={locale}
                  successText={subscribeNewsData?.successText}
                  inputText={subscribeNewsData?.inputText}
                  buttonText={subscribeNewsData?.buttonText}
                />
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

const MenuItem = ({ link, label, onClick, newNavbar, navLinksColor, subLinks = [] }) => {
  return (
    <li className={cn(styles.menuItem,
      { [styles.hasSubMenu]: subLinks && subLinks.length > 0 })} onClick={onClick}>
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
        {
          subLinks && subLinks.length > 0 ? <svg xmlns="http://www.w3.org/2000/svg" 
          className="d-none d-md-flex"
          width="15.072" height="8.536" viewBox="0 0 15.072 8.536">
            <path id="Path_4330" data-name="Path 4330" d="M-16133.672,11677.285l6.121,6.122,6.123-6.122" transform="translate(16135.086 -11675.871)" fill="none" 
            stroke={navLinksColor == "red" || newNavbar ? "#da2229":"#fff"} 
            strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg> : <></>
        }
      </Link>
      {
        subLinks && subLinks.length > 0 ? <>
          <div className={cn(styles.subMenu, {
            [styles.hasBg]: newNavbar
          })} >
            <ul>


              {
                subLinks.map(({ link, label }, index) => {
                  return <li key={'submenu' + index}><Link href={link} scroll={false}
                  className={cn(
                    {
                      "color-white": navLinksColor != "red" && !newNavbar,
                      "color-red": navLinksColor == "red" || newNavbar,
                    },
                    "font-weight-medium paragraph11-size pt-1"
                  )}>
                    <span
                      className={cn({
                        // [styles.activeNavLink]: pathname === link
                      })}
                    >
                      {label}
                    </span>
                  </Link>      </li>
                })
              }

            </ul>
          </div>
        </> : <></>

      }
    </li>
  );
};

export default Header;
