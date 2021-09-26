import { useState } from 'react';

export const SearchMovieForm = ({ getQuery }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChageQuery = event => {
    setSearchQuery(event.target.value);
  };

  const resetInput = () => {
    setSearchQuery('');
  };

  const onSubmitQuery = event => {
    event.preventDefault();
    getQuery(searchQuery);
    resetInput();
  };

  return (
    <form onSubmit={onSubmitQuery}>
      <input
        onChange={onChageQuery}
        type="text"
        placeholder="Input movie name"
        value={searchQuery}
      />
      <button type="submit">Search</button>
    </form>
  );
};
