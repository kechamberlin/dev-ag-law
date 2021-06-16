import classes from './result-item.module.css';
import Image from 'next/image';
import formatMoney from '../../lib/format-money';

export default function ResultItem(props) {
  const { image, money, description, slug } = props.result;

  const imagePath = `/images/results/${slug}/${image}`;

  return (
    <li className={classes.result}>
      <div className={classes.image}>
        <Image
          src={imagePath}
          alt={description}
          width={300}
          height={200}
          layout="responsive"
        />
      </div>
      <div className={classes.content}>
        <h3>{formatMoney(money * 100)}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}
