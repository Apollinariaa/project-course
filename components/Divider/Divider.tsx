import styles from './Divider.module.css';
import cn from 'classnames';
import { DetailedHTMLProps, HTMLAttributes, JSX } from 'react';

export type DividerProps = DetailedHTMLProps<HTMLAttributes<HTMLHRElement>, HTMLHRElement>

export const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
	return (
		<hr className={cn(className, styles.hr)} {...props} />
	);
};
