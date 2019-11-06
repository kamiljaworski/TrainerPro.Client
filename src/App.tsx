import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PrivateRoute from './app/components/common/PrivateRoute/PrivateRouteContainer';
import UserRoles from './shared-js/enums/UserRoles';
import Home from './app/components/pages/Home/Home';
import RouterPaths from './shared-js/enums/RouterPaths';
import TrainerProfile from './app/components/pages/TrainerProfile/TrainerProfilePage';
import LoginRegisterPage from './app/components/pages/LoginRegister/LoginRegisterPageContainer';
import 'typeface-roboto';
import "react-toastify/dist/ReactToastify.css";
import 'animate.css';

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
            <PrivateRoute exact path={RouterPaths.TrainerProfile} requiredRole={UserRoles.Trainer}
              redirectPath={RouterPaths.Home}>
              <TrainerProfile />
            </PrivateRoute>
            <Route exact path={RouterPaths.Home}><Home /></Route>
            <Route exact path={RouterPaths.LoginRegister}><LoginRegisterPage /></Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
