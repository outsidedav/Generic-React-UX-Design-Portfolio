import React, { Component } from 'react';
import Header from './components/Header';
// import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import resumeData from './resumeData';
import portfolioData from './portfolioData';
import { NavLink, Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header resumeData={resumeData}/>
        <Main />
        <Portfolio resumeData={resumeData}/>
        <ContactUs resumeData={resumeData}/>
        <Footer resumeData={resumeData}/>
      </div>
    );
  }
}

const Navigation = () => (
  <nav>
    {/* <ul>
      <li><NavLink to='/'>Home</NavLink></li>
      <li><NavLink to='/about'>About</NavLink></li>
      <li><NavLink to='/contact'>Contact</NavLink></li>
    </ul> */}
  </nav>
);

const Main = () => (
  <Switch>
    <Route exact path='/' component={Home}></Route>
    {/* <Route exact path='/about' component={About}></Route> */}
    <Route exact path='/contact' component={Contact}></Route>
    <Route exact path='/portfolioPage' component={PortfolioPage}></Route>
  </Switch>
);

const Home = () => (
  <div className='home'>
  </div>
);

// const About = () => (
//   <div className='about'>
//     <h1>About Me</h1>
//     <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
//     <p>Ipsum dolor dolorem consectetur est velit fugiat. Dolorem provident corporis fuga saepe distinctio ipsam? Et quos harum excepturi dolorum molestias?</p>
//   </div>
// );

const Contact = () => (
  <div className='contact'>
    <h1>Contact Me</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

const PortfolioPage = () => (
  <div className='contact'>
    <h1>test</h1>
    <p>You can reach me via email: <strong>hello@example.com</strong></p>
  </div>
);

export default App;