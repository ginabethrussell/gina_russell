
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CodeGirlz from './components/CodeGirlz';
import UpgradeTutors from './components/UpgradeTutors';
import AnywhereFitness from './components/AnywhereFitness';

function App() {
  return (
    <div className="App">  
      <Switch>
        <Route exact path='/'>
          <Header />
          <Intro />
          <About />
          <Projects/>
          <Contact />
          <Footer />
        </Route>
        <Route path='/project/codegirlz' component={CodeGirlz} />
        <Route path='/project/upgradetutors' component={UpgradeTutors} />
        <Route path='/project/anywherefitness' component={AnywhereFitness} />
      </Switch>
      
      {/* <div>Icons made by <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
      {/* <div>Icons made by <a href="https://www.flaticon.com/authors/darius-dan" title="Darius Dan">Darius Dan</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    </div>
  );
}

export default App;
