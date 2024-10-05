import ArrowIcon from '@/components/@ui/ArrowIcon/ArrowIcon';
import BalanceLogo from '@/components/icons/BalanceLogo';
import classes from './Balance.module.sass';

function Balance() {
	return (
		<div className={classes.Balance} id="balance">
			<h3 className={classes.heading}>
				Баланс между выручкой и удовлетворённостью пользователей
			</h3>

			<div className={classes.content}>
				<div className={classes.left}>
					<ArrowIcon />
					<p className={classes.title}>Частотность под контролем</p>
					<p className={classes.description}>Чтобы не ронять NPS и не увеличивать отток пользователей</p>
				</div>
				<div className={classes.center}>
					<div className={classes.line}></div>
					<BalanceLogo />
					<div className={classes.line}></div>
				</div>
				<div className={classes.right}>
					<ArrowIcon />
					<p className={classes.title}>Максимальная выручка</p>
					<p className={classes.description}>За счёт заполенения всех рекламных мест по высокой цене</p>
				</div>
			</div>
		</div>
	);
}

export default Balance;
