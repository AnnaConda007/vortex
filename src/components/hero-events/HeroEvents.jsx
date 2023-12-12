import styles from "./heroEvents.module.css"
import FilterPanel from '../filter-panel/FilterPanel'


const HeroEvents = ()=>{
  return(
    <section className={styles.heroSection}>
      <div className={styles.heroBaner}>
        <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>Календарь предстоящих криптособытий</h1>
  <p className={styles.heroDiscription}>Календарь предстоящих событий в мире криптовалют. Следите за миром блокчейна с помощью нашего криптокалендаря. Здесь собраны все основные события, связанные с криптовалютой. Обновления ежедневно</p>
</div>
<img className={styles.heroImg} src="public\images\events-card-mob.webp" alt="Динамичный график предстоящих событий в мире криптовалют" />
      </div>
<FilterPanel/>

    </section>
  )
}

export default HeroEvents