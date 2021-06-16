import Link from 'next/link';
import classes from './practice-item.module.css';
import Image from 'next/image';

export default function PracticeItem(props) {
  const { title, image, description, slug } = props.practice;

  const imagePath = `/images/practices/${slug}/${image}`;
  const linkPath = `/practices/${slug}`;

  return (
    <li className={classes.practice}>
      <h3>{title}</h3>
      <Link href={linkPath}>
        <a>
          <div className={classes.image}>
            <Image
              src={imagePath}
              alt={title}
              width={300}
              height={200}
              layout="responsive"
            />
          </div>
          <div className={classes.content}>
            <p>{description}</p>
          </div>
        </a>
      </Link>
    </li>
  );
}
