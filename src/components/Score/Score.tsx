import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
//===================================================
import styles from './styles.module.scss';
import { setScore, selectScore } from '../../redux/score/slice';
//===================================================
const scores = [1, 2, 3, 4, 5];

const Score: React.FC = () => {
    const dispatch = useDispatch();
    const score = useSelector(selectScore);

    const handleClick = (number: number) => {
        dispatch(setScore(number));
    }

    return (
        <ul className={styles.score}>
            {
                scores.map(number => (
                    <li onClick={() => { handleClick(number) }}
                        className={clsx(styles.scoreItem, score === number && styles.scoreItem_active)}
                        key={number}>
                        <span className={styles.scoreNumber}>
                            {number}
                        </span>
                    </li>
                ))
            }
        </ul >
    );
}

export default Score;