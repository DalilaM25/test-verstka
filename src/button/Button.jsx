import styles from './Button.module.css'

function Button({buttonContent, handleClick}) {
    return <button className={styles.button} onClick={handleClick}>
        {buttonContent}
    </button>;
}

export default Button;
