import { h } from 'preact';
import { Router, Link } from 'preact-router';
import 'material-design-lite';
import { Button } from 'preact-mdl';

const Home = () => <h1>Home</h1>;
const About = ({ id }) => <h1>About of {id}</h1>;

export default () => (
  <div>
    <Link href="/home"><Button>Home</Button></Link>
    <Link href="/about"><Button>About</Button></Link>
    <Router>
      <Home path="/home" />
      <About path="/about/:id?" />
      <Home path="/" />
    </Router>
  </div>
);
