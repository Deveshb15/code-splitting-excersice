import React, {Component, lazy, Suspense} from 'react'
import './App.css';

// No code splitting
import Page1 from './components/Page1'

// Code Splitting
// import Page2 from './components/Page2'
// import Page3 from './components/Page3'

// Async code splitting- cleaner
// import AsyncComponent from './components/AsyncComponent'

// React.lazy
const AsyncPage2 = lazy(() => import('./components/Page2'))
const AsyncPage3 = lazy(() => import('./components/Page3'))




class App extends Component{

  state = {
    route: 'page1',
    component: null
  }

  onRouteChange = (route) => {
    // No-code splitting
    this.setState({ route: route });

    // Code Splitting
    // if(route === 'page1') {
    //   this.setState({route: route})
    // }
    // else if(route === 'page2') {
    //   import('./components/Page2')
    //     .then((Page2) => {
    //       console.log(Page2);
    //       this.setState({ route: route, component: Page2.default })
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
    // else {
    //   import('./components/Page3')
    //     .then(Page3 => {
    //       this.setState({route: route, component: Page3.default})
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     })
    // }
  }

  render() {

  // No code Splitting 
    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // } else if (this.state.route === 'page2') {
    //   return <Page2 onRouteChange={this.onRouteChange} />
    // } else {
    //   return <Page3 onRouteChange={this.onRouteChange} />
    // }

    //  Code Splitting 
    // if (this.state.route === 'page1') {
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // } else {
    //   return <this.state.component onRouteChange={this.onRouteChange} />
    // }

    // Async Component
    // if(this.state.route === 'page1'){
    //   return <Page1 onRouteChange={this.onRouteChange} />
    // }
    // else if(this.state.route === 'page2'){
    //   const AsyncPage2 = AsyncComponent(() => import('./components/Page2'))
    //   return  <AsyncPage2 onRouteChange={this.onRouteChange} />
    // }
    // else if(this.state.route === 'page3'){
    //   const AsyncPage3 = AsyncComponent(() => import('./components/Page3'))
    //   return  <AsyncPage3 onRouteChange={this.onRouteChange} />
    // }


    // React.lazy
    if(this.state.route === 'page1'){
      return <Page1 onRouteChange={this.onRouteChange} />
    }
    else if(this.state.route === 'page2'){
      return  (
        <Suspense fallback={<div>Loading...</div>}>
          <AsyncPage2 onRouteChange={this.onRouteChange} />
        </Suspense>
      )
    }
    else if(this.state.route === 'page3'){
      return  (
        <Suspense fallback={<div>Loading...</div>}>
          <AsyncPage3 onRouteChange={this.onRouteChange} />
        </Suspense>
      )
    }

  }


} 

export default App;
