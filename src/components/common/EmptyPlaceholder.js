import { Icon, Text, Flexbox } from 'react-basics';
import styles from './EmptyPlaceholder.module.css';

export function EmptyPlaceholder({ message, children }) {
  return (
    <Flexbox direction="column" alignItems="center" justifyContent="center" gap={60} height={600}>
      <Icon size="xl" className={styles.icon}>
        <img
          src="https://uploads-ssl.webflow.com/5ea18b09bf3bfd55814199f9/5ea18b09bf3bfda137419a00_petri_square_03.gif"
          className={styles.logo}
          alt="headless logo"
        />
      </Icon>
      <Text size="lg">{message}</Text>
      <div>{children}</div>
    </Flexbox>
  );
}

export default EmptyPlaceholder;
