import { Column, Row } from 'react-basics';
// import Link from 'next/link';
import LanguageButton from 'components/input/LanguageButton';
import ThemeButton from 'components/input/ThemeButton';
import SettingsButton from 'components/input/SettingsButton';
// import Icons from 'components/icons';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <Row className={styles.row}>
        <Column>
          {/* <Link href="https://umami.is" target="_blank" className={styles.title}>
            <Icon size="lg">
              <Icons.Logo />
            </Icon>
            <Text>umami</Text>
          </Link> */}
          {/* <img
            src="https://uploads-ssl.webflow.com/5ea18b09bf3bfd55814199f9/5ea18b09bf3bfda137419a00_petri_square_03.gif"
            className={styles.logo}
            alt="headless logo"
          /> */}
        </Column>
        <Column className={styles.buttons}>
          <ThemeButton tooltipPosition="bottom" />
          <LanguageButton tooltipPosition="bottom" menuPosition="bottom" />
          <SettingsButton />
        </Column>
      </Row>
    </header>
  );
}

export default Header;
