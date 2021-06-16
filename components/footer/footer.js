import classes from './footer.module.css';

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <p></p>
      <p>&copy; Built by Kris Chamberlin | {new Date().getFullYear()}</p>
    </footer>
  );
}
