'use client';

import { useState } from 'react';
import classes from './SwitchablePanel.module.sass';

type TabType = 'operators' | 'ott';

interface PanelContent {
	description: string;
}

function SwitchablePanel() {
	const [activeTab, setActiveTab] = useState<TabType>('operators');

	const handleTabClick = (tab: TabType) => {
		setActiveTab(tab);
	};

	const panels: Record<TabType, PanelContent> = {
		operators: {
			description:
				'Найдите идеальный баланс выручки и удовлетворённости пользователей с платформой рекламной монетизации',
		},
		ott: {
			description:
				'Дополнительные возможности обогащения данных об аудитории и монетизации',
		},
	};

	return (
		<div className={classes.SwitchablePanel} id='sources'>
			<div className={classes.left}>
				<p className={classes.title}>
					Дополнительные источники выручки для разных компаний
				</p>
			</div>
			<div className={classes.panel}>
				<div
					className={`${classes.tabs} ${
						activeTab === 'ott' ? classes.moveToRight : ''
					}`}
				>
					<button
						className={`${classes.tab} ${
							activeTab === 'operators' ? classes.active : ''
						}`}
						onClick={() => handleTabClick('operators')}
					>
						Операторам
					</button>
					<button
						className={`${classes.tab} ${
							activeTab === 'ott' ? classes.active : ''
						}`}
						onClick={() => handleTabClick('ott')}
					>
						OTT сервисам
					</button>
				</div>
				<div className={classes.content}>
					<p>{panels[activeTab].description}</p>
				</div>
			</div>
		</div>
	);
}

export default SwitchablePanel;
