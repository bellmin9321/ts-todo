import { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

import Footer from './components/Footer';
import Header from './components/Header';
import Layout from './components/Layout';
import TodoList from './components/TodoList';

const App: FC = () => {
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Header />
          <TodoList />
          <Footer />
        </Layout>
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default App;
