import Head from 'next/head';
import { Fragment } from 'react';
import PracticeContent from '../../components/practices/practice-detail/practice-content';
import { getPracticeData, getPracticesFiles } from '../../lib/practices-util';

export default function PracticeDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.practice.title} | Law Firm</title>
      </Head>
      <PracticeContent practice={props.practice} />
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const practiceData = getPracticeData(slug);

  return {
    props: {
      practice: practiceData,
    },
  };
}

export function getStaticPaths() {
  const practiceFileNames = getPracticesFiles();

  const slugs = practiceFileNames.map((fileName) =>
    fileName.replace(/\.md$/, '')
  );

  return {
    paths: slugs.map((slug) => ({
      params: {
        slug: slug,
      },
    })),

    fallback: false,
  };
}
