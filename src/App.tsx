import { FC } from 'react';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout';
import TodoList from './components/TodoList/TodoList';

const App: FC = () => {
  return (
    <Layout>
      <Header />
      <TodoList />
      <Footer />
    </Layout>
  );
};

export default App;
