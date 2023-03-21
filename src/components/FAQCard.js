import React from 'react';
import { Link } from 'react-router-dom';

import classes from './FAQCard.module.css';

const FAQCard = (props) => {
  const {card} = props;

  return (
    <div className='col-xs-12 col-sm-6 col-md-4 col-lg-3 p-0'>
      <Link to={card.path} className='d-block mx-5 m-4 m-sm-4'>
        <div className='faq-card p-4'>
          <i className={'fa-solid ' + card.icon + ' gradient-text-color'}></i>
          <p className='m-0 mt-3 gradient-text-color'>{card.text}</p>
        </div>
      </Link>
    </div>
  )
}

export default FAQCard