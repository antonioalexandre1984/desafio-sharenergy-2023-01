import { useEffect, useState } from 'react';
import { User } from '../../Types/User';
import { customAlphabet } from 'nanoid'
import { HomeHeaderContainer, HomeHeaderTitleContainer } from './styles';
import { Card } from './Card';
import { Pagination } from './Pagination';
import { Search } from './Search';
import React from 'react';
import axios from 'axios';


export function ApiUsers() {
  const [apiData, setApiData]: any = useState([]);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState<number>(10);

  useEffect(() => {
    axios.request(
      {
        method: 'GET',
        url: 'api/?results=50'
      })
      .then((Response: any) => {
        console.log(Response.data.results);
        setData(Response.data.results);
        setApiData(renderData(Response.data.results));
      })
    console.log(data)
  }, [setData, setApiData]);

  const nanoid = customAlphabet('1234567890abcdef', 10)

  const renderData =
    (data:
      {
        picture: {
          large: string;
        };
        name: {
          first: string; last: string;
        };
        email: string;
        login: {
          username: string;
        };
        dob: {
          age: string;
        };
      }[]) => {
      return data.map((item: {
        picture: { large: string };
        name: { first: string; last: string; };
        login: { username: string };
        email: string;
        dob: { age: string; };
      }) =>
      (
        <Card key={nanoid(8)} item={item} />
      ));
    };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const CurrentPosts = () =>
  (
    apiData?.slice(indexOfFirstPost, indexOfLastPost)
  );
  const handleSearchInput = (Event: any) => {
    setApiData(renderData(data.filter((user: User) => user.name.first.toLowerCase().includes(Event.target.value.toLowerCase()))));
  }

  const paginate = (pageNumber: React.SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  }

  return (
    <div className='container'>
      <HomeHeaderContainer>
        <HomeHeaderTitleContainer>
          Random User Generator
        </HomeHeaderTitleContainer>
      </HomeHeaderContainer>
      <Search onChange={handleSearchInput} />
      <CurrentPosts />
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={apiData?.length}
        paginate={paginate}
      />
    </div>
  );
}

