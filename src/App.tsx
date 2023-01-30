import React from 'react';
import { RecoilRoot } from 'recoil';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <RecoilRoot>
      <div className="App">
        <Header />
        <TodoList />
        <Footer />
      </div>
    </RecoilRoot>
  );
}

export default App;
