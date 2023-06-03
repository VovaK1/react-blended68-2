import { Component } from 'react';
import { nanoid } from 'nanoid';

import {
  Container,
  Grid,
  GridItem,
  Header,
  SearchForm,
  Section,
  Text,
  Todo,
} from 'components';
import { TodoList } from 'components/TodoList/TodoList';

export const App = () => {
  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />
          <TodoList />
        </Container>
      </Section>
    </>
  );
};
