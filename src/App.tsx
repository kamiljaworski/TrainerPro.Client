import React from 'react';
import Home from './app/components/pages/Home/Home';
import { Provider } from 'react-redux';
import { store } from './app/store';
import LoginContainer from './app/components/pages/Login/LoginContainer';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Home name="Janusz" />
      <LoginContainer />
    </Provider>
  );
}

export default App;
