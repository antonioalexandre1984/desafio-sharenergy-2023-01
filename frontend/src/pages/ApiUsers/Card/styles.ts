import styled from 'styled-components';

export const CardContainer = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: .5rem;
      margin-bottom: 1rem;
      
`;
export const CardDetailsContainer = styled.div`  
      width: 100%;
      height: 15rem;
      margin-left: 0;
      max-width: 35rem;
      padding: 2rem;
      padding-left: 8rem;
      margin-top: 1.5rem;
      position: relative;
      background: ${({ theme }) => theme.colors["base-blue"]};
      color: ${({ theme }) => theme.colors["base-white"]};
      margin-bottom: 1.5rem;
      border-radius: 1.5rem;
      box-shadow: 0 0 1rem rgba(0, 0, 0, .2);
      line-height: 2rem;
      & svg
      {
        margin-right: 1.5rem;
      }
`;
export const CardDetailsImageContainer = styled.img`
  top: 50%;
      left: -6rem;
      width: 12rem;
      height: 12rem;
      position: absolute;
      border-radius: 2rem;
      transform: translateY(-50%);
`;
export const CardDetailsParagraphContainer = styled.p`
      margin: .25rem 1rem;
      margin-left: 2.5rem;
`;
export const CardDetailsSpanContainer = styled.span`
      display: inline-block;
      margin-bottom: .15rem;
      
      &.name
      {
        font-size: 1.8rem;
        font-weight: 700;
      }
`;