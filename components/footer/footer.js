import classes from './footer.module.css';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <p></p>
      <p>&copy; Built by Kris Chamberlin | {new Date().getFullYear()}</p>
      <p>
        DISCLAIMER: this website is strictly for portfolio purposes. It is NOT
        to be used for real legal consultation or contact.
      </p>
    </footer>
  );
}
