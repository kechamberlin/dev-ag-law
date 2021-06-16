import Head from 'next/head';
import { Fragment } from 'react';
import AllResults from '../../components/results/all-results';
import { getAllResults } from '../../lib/results-util';

export default function AllResultsPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Recent Results | Law Firm</title>
      </Head>
      <AllResults results={props.results} />
    </Fragment>
  );
}

export function getStaticProps() {
  const allResults = getAllResults();

  return {
    props: {
      results: allResults,
    },
  };
}
