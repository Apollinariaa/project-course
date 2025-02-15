import { ForwardedRef, JSX, forwardRef, useCallback, useEffect, useState } from 'react';
import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import cn from 'classnames';
import StarIcon from './star.svg';

export const Rating = forwardRef(
    ({ rating, setRating, isEdit = false, ...props }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
        const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

        const changeDispay = useCallback(
            (ratingIndex: number) => {
                if (!isEdit) {
                    return;
                }
                constructRating(ratingIndex);
            },
            [isEdit],
        );

        const onClick = useCallback(
            (ratingIndex: number) => {
                if (!isEdit || !setRating) {
                    return;
                }
                setRating(ratingIndex);
            },
            [isEdit, setRating],
        );

        const constructRating = useCallback(
            (rating: number) => {
                const updateRating = ratingArray.map((_item, index) => (
                    <span
                        className={cn(styles.star, {
                            [styles.filled]: index < rating,
                            [styles.editable]: isEdit,
                        })}
                        onMouseEnter={() => changeDispay(index + 1)}
                        onMouseLeave={() => changeDispay(rating)}
                        onClick={() => onClick(index + 1)}
                        key={index}
                    >
                        <StarIcon />
                    </span>
                ));

                setRatingArray(updateRating);
            },
            [changeDispay, isEdit, onClick, ratingArray],
        );

        useEffect(() => {
            constructRating(rating);
        }, [rating]);

        return (
            <div className={cn(styles.rating)} {...props} ref={ref}>
                {ratingArray.map((r, index) => (
                    <span key={index}>{r}</span>
                ))}
            </div>
        );
    },
);

Rating.displayName = 'Rating';
