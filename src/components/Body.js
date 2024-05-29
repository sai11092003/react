import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import usercontext from '../../utils/useContext';
import Card from './Card';
import Shimmer from './Shimmer';

const Body = () => {
  const { Results } = useContext(usercontext);

  if (!Results || Results.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="flex flex-wrap min-h-screen justify-center">
      {Results.map((item) => (
        <Link key={item.id} to={`/burger/${item.id}`}>
          <Card {...item} />
        </Link>
      ))}
    </div>
  );
};

export default Body;
