import { AccordionItem } from '../types/AccordionItem';

import { useRef, useState } from 'react';

type AccordionProps = {
	items?: AccordionItem[];
	type: 1 | 2;
};

const Accordion = ({ items, type }: AccordionProps) => {
	if (type === 1) {
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
	}
	if (type === 2) {
		const [activeIndex, setActiveIndex] = useState<number | null>(null);

		const clickHandler = (itemIndex: number) => {
			if (activeIndex !== itemIndex) {
				setActiveIndex(itemIndex);
				return;
			}
			setActiveIndex(null);
		};

		return (
			<ul className="accordion">
				{items?.map((item, itemIndex) => (
					<li className={activeIndex === itemIndex ? `accordion__item accordion__item--active` : 'accordion__item'} key={itemIndex}>
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
	}
};

export default Accordion;
