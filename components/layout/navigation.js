import Link from 'next/link';
import Logo from './logo';
import classes from './navigation.module.css';

export default function Navigation() {
  return (
    <header className={classes.header}>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/practices">Areas of Practice</Link>
          </li>
          <li>
            <Link href="/results">Results</Link>
          </li>

          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
