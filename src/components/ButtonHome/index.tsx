import styles from './styles.module.scss';

interface ButtonHome {
    text: string;
    href: string;
}

export function ButtonHome({ text, href }:ButtonHome) {
    return(
        <>   
            <a href={href} className={styles.button}>
                <span className={styles.containerButton}>
                    <p className={styles.textButton}>{text}</p>
                    <p className={styles.materialIcons}>chevron_right</p>
                </span>       
            </a>  
        </>
    );
}