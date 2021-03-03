import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CodeGirlz from './components/CodeGirlz';
import HomeschoolLibrary from './components/HomeschoolLibrary';
import Resume from './components/Resume';

function App() {
  return (
    <div className="App">  
      <Switch>
        <Route exact path='/'>
          <Header />
          <Intro />
          <About />
          <Skills />
          <Projects/>
          <Contact />
          <Footer />
        </Route>
        <Route path='/project/codegirlz' component={CodeGirlz} />
        <Route path='/project/homeschoollibrary' component={HomeschoolLibrary} />
        <Route path='/resume' component={Resume} />
      </Switch> 
    </div>
  );
}

export default App;
