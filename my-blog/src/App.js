import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Error from './components/Error';

import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import CreatePost from './components/posts/CreatePost';
import PostDetails from './components/posts/PostDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <main>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/post/:id" component={PostDetails}></Route>
            <Route path="/create" component={CreatePost}></Route>
            <Route path="*" component={Error}></Route>
          </Switch>
        </main>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
