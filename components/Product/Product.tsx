import { JSX, forwardRef, useState, ForwardedRef } from 'react';
import { ProductProps } from './Product.props';
import styles from './Product.module.css';
import { Card } from '../Card/Card';
import Image from 'next/image';
import { Tag } from '../Tag/Tag';
import { Rating } from '../Rating/Rating';
import { declOfNum, priceRu } from '@/helpers/helpers';
import { Divider } from '../Divider/Divider';
import { Button } from '../Button/Button';
import cn from 'classnames';
import { Review } from '../Review/Review';
import { ReviewForm } from '../ReviewForm/ReviewForm';
import { motion } from 'framer-motion';

export const Product = forwardRef(
    ({ product, className, ...props }: ProductProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
        const [isReviewOpened, setIsReviewOpened] = useState(false);

        const variants = {
            visible: { opacity: 1, height: 'auto' },
            hidden: { opacity: 0, height: 0 },
        };

        return (
            <div className={className} {...props} ref={ref}>
                <Card className={styles.product}>
                    <div className={styles.box_card}>
                        <div className={styles.logo}>
                            <Image src={product.image} alt={product.title} width={70} height={70} />
                        </div>

                        <div className={styles.title}>{product.title}</div>

                        <div className={styles.prices}>
                            <div className={styles.block_price}>
                                <div className={styles.price}>
                                    <span>{priceRu(product.price)}</span>
                                    {product.oldPrice && (
                                        <Tag className={styles.oldPrice} type="green">
                                            {product.price - product.oldPrice} ₽
                                        </Tag>
                                    )}
                                </div>

                                <div className={styles.priceTitle} aria-hidden={true}>
                                    цена
                                </div>
                            </div>

                            <div className={styles.block_credit}>
                                <div className={styles.credit}>
                                    {priceRu(product.credit)}/<span className={styles.month}>мес</span>
                                </div>
                                <div className={styles.creditTitle} aria-hidden={true}>
                                    в кредит
                                </div>
                            </div>
                        </div>

                        <div className={styles.div_rating}>
                            <div className={styles.rating}>
                                <Rating rating={product.reviewAvg ?? product.initialRating} />
                            </div>

                            <div className={styles.rateTitle}>
                                <a href="#ref">
                                    {product.reviewCount}{' '}
                                    {declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className={styles.tags}>
                        {product.categories.map(c => (
                            <Tag key={c} className={styles.category} type="default">
                                {c}
                            </Tag>
                        ))}
                    </div>

                    <Divider className={styles.hr} />

                    <div className={styles.description}>{product.description}</div>

                    <div className={styles.feature}>
                        {product.characteristics.map(c => (
                            <div className={styles.characteristics} key={c.name}>
                                <span className={styles.characteristicsName}>{c.name}</span>
                                <span className={styles.characteristicsDots}></span>
                                <span className={styles.characteristicsValue}>{c.value}</span>
                            </div>
                        ))}
                    </div>

                    <div className={styles.advBlock}>
                        {product.advantages && (
                            <div className={styles.advantages}>
                                <div className={styles.advTitle}>Преимущества</div>
                                <div>{product.advantages}</div>
                            </div>
                        )}
                        {product.disadvantages && (
                            <div className={styles.disadvantages}>
                                <div className={styles.advTitle}>Недостатки</div>
                                <div>{product.disadvantages}</div>
                            </div>
                        )}
                    </div>
                    <Divider className={cn(styles.hr, styles.hr2)} />

                    <div className={styles.actions}>
                        <Button appearance="primary">Узнать подробнее</Button>

                        <Button
                            appearance="default"
                            arrow={isReviewOpened ? 'down' : 'right'}
                            className={styles.reviewButton}
                            onClick={() => setIsReviewOpened(!isReviewOpened)}
                        >
                            Читать отзывы
                        </Button>
                    </div>
                </Card>

                <motion.div animate={isReviewOpened ? 'visible' : 'hidden'} variants={variants} initial="hidden">
                    <Card color="blue" className={styles.reviews}>
                        {product.reviews.map(r => (
                            <div key={r._id}>
                                <Review review={r} />
                                <Divider />
                            </div>
                        ))}
                        <ReviewForm productId={product._id} isOpened={isReviewOpened} />
                    </Card>
                </motion.div>
            </div>
        );
    },
);

Product.displayName = 'Product';
