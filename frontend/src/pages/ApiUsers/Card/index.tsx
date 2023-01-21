import React from 'react';
import { FaCalendarTimes, FaEnvelopeOpen, FaUserCircle } from 'react-icons/fa';
import { SlSocialTwitter } from 'react-icons/sl';

import {
  CardContainer,
  CardDetailsContainer,
  CardDetailsImageContainer,
  CardDetailsParagraphContainer,
  CardDetailsSpanContainer
} from './styles';

export interface User {
  picture: {
    large: string | undefined;
  };
  name: {
    first: string; last: string;
  };
  email: string;
  login: {
    username: string | undefined;
  };
  dob: {
    age: string;
  };
}

interface CardDetailsProps {
  item: User;
}

export function Card({ item }: CardDetailsProps) {
  return (
    <CardContainer>
      <CardDetailsContainer>
        <CardDetailsImageContainer src={item.picture.large} alt='' />
        <CardDetailsParagraphContainer className='name'>
          <FaUserCircle className='soc-icon' />{' '}
          <CardDetailsSpanContainer className='name'>
            {item.name.first + ' ' + item.name.last}{' '}
          </CardDetailsSpanContainer>
        </CardDetailsParagraphContainer>
        <CardDetailsParagraphContainer>
          <FaEnvelopeOpen className='soc-icon' />
          <CardDetailsSpanContainer>
            {item.email}
          </CardDetailsSpanContainer>
        </CardDetailsParagraphContainer>
        <CardDetailsParagraphContainer>
          <FaCalendarTimes className='soc-icon' />{' '}
          <CardDetailsSpanContainer>
            {item.dob.age}
          </CardDetailsSpanContainer>
        </CardDetailsParagraphContainer>
        <CardDetailsParagraphContainer>
          <SlSocialTwitter className='soc-icon' />
          <CardDetailsSpanContainer>
            {
              item.login.username
            }
          </CardDetailsSpanContainer>
        </CardDetailsParagraphContainer>
        <CardDetailsParagraphContainer>
        </CardDetailsParagraphContainer>
      </CardDetailsContainer>
    </CardContainer>
  );
};

export default Card;
