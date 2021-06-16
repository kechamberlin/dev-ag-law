import ResultsGrid from '../results/results-grid';
import classes from './featured-results.module.css';

export default function FeaturedResults(props) {
  return (
    <section className={classes.latest}>
      <h1>Recent Results</h1>
      <ResultsGrid results={props.results} />
    </section>
  );
}
