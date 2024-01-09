import React from "react";
import styles from "./page.module.css";
import Logo from "@/components/elements/logo/Logo";

function About() {
  return (
    <div className={styles.about}>
      <Logo />
      <div className={styles.about_section}>
        <h2>Our History</h2>
        <div>
          <p>
            HEXASHOP was founded in 2007 with a vision to revolutionize online
            shopping. Over the years, we have grown into a leading marketplace,
            offering a wide range of high-quality products. Our commitment to
            innovation, customer satisfaction, and staying ahead of industry
            trends has been the cornerstone of our success.
          </p>
        </div>
      </div>
      <div className={styles.about_section}>
        <h2>Our Company Message</h2>
        <div>
          <p>
            At HEXASHOP, we are driven by a commitment to deliver high-quality
            products that enhance your lifestyle. Our mission is to provide a
            seamless online shopping experience, offering a diverse range of
            items from cutting-edge electronics to stylish accessories. With a
            foundation established in 2007, we continue to evolve, embracing
            innovation and customer satisfaction. HEXASHOP is more than a
            shopping destination; it s a reflection of our dedication to quality
            and convenience. Join us on this journey, where every purchase tells
            a story of excellence.
          </p>
        </div>
      </div>
      <div className={styles.about_section}>
        <h2>Our Future Vision</h2>
        <div>
          <p>
            At HEXASHOP, our future vision is to continue being a leading online
            marketplace, offering an even wider range of high-quality products.
            We aspire to embrace emerging technologies, enhance customer
            experiences, and maintain our commitment to innovation and
            excellence. HEXASHOP aims to be the go-to destination for all your
            shopping needs, providing convenience and satisfaction with every
            click.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
