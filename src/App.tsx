import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Routes from './routes';
import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <Router>
      <AppProvider>

        <Routes />

      </AppProvider>
    </Router>
    <GlobalStyle />
  </>
);

export default App;
