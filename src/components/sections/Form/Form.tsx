'use client';

import MainButton from '@/components/@ui/buttons/MainButton/MainButton';
import Checkbox from '@/components/@ui/Checkbox/Checkbox';
import { useState } from 'react';
import { toast, Toaster } from 'sonner';
import classes from './Form.module.sass';

function Form() {
	const [email, setEmail] = useState('');
	const [question, setQuestion] = useState('');
	const [isAgreed, setIsAgreed] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const validateForm = () => {
		let isValid = true;

		if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
			toast.error('Введите корректный email');
			isValid = false;
		}

		if (!question || question.trim() === '') {
			toast.error('Поле вопроса не должно быть пустым');
			isValid = false;
		}

		if (!isAgreed) {
			toast.error('Необходимо согласие с условиями');
			isValid = false;
		}

		return isValid;
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!validateForm()) return;

		setIsSubmitting(true);

		const delay = (ms: number) =>
			new Promise(resolve => setTimeout(resolve, ms));

		const request = new Promise(async (resolve, reject) => {
			try {
				// Фейковая задержка на 2 секунды (чтобы вы увидели всю красоту toaster.promise)
				await delay(3000);

				const response = await fetch('/api/form', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ email, question }),
				});

				if (!response.ok) {
					throw new Error('Ошибка при отправке формы');
				}

				resolve(await response.json());
			} catch (error) {
				reject(error);
			} finally {
				setIsSubmitting(false);
			}
		});

		toast.promise(request, {
			loading: 'Отправка данных... (3 cекунды)',
			success: 'Форма успешно отправлена!',
			error: 'Ошибка при отправке формы',
		});
	};

	return (
		<div className={classes.Form} id="form">
			<Toaster richColors />

			<h4 className={classes.title}>Заполните форму</h4>

			<form onSubmit={handleSubmit} className={classes.form}>
				<textarea
					name='question'
					id='question'
					placeholder='Напишите свой вопрос'
					value={question}
					onChange={e => setQuestion(e.target.value)}
					disabled={isSubmitting}
				></textarea>
				<div className={classes.confirm}>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Введите e-mail'
						value={email}
						onChange={e => setEmail(e.target.value)}
						disabled={isSubmitting}
					/>
					<Checkbox
						checked={isAgreed}
						onChange={() => setIsAgreed(!isAgreed)}
						disabled={isSubmitting}
					/>
					<MainButton variant='black' disabled={isSubmitting}>
						{isSubmitting ? 'Отправка...' : 'Отправить'}
					</MainButton>
				</div>
			</form>
		</div>
	);
}

export default Form;
