import React, {Component, lazy, Suspense} from 'react'
import './App.css';

// No code splitting
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'



class App extends Component{

  state = {
    route: 'page1',
    component: null
  }

  onRouteChange = (route) => {
    // No-code splitting
    this.setState({ route: route });
  }

  render() {

  // No code Splitting 
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />
    } else if (this.state.route === 'page2') {
      return <Page2 onRouteChange={this.onRouteChange} />
    } else {
      return <Page3 onRouteChange={this.onRouteChange} />
    }

  }


} 

export default App;
