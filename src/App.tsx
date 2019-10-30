import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import LoginRegister from './app/components/pages/LoginRegister/LoginRegisterContainer';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import 'typeface-roboto';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './app/components/common/PrivateRoute/PrivateRouteContainer';
import UserRoles from './shared-js/enums/UserRoles';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={LoginRegister} />
          </Switch>
        </BrowserRouter>
      </ThemeProvider> 
    </Provider>
  );
}

export default App;
