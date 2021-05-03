import Image from 'next/image';
import { ButtonHome } from '../ButtonHome';
import styles from './styles.module.scss';

interface bannerAd {
    title: string;
    subtitle: string;
    textAlert: string;
    image: string;
    textFirstButton: string;
    textSecondButton: string;
    dark: boolean;
} 

export function BannerAd({title, subtitle, textAlert, image, textFirstButton, textSecondButton, dark}:bannerAd) {
    return(
        <>
        <div className={styles.containerBanner}>            
            <div className={styles.contentBanner}>
                <h1 className={dark ? styles.titleBannerDark : styles.titleBanner}>
                    {title}
                </h1>
                
                <h2 className={dark ? styles.subtitleBannerDark : styles.subtitleBanner}>
                    {subtitle}
                </h2>

                {textAlert !== "" ? <p className={styles.alertBanner}>{textAlert}</p> : ""}               
                
                <span className={styles.containerButtons}>
                    <ButtonHome text={textFirstButton} href=""/>
                    <ButtonHome text={textSecondButton} href=""/>
                </span>
            </div>
            <Image 
                src={image}
                width={3010}
                height={1100}
                objectFit="cover"
            />
        </div>
        </>
    );
}