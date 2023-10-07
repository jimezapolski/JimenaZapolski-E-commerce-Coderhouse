import styles from './Hero.module.css'
const Hero = () => {
  return (
    <div className={styles.titulosHome}>
      {/* INICIO DE LA HOME */}
      <section className={styles.homeInicio}>
        <article className={styles.primeraMitad}>
          <img src="https://hongo.b-cdn.net/watch/wp-content/uploads/sites/10/revslider/watch_banner_slider/watch-0011.png" alt="" />
        </article>
        <article className={styles.segundaMitad}>
          <h6 className={styles.linea}>LES ORIGINALES</h6>
          <h3>High quality stylish watches</h3>
          <p>Made from 316L stainless steel, this classic is intended to stay as such and is designed.</p>
        </article>
      </section>
     
      {/* <section className={styles.flexContainer}>
        <article className={styles.imgUno}>
          <h5>OUR COLLECTION</h5>
          <a href="">High quality and good design shape</a>
        </article>
        <article className={styles.dos}>
          <a href="https://www.youtube.com/watch?v=sU3FkzUKHXU&ab_channel=Envato"><i className="far fa-play-circle"></i></a>
        </article>
        <article className={styles.imgTres}>
          <a href="#"><img src="https://hongo.b-cdn.net/watch/wp-content/uploads/sites/10/2019/11/watch-banner-06-new.jpg.webp" alt="" /></a>
        </article>
        <article className={styles.imgCua}>
          <h5>ABOUT ROTARY</h5>
          <a href="">Designing watches full-time work</a>
        </article>
      </section> */}
    </div>
  )
}

export default Hero