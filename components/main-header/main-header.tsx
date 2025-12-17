import Link from "next/link";
import classes from "./main-header.module.css";

export default function MainHeader() {
  return (
    <header className={classes.mainMeader}>
      <div className={classes.logo}>
        <Link href="/">ALI NEWS</Link>
      </div>

      <nav>
        <ul>
          <li>
            <Link href="/news">News</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
