import clsx from 'clsx';
import TaskInputTeg from '../taskInputTeg/TaskInputTeg';
import styles from './TaskForm.module.css';
import TaskInputDate from '../taskInputDate/TaskInputDate';
import { useState } from 'react';

function TaskForm() {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <div className={styles.formContainer}>
            <p className={styles.title}>
                STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто
                некоторые поля остаются редактируемыми для агента если он Caller
            </p>
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
                <div className={clsx(styles.formItem, styles.formItemMaxWidth)}>
                    <label htmlFor="comments">Комментарии</label>
                    <input
                        type="text"
                        id="comments"
                        value={value}
                        onChange={handleChange}
                    />
                </div>
                <div className={clsx(styles.formItem, styles.formItemMaxWidth)}>
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
    );
}

export default TaskForm;
