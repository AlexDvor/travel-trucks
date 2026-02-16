import type { FC } from 'react';
import Icon from '../../ui/Icon/Icon';
import Button from '../../ui/Button/Button';
import s from './ErrorMessage.module.css';


interface IErrorMessageProps {
	message?: string;
	onRetry?: () => void;
}

const ErrorMessage: FC<IErrorMessageProps> = ({
	message = 'Something went wrong. Please try again.',
	onRetry,
}) => {
	return (
		<div className={s.wrapper}>
			<div className={s.card}>
				<Icon name='icon-heart' size={40} className={s.icon} />

				<h2 className={s.title}>Oops…</h2>

				<p className={s.text}>{message}</p>

				{onRetry && (
					<Button title='Try again' variant='primary' handleClick={onRetry} />
				)}
			</div>
		</div>
	);
};

export default ErrorMessage;
