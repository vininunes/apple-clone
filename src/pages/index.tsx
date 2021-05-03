import { BannerAd } from '../components/BannerAd';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.containerAlert}>
        <p>
          <a href="">Compre online</a> com assistência de especialistas, entrega 
          grátis e muito mais.
        </p>
      </div>

      <BannerAd 
        title="iPhone 12" 
        subtitle="Roxinho básico."
        textAlert="" 
        image="/hero_iphone_12_purple__eybnx2ju5mky_large.jpg"
        textFirstButton="Saiba mais"
        textSecondButton="Comprar"
        dark={false}
      />

      <BannerAd 
        title="iMac" 
        subtitle="Diga olá." 
        textAlert="Confira em breve a disponibilidade"
        image="/hero_imac_avail__zbofyl96mzmm_large.jpg"
        textFirstButton="Saiba mais"
        textSecondButton="Ver preços"
        dark={false}
      />

      <BannerAd 
        title="iPhone 12 Pro" 
        subtitle="Um salto radical." 
        textAlert=""
        image="/iphone_12_pro_us__e5oyysg4k0ya_large.jpg"
        textFirstButton="Saiba mais"
        textSecondButton="Comprar"
        dark={true}
      />
    </>
  );
}
