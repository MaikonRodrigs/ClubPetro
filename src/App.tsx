import React from 'react';
import GlobalStyle from './styles/GlobalStyles';
import Header from './pages/header/index';
import SearchComponent from './pages/searchComponent/index';

function App() {
  return (
    <div>
      <Header />
      <SearchComponent />
      <GlobalStyle />
    </div>
  );
}

export default App;
