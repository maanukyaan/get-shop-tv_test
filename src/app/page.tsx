import Balance from '@/components/sections/Balance/Balance';
import Form from '@/components/sections/Form/Form';
import Header from '@/components/sections/Header/Header';
import Partners from '@/components/sections/Partners/Partners';
import Reports from '@/components/sections/Reports/Reports';
import SwitchablePanel from '@/components/sections/SwitchablePanel/SwitchablePanel';
import React from "react";

export default function Home() {
	return (
		<>
			<Header />
			<SwitchablePanel />
			<Balance />
			<Partners />
			<Reports />
			<Form />
		</>
	);
}
