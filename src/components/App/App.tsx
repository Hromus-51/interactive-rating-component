import Rating from "../Rating/Rating";
//===================================================
import styles from './styles.module.scss';
import './null.scss';

const App: React.FC = () => {
    return (
        <div className={styles.app}>
            <Rating />
        </div>
    );
}

export default App;

