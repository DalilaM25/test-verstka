import { useState } from 'react';
import Button from '../button/Button';
import styles from './TaskInputDate.module.css';

const TaskInputDate = ({ textForDemo }) => {
    const [value, setValue] = useState(textForDemo);

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                type="text"
                value={value}
                onChange={handleChange}
            />
            <Button
                buttonContent={
                    <svg
                        width="18"
                        height="20"
                        viewBox="0 0 18 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.16667 19.1687H14.8333C16.2167 19.1687 17.3333 18.052 17.3333 16.6687V5.00203C17.3333 3.6187 16.2167 2.50203 14.8333 2.50203H13.1667V1.6687C13.1667 1.21037 12.7917 0.835368 12.3333 0.835368C11.875 0.835368 11.5 1.21037 11.5 1.6687V2.50203H6.5V1.6687C6.5 1.21037 6.125 0.835368 5.66667 0.835368C5.20833 0.835368 4.83333 1.21037 4.83333 1.6687V2.50203H3.16667C1.78333 2.50203 0.666667 3.6187 0.666667 5.00203V16.6687C0.666667 18.052 1.78333 19.1687 3.16667 19.1687ZM14.8333 17.502H3.16667C2.70833 17.502 2.33333 17.127 2.33333 16.6687V9.1687H15.6667V16.6687C15.6667 17.127 15.2917 17.502 14.8333 17.502ZM3.16667 4.1687H4.83333V5.00203C4.83333 5.46037 5.20833 5.83537 5.66667 5.83537C6.125 5.83537 6.5 5.46037 6.5 5.00203V4.1687H11.5V5.00203C11.5 5.46037 11.875 5.83537 12.3333 5.83537C12.7917 5.83537 13.1667 5.46037 13.1667 5.00203V4.1687H14.8333C15.2917 4.1687 15.6667 4.5437 15.6667 5.00203V7.50203H2.33333V5.00203C2.33333 4.5437 2.70833 4.1687 3.16667 4.1687Z"
                            fill="#2E3238"
                        />
                    </svg>
                }
            />
        </div>
    );
};
export default TaskInputDate;