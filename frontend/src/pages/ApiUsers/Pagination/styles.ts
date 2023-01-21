import styled from 'styled-components';

export const PaginationContainer = styled.div`
      display: flex;
      align-items: center;
      justify-content: space-between;
`;
export const PaginationListContainer = styled.ul`
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 3rem;
      gap: 2rem;
      list-style-type: none;
     
   
`;

export const PaginationListItemContainer = styled.li`
   float: left;
   margin: 0 5px;
   padding: 1rem 1rem 1rem;
   border-radius: 10px;
   transition: all .2s;
   background: ${({ theme }) => theme.colors["base-text2"]};

&:hover
   {
      background:${props => props.theme.colors['base-blue']};
     

   }
`;

export const PaginationListItemLinkContainer = styled.div`
      color:${props => props.theme.colors['base-blue']};
      transition: all .2s;
      text-decoration: none;
      transition: all .1s;

      &:hover
      {
        color:${props => props.theme.colors['base-white']};
      } 

`;

