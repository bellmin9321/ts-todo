import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './components/Header';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from './components/Layout';
import TodoList from './components/TodoList';
import Footer from './components/Footer';

describe('App', () => {
  const queryClient = new QueryClient();
  it('renders App', () => {
    render(
      <RecoilRoot>
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Header />
            <TodoList />
            <Footer />
          </Layout>
        </QueryClientProvider>
      </RecoilRoot>,
    );

    const title = screen.getByText('TODO LIST');

    expect(title).toBeInTheDocument();
  });
});
