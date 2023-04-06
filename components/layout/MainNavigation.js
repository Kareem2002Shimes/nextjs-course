import classes from "./MainNavigation.module.css";
import Link from "next/link";
function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Products</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/new-product">Add New Product</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
