import styles from './styles.module.scss';
import Image from 'next/image';

export function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <ul>
                    <li>
                        <a href="">
                            <Image 
                                src="/globalnav_apple_image__cxwwnrj0urau_large.svg"
                                alt="Apple" 
                                width={44} 
                                height={44}
                            />
                        </a>
                    </li>
                    <li>
                        <a href="">Mac</a>
                    </li>
                    <li>
                        <a href="">iPad</a>
                    </li>
                    <li>
                        <a href="">iPhone</a>
                    </li>
                    <li>
                        <a href="">Watch</a>
                    </li>
                    <li>
                        <a href="">TV</a>
                    </li>
                    <li>
                        <a href="">Music</a>
                    </li>
                    <li>
                        <a href="">Suporte</a>
                    </li>
                    <li>
                        <a href="">
                            <Image 
                                src="/globalnav_search_image__fca9mfoh8a2q_large.svg" 
                                alt="Search"
                                width={44}
                                height={44}
                            />
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <Image 
                                src="/globalnav_bag_image__bmix8075eg4i_large.svg"
                                alt="Bag" 
                                width={44} 
                                height={44}
                            />
                        </a>
                    </li>
                </ul>                
            </div>      
        </header>
    );
}