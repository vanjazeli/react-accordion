import Accordion from './components/Accordion';

const App = () => {
	const accordionItems = [
		{
			title: 'Alright, but what exactly do you do?',
			description: 'Timperdiet gravida scelerisque odio nunc. Eget felis, odio bibendum quis eget sit lorem donec diam. Volutpat sed orci turpis sit dolor est a pretium eget. Vitae turpis orci vel tellus cursus lorem vestibulum quis eu. Ut commodo, eget lorem venenatis urna.',
		},
		{
			title: 'Are your rates competitive?',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed tincidunt viverra lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus at ex sed ex congue feugiat. Maecenas rhoncus justo id augue varius, sed luctus neque venenatis.',
		},
		{
			title: 'Why do you have a monthly project cap?',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula sapien at justo lacinia, eget cursus purus aliquet. Nulla facilisi. Proin congue urna ut sem vestibulum, ac dignissim velit eleifend. Nullam venenatis, purus sit amet condimentum venenatis, quam turpis varius augue.',
		},
	];

	return (
		<ul className="wrap">
			<li className="wrap__item">
				<h2 className="wrap__heading">Using Refs</h2>
				<Accordion items={accordionItems} type={1} />
			</li>
			<li className="wrap__item">
				<h2 className="wrap__heading">Using State</h2>
				<Accordion items={accordionItems} type={2} />
			</li>
		</ul>
	);
};

export default App;
