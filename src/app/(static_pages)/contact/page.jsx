import React from "react";
import styles from "./page.module.css";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneVolume } from "react-icons/fa";

function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.head}>
        <p>
          Let's stay in <span>touch !</span>
        </p>
      </div>
      <div>
        <div className={styles.contact_tag}>
          <div>
            <p>hexashop@email.com</p>
            <TfiEmail size={26} />
          </div>
          <div>
            <p>+91 62 96519250</p>
            <FaPhoneVolume size={26} />
          </div>
        </div>
        <div className={styles.inputs}>
          <input className={styles.name} type="text" placeholder="Your Name" />
          <input
            className={styles.email}
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className={styles.message}
            type="text"
            placeholder="Your Message"
          />
          <button className={styles.button}>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
