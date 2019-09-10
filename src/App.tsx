import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import themeContext, { colors } from './Theme';
import IndexPage from './pages';
import TutorialsPage from './pages/tutorials';
import Container from './components/Container';
import Navbar from './components/Navbar';
import NavLink from './components/NavLink';

const App: React.FC = () => {
  const theme = useContext(themeContext);
  return (
    <BrowserRouter>
      <Navbar title="Multimediaprojekti">
        <NavLink href="#">Tutorials</NavLink>
        <NavLink href="#">About</NavLink>
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
          </Switch>
        </Container>
      </div>
    </BrowserRouter>
  );
};

export default App;
