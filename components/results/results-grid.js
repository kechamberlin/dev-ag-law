import ResultItem from './result-item';
import classes from './results-grid.module.css';

export default function ResultsGrid(props) {
  const { results } = props;
  return (
    <ul className={classes.grid}>
      {results.map((result) => (
        <ResultItem key={result.slug} result={result} />
      ))}
    </ul>
  );
}
