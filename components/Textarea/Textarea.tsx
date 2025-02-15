import { TextareaProps } from './Textarea.props';
import styles from './Textarea.module.css';
import cn from 'classnames';
import { JSX, forwardRef, ForwardedRef } from 'react';

export const Textarea = forwardRef(
    ({ error, className, ...props }: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
        return (
            <div className={cn(styles.textareaWrapper, className)}>
                <textarea
                    className={cn(styles.textarea, {
                        [styles.error]: error,
                    })}
                    {...props}
                    ref={ref}
                />
                {error && (
                    <span role="alert" className={styles.errorMessage}>
                        {error.message}
                    </span>
                )}
            </div>
        );
    },
);

Textarea.displayName = 'Textarea';
