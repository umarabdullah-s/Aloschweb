import React, { useState, useEffect } from "react"; // ✅ added useEffect
import styles from "./Header.module.css";
import img from "@/assets/header/logo.png";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // ✅ Auto close menu when page changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.logo}>
          <img src={img.src} alt="logo" />
        </Link>

        <div className={`${styles.menu} ${open ? styles.show : ""}`}>
          <Link
            href="/about"
            className={`${styles.items} ${
              pathname === "/about" ? styles.active : ""
            }`}
          >
            About
          </Link>

          <Link
            href="/program"
            className={`${styles.items} ${
              pathname === "/program" ? styles.active : ""
            }`}
          >
            Program
          </Link>

          <Link
            href="/campus-life"
            className={`${styles.items} ${
              pathname === "/campus-life" ? styles.active : ""
            }`}
          >
            Campus Life
          </Link>

          <Link
            href="/contact"
            className={`${styles.items} ${
              pathname === "/contact" ? styles.active : ""
            }`}
          >
            Contact
          </Link>

          <div className={styles.menuBtn}>
            <p>Touch With Us</p>
          </div>
        </div>

        <div className={styles.btn}>
          <p>Touch With Us</p>
        </div>

        <div className={styles.hamburger} onClick={() => setOpen(!open)}>
          {open ? <HiX /> : <HiMenuAlt3 />}
        </div>
      </div>
    </div>
  );
};

export default Header;
