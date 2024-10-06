'use client';

import { useEffect, useState } from 'react';
import Logo from '../icons/Logo';
import classes from './Nav.module.sass';

function Nav() {
	const [activeSection, setActiveSection] = useState('#home');

	useEffect(() => {
		const sections = document.querySelectorAll('[id]'); // Выбираем только элементы с id
		const observer = new IntersectionObserver(
			entries => {
				let visibleSections = entries
					.filter(entry => entry.isIntersecting)
					.map(entry => entry.target.id);

				if (visibleSections.length) {
					setActiveSection(`#${visibleSections[0]}`);
				}
			},
			{
				threshold: 0.9, // Срабатывает, когда 90% секции в поле зрения
			}
		);

		sections.forEach(section => observer.observe(section));

		return () => {
			sections.forEach(section => observer.unobserve(section));
		};
	}, []);

	return (
		<nav className={classes.Nav}>
			<div className={classes.Logo}>
				<Logo />
			</div>

			<ul className={classes.menu}>
				<li>
					<a
						href='#home'
						className={activeSection === '#home' ? classes.active : ''}
					>
						Главная
					</a>
				</li>
				<li>
					<a
						href='#sources'
						className={activeSection === '#sources' ? classes.active : ''}
					>
						Доп. источники
					</a>
				</li>
				<li>
					<a
						href='#balance'
						className={activeSection === '#balance' ? classes.active : ''}
					>
						Баланс
					</a>
				</li>
				<li>
					<a
						href='#partners'
						className={activeSection === '#partners' ? classes.active : ''}
					>
						Партнёры
					</a>
				</li>
				<li>
					<a
						href='#reports'
						className={activeSection === '#reports' ? classes.active : ''}
					>
						Отчёты
					</a>
				</li>
				<li>
					<a
						href='#form'
						className={activeSection === '#form' ? classes.active : ''}
					>
						Обратная связь
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default Nav;
