import '../css/normalize.css';
import '../css/reset.css';
import '../css/fonts.css'

import '../css/App.css';

import { BrowserRouter } from 'react-router-dom'
import { Component } from 'react';

import Navigation from '../layouts/Navigation';
import Page from '../layouts/Page.js'
import Footer from '../layouts/Footer';

import CallBtn from './Call-Btn';

class App extends Component {

  state = {
    isMain: true
  }

  mainPageChanged = (isMain) => {
    if (isMain !== this.state.isMain) this.setState({
      isMain
    })
  }

  unhideMenu = () => {
    if (window.scrollY > 0.2 * window.outerHeight) {
      if (document.querySelector('.topNavigation').classList.contains('hide')) {
        // console.log('Should remove class')
        document.querySelector('.topNavigation').classList.remove('hide')
      }
    } else {
      if (!document.querySelector('.topNavigation').classList.contains('hide')) {
        // console.log('Should add class')
        document.querySelector('.topNavigation').classList.add('hide')
      }
    }
  }

  render() {
    if (this.state.isMain) {
      // console.log('Should add event')
      window.addEventListener('scroll', this.unhideMenu)
    } else {
      // console.log('Should remove event')
      window.removeEventListener('scroll', this.unhideMenu)
    }

    return (
      <BrowserRouter>
        <div className="App">
          <Navigation isMain={this.state.isMain} mainPageChanged={this.mainPageChanged} />
          <Page isMain={this.state.isMain} mainPageChanged={this.mainPageChanged} />
          <Footer isMain={this.state.isMain} mainPageChanged={this.mainPageChanged} />
          <CallBtn />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

// a --> Link  (NavLink -> dodaje klasę 'active' aktywnemu elem. | exact -> dokładnie ten elem. (np. "/" | activeClassName="myActiceClass"))
// href --> to="/myPage"
//           <Route path="/myPage" component={HomePage} exact --> (default=true) /> 
// Error:
//    <Switch>
//        <Route path="" component={} />
//        <Route component={ErrorPage} />
//    </>
// Wyświetli pierwsze trafienie