import ArrowIcon from '@/components/@ui/ArrowIcon/ArrowIcon';
import MainButton from '@/components/@ui/buttons/MainButton/MainButton';
import classes from './Reports.module.sass';

function Reports() {
	return (
		<div className={classes.Reports} id='reports'>
			<div className={classes.left}>
				<p className={classes.title}>
					Подробные отчёты для вас и правообладателей
				</p>
				<ul>
					<li>
						<div className={classes.icon}>
							<ArrowIcon />
						</div>
						<span>
							Выручка, CTR, показы и другие показатели в реальном времени.
						</span>
					</li>
					<li>
						<div className={classes.icon}>
							<ArrowIcon />
						</div>
						<span>Инструменты контроля качества трафика.</span>
					</li>
					<li>
						<div className={classes.icon}>
							<ArrowIcon />
						</div>
						<span>
							Ежемесячные автоматические отчёты для каждого правообладателя.
						</span>
					</li>
				</ul>
				<MainButton variant='black'>Заказать звонок</MainButton>
			</div>
			<div className={classes.right}>
				<img alt='Notebook' src='/img/notebook.png' />
			</div>
		</div>
	);
}

export default Reports;
