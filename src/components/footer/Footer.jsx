import styles from "./Footer.module.css";
import Image from "next/image";
import { links, services, social_media } from "./data";
import Logo from "../elements/logo/Logo";
import Link from "next/link";
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
        <div>
          <Logo />
        </div>
        <div className={styles.container_newslater}>
          <p>Subscribe to the newsletter</p>
          <div className={styles.input}>
            <input placeholder="Enter E-Mail" type="text" />
            <button className={styles.button}>Subment</button>
          </div>
        </div>
      </div>
      <div className={styles.links}>
        <div>
          <ul className={styles.app_links}>
            {links.map((link, index) => (
              <li className={styles.app__flex} key={index}>
                <Link href={link.url}>{link.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul className={styles.app_links}>
            {services.map((service, index) => (
              <li className={styles.app__flex}>
                <Link href={service.url} key={index}>{service.title} </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.container_tags}>
        <div>©2024 HEXASHOP. All rights reserved.</div>
        <div className={styles.social}>
          {social_media.map((media) => (
            <Image
              key={media.id}
              src={`/images/icons/${media.name}.png`}
              width={20}
              height={20}
              className={styles.icon}
              alt="HEXASHOP `${mesia.name}` link "
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
