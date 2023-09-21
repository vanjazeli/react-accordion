import { AccordionItem } from '../types/AccordionItem';

import { useRef } from 'react';

type AccordionProps = {
	items?: AccordionItem[];
};

const Accordion = ({ items }: AccordionProps) => {
	const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

	const clickHandler = (itemIndex: number) => {
		const targetItem = itemRefs.current[itemIndex];
		if (targetItem?.classList.contains('accordion__item--active')) {
			itemRefs.current.forEach((item) => {
				item?.classList.remove('accordion__item--active');
			});
		} else {
			itemRefs.current.forEach((item) => {
				item?.classList.remove('accordion__item--active');
			});
			targetItem?.classList.add('accordion__item--active');
		}
	};

	return (
		<ul className="accordion">
			{items?.map((item, itemIndex) => (
				<li className="accordion__item" key={itemIndex} ref={(el) => (itemRefs.current[itemIndex] = el)}>
					<span className="accordion__number">{itemIndex + 1 < 10 ? `0${itemIndex + 1}` : itemIndex + 1}</span>
					<button
						className="accordion__button"
						type="button"
						onClick={() => {
							clickHandler(itemIndex);
						}}
					>
						<span className="accordion__title">{item.title}</span>
						<span className="accordion__icon"></span>
					</button>
					<div className="accordion__description-holder">
						<div className="accordion__description-wrap">
							<p className="accordion__description">{item.description}</p>
						</div>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Accordion;
