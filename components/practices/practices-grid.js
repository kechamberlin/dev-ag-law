import PracticeItem from './practice-item';
import classes from './practices-grid.module.css';

export default function PracticesGrid(props) {
  const { practices } = props;

  return (
    <ul className={classes.grid}>
      {practices.map((practice) => (
        <PracticeItem key={practice.slug} practice={practice} />
      ))}
    </ul>
  );
}
