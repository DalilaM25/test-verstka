import styles from './Search.module.css'

function Search({ svgIcon, placeholderText }) {
    return (
        <form className={styles.form} action="/search" method="get">
            <input
                className={styles.input}
                type="search"
                id="search"
                name="q"
                placeholder={placeholderText}
            />
            {svgIcon && <div className={styles.icon}>{svgIcon}</div>}
        </form>
    )
}

export default Search
