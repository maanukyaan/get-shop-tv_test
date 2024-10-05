import Clickwave from '@/components/icons/partners/Clickwave';
import Novasphere from '@/components/icons/partners/Novasphere';
import Zyphronix from '@/components/icons/partners/Zyphronix';
import classes from './Partners.module.sass';

function Partners() {
	return (
		<div className={classes.Partners} id="partners">
			<h4 className={classes.title}>Наши партнёры по монетизации</h4>
			<div className={classes.logos}>
				<Clickwave />
				<Zyphronix />
				<Novasphere />
			</div>
		</div>
	);
}

export default Partners;
