import { useRef, useState } from 'react';
import styles from './TaskInputTeg.module.css';
import Button from '../button/Button';

const TaskInputTeg = ({ textForDemo }) => {
    const [tags, setTags] = useState(textForDemo);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef(null);

    const setCursorToEnd = () => {
        const range = document.createRange();
        const selection = window.getSelection();
        range.selectNodeContents(inputRef.current);
        range.collapse(false); // Перемещаем курсор в конец
        selection.removeAllRanges();
        selection.addRange(range);
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter' && inputValue.trim() !== '') {
            event.preventDefault();
            addTag(inputValue.trim());
            setInputValue('');
            setCursorToEnd(); // Устанавливаем курсор в конец после добавления тега
        }
    };

    const addTag = (tag) => {
        setTags((prevTags) => [...prevTags, tag]);
    };

    const removeTag = (tagToRemove) => {
        setTags((prevTags) => prevTags.filter((tag) => tag !== tagToRemove));
    };

    const handleInput = (e) => {
        setInputValue(e.target.innerText); // Обновляем состояние с текстом
        setCursorToEnd(); // Устанавливаем курсор в конец после ввода
    };

    return (
        <div className={styles.input}>
            <div className={styles.container}>
                {tags.map((tag, index) => (
                    <span className={styles.tag} key={index}>
                        {tag}
                        <span
                            className={styles.remove}
                            onClick={() => removeTag(tag)}
                        >
                            <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M9.47141 1.4714C9.73176 1.21105 9.73176 0.788945 9.47141 0.528596C9.21106 0.268246 8.78894 0.268246 8.52859 0.528596L5 4.05719L1.4714 0.528596C1.21105 0.268246 0.788945 0.268246 0.528596 0.528596C0.268246 0.788945 0.268246 1.21105 0.528596 1.4714L4.05719 5L0.528596 8.52859C0.268246 8.78894 0.268246 9.21106 0.528596 9.47141C0.788945 9.73176 1.21105 9.73176 1.4714 9.47141L5 5.94281L8.52859 9.47141C8.78894 9.73176 9.21106 9.73176 9.47141 9.47141C9.73176 9.21106 9.73176 8.78894 9.47141 8.52859L5.94281 5L9.47141 1.4714Z"
                                    fill="#2E3238"
                                />
                            </svg>
                        </span>
                    </span>
                ))}
                <div
                    ref={inputRef}
                    contentEditable
                    className={styles.editableInput}
                    onInput={handleInput}
                    onKeyDown={handleKeyDown}
                    suppressContentEditableWarning={true} // Предотвращаем предупреждение о редактируемом содержимом
                >
                    {inputValue}
                </div>
                <svg
                    className={styles.removeAll}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M6.47336 10.4749C6.21336 10.7349 5.78671 10.7349 5.52671 10.4749C5.26671 10.2149 5.26671 9.78833 5.52671 9.52833L7.05336 8.00164L5.52671 6.47495C5.26671 6.21495 5.26671 5.78833 5.52671 5.52833C5.78671 5.26833 6.21336 5.26833 6.47336 5.52833L8.00003 7.05503L9.52671 5.52833C9.78671 5.26833 10.2134 5.26833 10.4734 5.52833C10.7334 5.78833 10.7334 6.21495 10.4734 6.47495L8.94671 8.00164L10.4734 9.52833C10.7334 9.78833 10.7334 10.2149 10.4734 10.4749C10.2134 10.7349 9.78671 10.7349 9.52671 10.4749L8.00003 8.94826L6.47336 10.4749Z"
                        fill="#ABB1BA"
                    />
                    <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M15.3333 8.00163C15.3333 12.055 12.0533 15.335 8 15.335C3.94667 15.335 0.666667 12.055 0.666667 8.00163C0.666667 3.94829 3.94667 0.668294 8 0.668294C12.0533 0.668294 15.3333 3.94829 15.3333 8.00163ZM14 8.00163C14 4.68829 11.3133 2.00163 8 2.00163C4.68667 2.00163 2 4.68829 2 8.00163C2 11.315 4.68667 14.0016 8 14.0016C11.3133 14.0016 14 11.315 14 8.00163Z"
                        fill="#ABB1BA"
                    />
                </svg>
            </div>
            <Button
                buttonContent={
                    <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.83333 1.16667C7.83333 0.706429 7.46024 0.333333 7 0.333333C6.53976 0.333333 6.16667 0.706429 6.16667 1.16667V6.16667H1.16667C0.706429 6.16667 0.333333 6.53976 0.333333 7C0.333333 7.46024 0.706429 7.83333 1.16667 7.83333H6.16667V12.8333C6.16667 13.2936 6.53976 13.6667 7 13.6667C7.46024 13.6667 7.83333 13.2936 7.83333 12.8333V7.83333H12.8333C13.2936 7.83333 13.6667 7.46024 13.6667 7C13.6667 6.53976 13.2936 6.16667 12.8333 6.16667H7.83333V1.16667Z"
                            fill="#2E3238"
                        />
                    </svg>
                }
                handleClick={() => console.log('add someone')}
            />
            <Button
                buttonContent={
                    <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12.8481 14.0265C11.565 15.0529 9.93753 15.6667 8.16667 15.6667C4.02453 15.6667 0.666667 12.3088 0.666667 8.16667C0.666667 4.02453 4.02453 0.666667 8.16667 0.666667C12.3088 0.666667 15.6667 4.02453 15.6667 8.16667C15.6667 9.93749 15.053 11.565 14.0266 12.848L17.0892 15.9107C17.4147 16.2361 17.4147 16.7637 17.0892 17.0892C16.7638 17.4146 16.2362 17.4146 15.9107 17.0892L12.8481 14.0265ZM2.33333 8.16667C2.33333 4.94501 4.94501 2.33333 8.16667 2.33333C11.3883 2.33333 14 4.94501 14 8.16667C14 9.73812 13.3786 11.1644 12.3681 12.2133C12.3395 12.2353 12.312 12.2594 12.2857 12.2857C12.2595 12.3119 12.2354 12.3394 12.2134 12.3681C11.1645 13.3786 9.73816 14 8.16667 14C4.94501 14 2.33333 11.3883 2.33333 8.16667Z"
                            fill="#2E3238"
                        />
                    </svg>
                }
                handleClick={() => console.log('search someone')}
            />
        </div>
    );
};

export default TaskInputTeg;
