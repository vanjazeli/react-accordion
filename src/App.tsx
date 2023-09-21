import Accordion from './components/Accordion';

const App = () => {
	const accordionItems = [
		{
			title: 'Alright, but what exactly do you do?',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula sapien at justo lacinia, eget cursus purus aliquet. Nulla facilisi. Proin congue urna ut sem vestibulum, ac dignissim velit eleifend. Nullam venenatis, purus sit amet condimentum venenatis, quam turpis varius augue.',
		},
		{
			title: `I don't need a brand strategist but I need help executing an upcoming campaign. Can we still work together?`,
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ornare odio. Quisque in quam eu tortor efficitur efficitur eu vel tellus. Fusce quis nunc vitae metus lacinia elementum. Sed sem eros, bibendum nec cursus ac, varius id elit. Integer non tortor eget nulla posuere cursus in sit amet risus. In hac habitasse platea dictumst. Vivamus eget metus et nunc rutrum tristique.',
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
		<ul className="holder">
			<li className="holder__item">
				<h2 className="holder__heading">No animation</h2>
				<Accordion items={accordionItems} />
			</li>
			<li className="holder__item">
				<h2 className="holder__heading">Vanilla animation</h2>
				<Accordion items={accordionItems} />
			</li>
			<li className="holder__item">
				<h2 className="holder__heading">GSAP animation</h2>
				<Accordion items={accordionItems} />
			</li>
		</ul>
	);
};

export default App;
