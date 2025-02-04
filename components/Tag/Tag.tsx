
import cn from 'classnames';
import styles from './Tag.module.css'
import { TagProps } from './Tag.props';

export const Tag = ({size = 's', type = 'default', children, className, href, ...props}: TagProps) => {
    return (<div className={cn(styles.tag, className, {
				[styles.s]: size == 's',
				[styles.m]: size == 'm',
				[styles.default]: type == 'default',
				[styles.red]: type == 'red',
				[styles.grey]: type == 'grey',
				[styles.green]: type == 'green',
				[styles.puple]: type == 'puple',
            })} {...props}>
        {href
            ? <a href={href}>{children}</a>
            : <>{children}</>
        }
    </div>);

}
