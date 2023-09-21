import { AccordionItem } from '../types/AccordionItem';

type AccordionProps = {
	items?: AccordionItem[];
};

const Accordion = ({ items }: AccordionProps) => {
	return (
		<ul className="accordion">
			{items?.map((item, itemIndex) => (
				<li className="accordion__item" key={itemIndex}>
					<span className="accordion__number">{itemIndex + 1 < 10 ? `0${itemIndex + 1}` : itemIndex + 1}</span>
					<button className="accordion__button" type="button">
						<span className="accordion__title">{item.title}</span>
						<span className="accordion__icon"></span>
					</button>
					<div className="accordion__description-holder">
						<p className="accordion__description">{item.description}</p>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Accordion;
