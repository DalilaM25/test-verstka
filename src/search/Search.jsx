import styles from './Search.module.css'

function Search({ svgIcon, placeholderText }) {
    return (
        <form className={styles.form}>
            <input
                className={styles.input}
                type="text"
                id="search"
                name="q"
                placeholder={placeholderText}
            />
            {svgIcon && <div className={styles.icon}>{svgIcon}</div>}
        </form>
    );
}

export default Search
