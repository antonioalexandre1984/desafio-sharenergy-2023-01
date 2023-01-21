import { ReactNode } from 'react';
import { Link } from "react-router-dom"


import {
  PaginationContainer,
  PaginationListContainer,
  PaginationListItemContainer,
  PaginationListItemLinkContainer
} from './styles';

interface PaginationProps {
  postsPerPage: number;
  totalPosts: number;
  paginate: (number: number) => void;
  children?: ReactNode;
}

export function Pagination({ ...props }: PaginationProps) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalPosts / props.postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <PaginationContainer>
      <div className='container'>
        <PaginationListContainer>
          {
            pageNumbers.map((Number) =>
            (
              <PaginationListItemContainer key={Number} className='pag-link */'>
                <Link to="#">
                  <PaginationListItemLinkContainer onClick={() => props.paginate(Number)} >
                    {Number}
                  </PaginationListItemLinkContainer>
                </Link>
              </PaginationListItemContainer>
            ))
          }
        </PaginationListContainer >
      </div>
    </PaginationContainer >
  );
}
