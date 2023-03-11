import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
//===================================================
import Score from '../Score/Score';
//===================================================
import styles from './styles.module.scss';
import iconStar from '../../assets/image/icon-star.svg';
import smartphoneImage from '../../assets/image/illustration-thank-you.svg';
import { selectScore } from '../../redux/score/slice';

const Rating: React.FC = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [visibleTotal, SetVisibleTotal] = useState(false);
    //===================================================
    const score = useSelector(selectScore)

    useEffect(() => {
        setIsMounted(true);
        if (isSubmitted) {
            SetVisibleTotal(true);
        }
    }, [isSubmitted])

    return (
        <div className={styles.container}>
            <div className={clsx(styles.rating, isMounted && styles.rating_visible)}>
                {!isSubmitted ? (
                    <div className={styles.ratingContent}>
                        {/* points-table / табличка баллов */}
                        <div className={styles.pointsTable}>
                            <div className={styles.starCircle}>
                                <img className={styles.iconStar} src={iconStar} alt="star" />
                            </div>
                            <div className={styles.text}>
                                <h4 className={styles.title}>How did we do?</h4>
                                <p className={styles.paragraph}>
                                    Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                                </p>
                            </div>
                            <div className={styles.scoreContainer}>
                                <Score />
                            </div>
                            <button
                                onClick={() => { setIsSubmitted(true) }}
                                disabled={score < 1}
                                className={clsx(`${styles.buttonSubmit}`, score < 1 && `${styles.buttonSubmit_disabled}`)}>
                                SUBMIT
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className={styles.ratingContent}>
                        {/* thanks-table / табличка благодарности */}
                        <div className={styles.thanksTable}>
                            <div className={styles.imageContainer}>
                                <img className={styles.image} src={smartphoneImage} alt="smartphone" />
                            </div>
                            <div className={clsx(styles.userSelection, visibleTotal && styles.userSelection_visible)}>
                                You selected {score} out of 5
                            </div>
                            <div className={clsx(styles.text, styles.text_center)}>
                                <h4 className={styles.title}>Thank you!</h4>
                                <p className={styles.paragraph}>
                                    We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Rating;    