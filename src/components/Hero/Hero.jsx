
import Link from 'next/link'
import styles from './Hero.module.css'
export default function Hero() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h1>Your Best Online shop <br /> <span>destination!</span></h1>
        <Link href={'/blog'}>
        <button>Start Shopping</button>
        </Link>
      </div>
      <div className={styles.animatedBackground}>
        <ul className={styles.squares}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>

        </ul>
      </div>
    </div>
  )
}
