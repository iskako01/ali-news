import Link from "next/link";
import classes from "./main-header.module.css";
import Navlink from "@/components/common/nav-link";

export default function MainHeader() {
  return (
    <header className={classes.mainMeader}>
      <div className={classes.logo}>
        <Link href="/">ALI NEWS</Link>
      </div>

      <nav>
        <ul>
          <li>
            <Navlink href="/news">News</Navlink>
          </li>
          <li>
            <Navlink href="/archive">Archive</Navlink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
