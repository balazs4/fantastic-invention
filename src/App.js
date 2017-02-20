import { h } from 'preact';
import { Router, Link } from 'preact-router';
import 'material-design-lite';
import { Button } from 'preact-mdl';

const Home = () => <h1>Home</h1>;
const About = ({ id = 'preact' }) => <h1>About {id}</h1>;

export default () => (
  <div>
    <Link href="/home"><Button primary raised>Home</Button></Link>
    <Link href="/about/preact"><Button accent>About</Button></Link>
    <Router>
      <Home path="/home" />
      <About path="/about/:id?" />
      <Home path="/" />
    </Router>
  </div>
);
