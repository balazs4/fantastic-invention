import { h } from 'preact';
import { Router, Link } from 'preact-router';
import 'material-design-lite';
import mdl from 'preact-mdl/dist/preact-mdl'

const Home = () => <h1>Home</h1>
const GettingStarted = () => <h1>Getting started</h1>
const About = ({id}) => <h1>About of {id}</h1>



export default () => (
    <div>
        <Link href='/home'><mdl.Button>Home</mdl.Button></Link>
        <Link href='/about'><mdl.Button>About</mdl.Button></Link>
        <Router>
            <Home path='/home' />
            <About path='/about/:id?' />
            <Home path='/' />
        </Router>
    </div>
)