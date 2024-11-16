import { useEffect, useState } from 'react';
import styles from './SubHeader.module.css'; 
import Button from '../button/Button';

function SubHeader() {
    const [scrolled, setScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`${styles.subHeader} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.taskGroup}>
                <p>Подзадача</p>
                <Button buttonContent='Создать' />
            </div>
            <div className={styles.saveBtnGroup}>
                <Button className={styles.saveBtn} buttonContent='Сохранить' />
                <Button buttonContent='Сохранить и выйти' />
            </div>
        </div>
    );
}

export default SubHeader;
