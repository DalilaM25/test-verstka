import Content from '../content/Content'
import Header from '../header/Header'
import styles from './App.module.css'

function App() {
    return (
        <>
            <div className={styles.fixed}>
                <Header />
            </div>
            <Content className={styles.content} />
        </>
    )
}

export default App
