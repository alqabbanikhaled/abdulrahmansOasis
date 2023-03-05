import Link from "next/link";
import classNames from "classnames";
import { NAV_LINKS } from "./Header.data";
import styles from "./Header.module.scss";
import Image from "next/image";
import OutlinedButton from "../OutlinedButton/OutlinedButton";
import Button from "./../Button/Button";

const Header = ({}) => {
  return (
    <>
      <header className={classNames(styles.header)}>
        <div
          className={classNames(styles.headerContainer, "space-X pt-3 pb-3")}
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
                  <Button className="red-bg color-white">تواصل معنا</Button>
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
        className="font-weight-medium color-white"
      >
        <span>{label}</span>
      </Link>
    </li>
  );
};

export default Header;
