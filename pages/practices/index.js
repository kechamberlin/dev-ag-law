import Head from 'next/head';
import { Fragment } from 'react';
import AllPractices from '../../components/practices/all-practices';
import { getPractices } from '../../lib/practices-util';

export default function AllPracticesPage(props) {
  return (
    <Fragment>
      <Head>
        <title>Areas of Practice | Law Firm</title>
      </Head>
      <AllPractices practices={props.practices} />
    </Fragment>
  );
}

export function getStaticProps() {
  const practices = getPractices();

  return {
    props: {
      practices: practices,
    },
  };
}
