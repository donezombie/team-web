import React, { useState, useCallback } from 'react';
import { Collapse } from 'reactstrap';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQItem = ({ faq, index }) => {
	const [ isOpen, setIsOpen ] = useState(false);

	const toggle = useCallback(
		() => {
			setIsOpen(!isOpen);
		},
		[ isOpen ]
	);

	return (
		<div className="faq-content__item wow fadeIn" data-wow-delay={`0.${index + 2}s`}>
			<div className="faq--content__question">
				<p onClick={toggle} className={isOpen ? 'active' : ''}>{faq.question}</p>
				<div className={`faq--content__btn ${isOpen ? 'active' : ''}`} onClick={toggle}>
					{isOpen ? <FiChevronUp /> : <FiChevronDown />}
				</div>
			</div>
			<Collapse className="faq--content__answer" isOpen={isOpen}>
        <div dangerouslySetInnerHTML={{ __html: faq.answer}} />
			</Collapse>
		</div>
	);
};

const FAQ = ({ data }) => {
	return (
		<div className="faq--root" id="faq">
			<h3 className="faq--title wow fadeIn">Frequently Asked Questions</h3>
			<p className="faq--description wow fadeIn" data-wow-delay="0.2s">No questions left unanswered</p>
			<div className="faq--content">
        {data.map((faq, index) => <FAQItem key={faq.question} faq={faq} index={index}/>)}
			</div>
		</div>
	);
};
export default FAQ;
