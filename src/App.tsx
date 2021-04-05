import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core'
import Home from './pages/Home';
import './App.css'

const Dev = React.lazy(() => import('./pages/dev/Sviluppatore'));
// const Home = React.lazy(() => import('./pages/Home'));
// const Layout = React.lazy(() => import('./pages/layout/Layout'));
const Photo = React.lazy(() => import('./pages/fotografia/Galleria'));

function App() {
  return (
    <React.Suspense fallback={<CircularProgress />}>
      <Router>
        {/* <Layout> */}
          <Route exact path="/" render={() => <Home />} />
          <Route path='/dev' render={() => <Dev />} />
          <Route path='/photo' render={() => <Photo />} />
        {/* </Layout> */}
      </Router>
    </React.Suspense>
  );
}

export default App;
