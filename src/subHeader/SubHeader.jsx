import { useEffect, useState } from 'react';
import styles from './SubHeader.module.css'; 
import Button from '../button/Button';
import ModalForm from '../modalForm/ModalForm';

function SubHeader() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);
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
        <div
            className={`${styles.subHeader} ${scrolled ? styles.scrolled : ''}`}
        >
            <div className={styles.taskGroup}>
                <p>Подзадача</p>
                {isOpen ? (
                    <ModalForm closeModal={closeModal}></ModalForm>
                ) : (
                    <Button buttonContent="Создать" handleClick={openModal} />
                )}
            </div>
            <div className={styles.saveBtnGroup}>
                <Button
                    className={styles.saveBtn}
                    buttonContent="Сохранить"
                    handleClick={() => console.log('save')}
                />
                <Button
                    buttonContent="Сохранить и выйти"
                    handleClick={() => console.log('save and out')}
                />
            </div>
        </div>
    );
}

export default SubHeader;
