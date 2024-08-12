import Form from '../../components/Form';
import styles from './home.module.scss';

function Home() {
  return (
    <main className={styles['home__container']}>
      <Form />
    </main>
  );
}

export default Home;