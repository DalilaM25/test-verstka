import { useState } from 'react';
import styles from './NavigateButton.module.css';

function NavigateButton({ handleClick, buttonContent }) {
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
        setIsClicked(!isClicked);
        handleClick();
    };

    return (
        <div className={styles.content}>
            <button
                className={`${styles.button} ${isClicked ? styles.active : ''}`}
                onClick={handleButtonClick}
            >
                {buttonContent}
            </button>
        </div>
    );
}

export default NavigateButton;
