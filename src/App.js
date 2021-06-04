import React, {Component} from 'react'
import './App.css';

import Page1 from './components/Page1'
// import Page2 from './components/Page2'
// import Page3 from './components/Page3'

class App extends Component{

  state = {
    route: 'page1',
    component: null
  }

  onRouteChange = (route) => {
    // No-code splitting
    // this.setState({ route: route });
    // Code Splitting
    if(route === 'page1') {
      this.setState({route: route})
    }
    else if(route === 'page2') {
      import('./components/Page2')
      .then((Page2) => {
        console.log(Page2);
        this.setState({ route: route, component: Page2.default })
      })
      .catch(err => {
        console.log(err);
      });
    }
    else {
      import('./components/Page3')
      .then(Page3 => {
        this.setState({route: route, component: Page3.default})
      })
      .catch(err => {
        console.log(err);
      })
    }
  }

  render() {

  // No code Splitting 
  // if(router === 'page1'){
  //   return <Page1 onRouteChange={onRouteChange} />
  // }
  // else if(router === 'page2'){
  //   return  <Page2 onRouteChange={onRouteChange} />
  // }
  // else if(router === 'page3'){
  //   return <Page3 onRouteChange={onRouteChange} />
  // }

  // Code Splitting 
    if (this.state.route === 'page1') {
      return <Page1 onRouteChange={this.onRouteChange} />
    } else {
      return <this.state.component onRouteChange={this.onRouteChange} />
    }

  }


} 

export default App;
