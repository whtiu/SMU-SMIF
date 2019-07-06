import React from 'react';
import { CssBaseline } from '@material-ui/core';
import { StylesProvider } from '@material-ui/styles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SharedMain from 'components/shared/SharedMain'
import HomePage from 'components/home/HomePage';
import AboutPage from 'components/about/AboutPage';
import InvestmentsPage from 'components/investments/InvestmentsPage';
import AchievementsPage from 'components/achievements/AchievementsPage';
import ContactPage from 'components/contact/ContactPage';

const App: React.FC = () => {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <BrowserRouter>
        <SharedMain>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={AboutPage} />
            <Route exact path='/investments' component={InvestmentsPage} />
            <Route exact path='/achievements' component={AchievementsPage} />
            <Route exact path='/contact' component={ContactPage} />
          </Switch>
        </SharedMain>
      </BrowserRouter>
  </StylesProvider>
  );
}

export default App;
