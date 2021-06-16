import classes from './all-practices.module.css';
import PracticesGrid from './practices-grid';

export default function AllPractices(props) {
  return (
    <section className={classes.practices}>
      <h1>Areas of Practice</h1>
      <PracticesGrid practices={props.practices} />
    </section>
  );
}
