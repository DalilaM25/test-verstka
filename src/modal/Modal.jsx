import { useEffect } from 'react';
import styles from './modal.module.css';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modals');

export const Modal = ({ children, onClose }) => {
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);
    return createPortal(
        <>
            <div className={styles.modal}>{children}</div>
            <div className={styles.modalOverlay} onClick={onClose} />
        </>,
        modalRoot
    );
};
