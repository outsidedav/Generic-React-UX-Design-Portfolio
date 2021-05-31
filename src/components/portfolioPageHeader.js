import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class portfolioPageHeader extends Component {
  render() {
    let portfolioData = this.props.portfolioData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
            <li><NavLink to='/'>Home</NavLink></li>
               <li><a className="smoothscroll" href="#portfolio">All Work</a></li>
               <li><NavLink to='/portfolioPage'>portfolioPage</NavLink></li>
     
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">This is the {portfolioData.name} Project.</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>I am a {portfolioData.role}.{portfolioData.roleDescription}
               </h3>
               <hr/>
               <ul className="Tools">
                  {/* {
                    portfolioData.socialLinks && portfolioData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  } */}
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}