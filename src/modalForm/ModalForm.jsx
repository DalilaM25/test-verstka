import clsx from 'clsx';
import Button from '../button/Button';
import { Modal } from '../modal/Modal';
import TaskInputDate from '../taskInputDate/TaskInputDate';
import TaskInputTeg from '../taskInputTeg/TaskInputTeg';
import styles from './ModalForm.module.css';
import { useState } from 'react';

function ModalForm({ closeModal }) {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <Modal onClose={closeModal}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <p>Подзадача</p>
                    <div className={styles.mobileCloseBtn}>
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
                                        d="M13.3877 1.95915C13.7596 1.58722 13.7596 0.984207 13.3877 0.612279C13.0158 0.240351 12.4128 0.240351 12.0408 0.612279L7 5.65313L1.95915 0.612279C1.58722 0.240351 0.984207 0.240351 0.612279 0.612279C0.240351 0.984207 0.240351 1.58722 0.612279 1.95915L5.65313 7L0.612279 12.0408C0.240351 12.4128 0.240351 13.0158 0.612279 13.3877C0.984207 13.7596 1.58722 13.7596 1.95915 13.3877L7 8.34687L12.0408 13.3877C12.4128 13.7596 13.0158 13.7596 13.3877 13.3877C13.7596 13.0158 13.7596 12.4128 13.3877 12.0408L8.34687 7L13.3877 1.95915Z"
                                        fill="#2E3238"
                                    />
                                </svg>
                            }
                            handleClick={() => console.log('close')}
                        />
                    </div>
                </div>
                <div className={styles.buttons}>
                    <Button
                        buttonContent="Сохранить"
                        handleClick={() => console.log('save')}
                    />
                    <Button buttonContent="Отменить" handleClick={closeModal} />
                </div>
                <div className={styles.formContainer}>
                    <p className={styles.title}>Новая запись</p>
                    <form className={styles.form}>
                        <div className={styles.formItem}>
                            <div>
                                <span className={styles.accent}>* </span>
                                <label htmlFor="topic">Тема</label>
                            </div>
                            <input
                                type="text"
                                id="topic"
                                value="На инциденте, запросе, проблеме, в статусе закрыто некоторые поля остаются редактируемыми для агента если он Caller"
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="status">Статус</label>
                            <input
                                type="text"
                                id="status"
                                value="Новая"
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="description">Описание</label>
                            <input type="text" id="description" />
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="product">Продукт</label>
                            <input
                                type="text"
                                id="product"
                                value="Paltform"
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formItem}>
                            <div>
                                <span className={styles.accent}>* </span>
                                <label htmlFor="work">Рабочие заметки</label>
                            </div>
                            <input
                                type="text"
                                id="work"
                                value="Проверить ACL id=172830402014193655"
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formItem}>
                            <label htmlFor="priority">Приоритет</label>
                            <input
                                type="text"
                                id="priority"
                                value="Средний"
                                onChange={handleChange}
                            />
                        </div>
                        <div className={styles.formItem}>
                            <span>Ответственный</span>
                            <TaskInputTeg
                                textForDemo={['Константин Константинопольский']}
                            />
                        </div>
                        <div className={styles.formItem}>
                            <span>Группа</span>
                            <TaskInputTeg textForDemo={['Support Group']} />
                        </div>
                        <div
                            className={clsx(
                                styles.formItem,
                                styles.formItemMaxWidth
                            )}
                        >
                            <label htmlFor="comments">Комментарии</label>
                            <input
                                type="text"
                                id="comments"
                                value={value}
                                onChange={handleChange}
                            />
                        </div>
                        <div
                            className={clsx(
                                styles.formItem,
                                styles.formItemMaxWidth
                            )}
                        >
                            <span>Согласующие</span>
                            <TaskInputTeg
                                textForDemo={[
                                    'Андрей Пивоваров',
                                    'Максим Галактионов',
                                    'Алла Лин',
                                    'Андрей Пивоваров',
                                    'Максим Галактионов',
                                    'Алла Лин',
                                    'Константин Константинопольский Константинович',
                                    'Игорь Иванченко',
                                    'Юлия Эйчаровна',
                                    'Артём Подпрыгайко-Саппортов',
                                    'Илья Вазнец',
                                    'Михаил Вортенов',
                                    'Наталья Нашевна',
                                    'Евгения Итамовна',
                                    'Алиса Киральчук',
                                ]}
                            />
                        </div>
                        <div className={styles.formItem}>
                            <span>Когда открыто</span>
                            <TaskInputDate />
                        </div>
                        <div className={styles.formItem}>
                            <span>Когда создано</span>
                            <TaskInputDate textForDemo="22.10.2024" />
                        </div>
                        <div className={styles.formItem}>
                            <span>Кем открыто</span>
                            <TaskInputTeg textForDemo={['Андрей Пивоваров']} />
                        </div>
                        <div className={styles.formItem}>
                            <span>Кем создано</span>
                            <TaskInputTeg textForDemo={['Андрей Пивоваров']} />
                        </div>
                    </form>
                </div>
            </div>
        </Modal>
    );
}

export default ModalForm;
