import MainButton from '../../@ui/buttons/MainButton/MainButton';
import Nav from '../../Nav/Nav';
import classes from './Header.module.sass';

function Header() {
	return (
		<div className={classes.Header} id='home'>
			<Nav />
			<h1 className={classes.h1}>
				Монетизируйте клиентскую базу, не снижая NPS
			</h1>
			<h2 className={classes.h2}>
				Найдите идеальный баланс выручки и удовлетворённости пользователей с
				платформой рекламной монетизации
			</h2>
			<MainButton>Заказать звонок</MainButton>
		</div>
	);
}

export default Header;
