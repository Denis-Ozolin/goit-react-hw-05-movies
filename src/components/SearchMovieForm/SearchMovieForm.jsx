import { useState } from 'react';
import { FormContainer, Form } from './SearchMovieForm.styled';
import { StyledButton } from 'components/Button/Button.styled';

export const SearchMovieForm = ({ getQuery }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onChageQuery = event => {
    setSearchQuery(event.target.value);
  };

  // const resetInput = () => {
  //   setSearchQuery('');
  // };

  const onSubmitQuery = event => {
    event.preventDefault();
    getQuery(searchQuery);
    // resetInput();
  };

  return (
    <FormContainer>
      <Form onSubmit={onSubmitQuery}>
        <input
          onChange={onChageQuery}
          type="text"
          placeholder="Input movie name"
          value={searchQuery}
        />
        <StyledButton type="submit">Search</StyledButton>
      </Form>
    </FormContainer>
  );
};
