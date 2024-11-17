import Content from '../content/Content'
import Header from '../header/Header'
import styles from './App.module.css'

function App() {
    return (
        <div className={styles.app}>
            <div className={styles.fixed}>
                <Header />
            </div>
            <Content className={styles.content} />
        </div>
    );
}

export default App
