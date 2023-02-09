import { FC } from 'react';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout';
import TodoList from './components/TodoList/TodoList';

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
