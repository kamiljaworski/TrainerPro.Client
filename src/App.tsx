import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import LoginContainer from './app/components/pages/Login/LoginContainer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import 'typeface-roboto';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <LoginContainer />
      </MuiThemeProvider>
    </Provider>
  );
}

export default App;
