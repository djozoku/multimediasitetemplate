import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import themeContext, { colors } from './Theme';
import IndexPage from './pages';
import TutorialsPage from './pages/tutorials';
import Container from './components/Container';
import Navbar from './components/Navbar';
import NavLink from './components/NavLink';
import AboutPage from './pages/about';

const App: React.FC = () => {
  const { theme } = useContext(themeContext);
  return (
    <BrowserRouter>
      <Navbar title="Ozoku's Tutorials">
        <NavLink href="/tutorials">Tutorials</NavLink>
        <NavLink href="/about">About</NavLink>
      </Navbar>
      <div
        style={{
          backgroundColor: colors[theme].background,
          height: '100vh',
          color: colors[theme].text
        }}
      >
        <Container>
          <Switch>
            <Route path="/" exact component={IndexPage} />
            <Route path="/tutorials" exact component={TutorialsPage} />
            <Route path="/about" exact component={AboutPage} />
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;
