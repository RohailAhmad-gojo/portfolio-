import './App.css';
import Navbar from './component/navbar/Navbar';
import Secone from './component/hero/Secone'
import Sectwo from './component/scetion two/Sectwo';
import SecThree from './component/sectionthree/SecThree';
import Footer from './component/footer/Footer';
import { CssBaseline } from '@material-ui/core';

function App() {
  return (
    <div className="App">
    
      <Navbar/>
      <Secone/>
      <Sectwo/>
      <SecThree/>
      <Footer/>
    </div>
  );
}

export default App;
