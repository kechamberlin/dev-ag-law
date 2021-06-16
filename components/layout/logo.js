import classes from './logo.module.css';
import Image from 'next/image';

export default function Logo() {
  return (
    <div className={classes.logo}>
      <Image
        src="/images/site/ag-law-logo.png"
        alt="AG Law Logo"
        height={100}
        width={100}
        layout="fixed"
      />
    </div>
  );
}
