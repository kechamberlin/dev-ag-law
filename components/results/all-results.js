import classes from './all-results.module.css';
import ResultsGrid from './results-grid';

export default function AllResults(props) {
  return (
    <section className={classes.results}>
      <h1>Recent Results</h1>
      <ResultsGrid results={props.results} />
    </section>
  );
}
