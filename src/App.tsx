import Accordion from './components/Accordion';

const App = () => {
	const accordionItems = [
		{
			title: 'First item',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula sapien at justo lacinia, eget cursus purus aliquet. Nulla facilisi. Proin congue urna ut sem vestibulum, ac dignissim velit eleifend. Nullam venenatis, purus sit amet condimentum venenatis, quam turpis varius augue.',
		},
		{
			title: 'Second item',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut ornare odio. Quisque in quam eu tortor efficitur efficitur eu vel tellus. Fusce quis nunc vitae metus lacinia elementum. Sed sem eros, bibendum nec cursus ac, varius id elit. Integer non tortor eget nulla posuere cursus in sit amet risus. In hac habitasse platea dictumst. Vivamus eget metus et nunc rutrum tristique.',
		},
		{
			title: 'Third item',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. Sed tincidunt viverra lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus at ex sed ex congue feugiat. Maecenas rhoncus justo id augue varius, sed luctus neque venenatis.',
		},
	];

	return (
		<div className="wrap">
			<Accordion items={accordionItems} />
		</div>
	);
};

export default App;
