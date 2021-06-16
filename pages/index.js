import { Fragment } from 'react';
import FeaturedResults from '../components/home-page/featured-results';
import Hero from '../components/home-page/hero';
import AllPractices from '../components/practices/all-practices';
import ContactForm from '../components/contact/contact-form';
import { getPractices } from '../lib/practices-util';
import { getFeaturedResults } from '../lib/results-util';
import Head from 'next/head';

export default function HomePage(props) {
  return (
    <Fragment>
      {/* NOTE: Because I do not wnat to confuse this 
        portfolio demonstration with the real AG Law website, 
        I will comment out the meta tag to show how it could look */}
      <Head>
        <title>Home | Law Firm</title>
        {/* <meta
          name="description"
          content="Modesto-based Law firm for Attorney Anthony C. Gonsalves serving the 209 area code"
        /> */}
      </Head>

      <Hero />
      <AllPractices practices={props.practices} />
      <FeaturedResults results={props.results} />
      <ContactForm />
    </Fragment>
  );
}

export function getStaticProps() {
  const featuredResults = getFeaturedResults();
  const practices = getPractices();

  return {
    props: {
      practices: practices,
      results: featuredResults,
    },
  };
}
