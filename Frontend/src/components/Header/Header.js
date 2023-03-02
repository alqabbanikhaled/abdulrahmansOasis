import Link from "next/link";
import classNames from "classnames";
import { NAV_LINKS } from "./Header.data";
import styles from "./Header.module.scss";
import Image from "next/image";
import OutlinedButton from "../OutlinedButton/OutlinedButton";

const Header = ({}) => {
  return (
    <>
      <header className={classNames(styles.header)}>
        <div
          className={classNames(styles.headerContainer, "space-X pt-1 pb-1")}
        >
          <Link href="./" className={classNames(styles.logo)}>
            <img src={"/logo.png"} alt="logo" />
          </Link>

          <div className={styles.menuContainer}>
            <ul className={styles.menu}>
              {NAV_LINKS.map(({ link, label, isDesktop }, index) => {
                return (
                  isDesktop && (
                    <MenuItem key={index} label={label} link={link} />
                  )
                );
              })}
              <li className={styles.headerButton}>
                <Link href={"/"}>
                  <OutlinedButton className="color-red border-red">
                    تواصل معنا
                  </OutlinedButton>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

const MenuItem = ({ link, label }) => {
  return (
    <li>
      <Link
        href={link}
        scroll={false}
        className="font-weight-medium color-black"
      >
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default Header;
