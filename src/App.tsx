import React from 'react';
import { Provider } from 'react-redux';
import { store, persistor } from './app/store';
import { PersistGate } from "redux-persist/integration/react";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './app/components/common/PrivateRoute/PrivateRouteContainer';
import HomePage from './app/components/pages/Home/HomeContainer';
import RouterPaths from './shared-js/enums/RouterPaths';
import LoginRegisterPage from './app/components/pages/LoginRegister/LoginRegisterPageContainer';
import 'typeface-roboto';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Switch>
              <PrivateRoute path={RouterPaths.Home} redirectPath={RouterPaths.LoginRegister}>
                <HomePage />
              </PrivateRoute>
              <PrivateRoute exact path={RouterPaths.Base} redirectPath={RouterPaths.LoginRegister}>
                <HomePage />
              </PrivateRoute>
              <Route exact path={RouterPaths.LoginRegister}>
                <LoginRegisterPage />
              </Route>
            </Switch>
          </BrowserRouter>
          <ToastContainer autoClose={2000} />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
