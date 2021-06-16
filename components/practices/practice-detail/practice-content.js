import ReactMarkdown from 'react-markdown';
import PracticeHeader from './practice-header';
import classes from './practice-content.module.css';

export default function PracticeContent(props) {
  const { practice } = props;
  const imagePath = `/images/practices/${practice.slug}/${practice.image}`;
  return (
    <article className={classes.content}>
      <PracticeHeader title={practice.title} image={imagePath} />
      <ReactMarkdown>{practice.content}</ReactMarkdown>
    </article>
  );
}
