import styles from "./SocialLinks.module.scss";
import cn from "classnames";

const SocialLinks = ({ className, start = false }) => {
  return (
    <div className={cn(styles.socialLinks, { "content-start-medium": start })}>
      <SocialLink
        className={className}
        src="./svg/instagram.svg"
        href={"https://instagram.com/abdulrahmansoasis?igshid=YmMyMTA2M2Y="}
      />
      <SocialLink
        className={className}
        src="./svg/youtube.svg"
        href={"https://youtube.com/@abdulrahmansoasis"}
      />
      <SocialLink
        className={className}
        src="./svg/twitter.svg"
        href={
          "https://twitter.com/abdulrahmansoas?s=11&t=UAPx6gtAmnhgWwn1mvGbaA"
        }
      />
      <SocialLink
        className={className}
        src="./svg/snapshat.svg"
        href={"https://t.snapchat.com/oAJ0KyrL"}
      />
    </div>
  );
};

const SocialLink = ({ src, href, className }) => {
  return (
    <a href={href} target="_blank">
      <button className={cn(styles.socialLink, "p-1")}>
        <img src={src} className={className} />
      </button>
    </a>
  );
};

export default SocialLinks;
