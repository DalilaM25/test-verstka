import styles from './DropdownItem.module.css'

const DropdownItem = ({ handleClick, openIndex, item }) => {
    return (
        <div>
            <button className={styles.button} onClick={handleClick}>
                {item.title}
            </button>
            {openIndex === item.index && (
                <ul>
                    {item.subItems.map((subItem, subIndex) => (
                        <li key={subIndex}>{subItem}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default DropdownItem
