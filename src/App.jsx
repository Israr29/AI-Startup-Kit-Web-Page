import "./App.css";
import Navbar from './components/Navbar/Navbar.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';
import TrustedBy from './components/TrustedBy/TrustedBy.jsx';
import Bento from './components/Bento/Bento.jsx' ;

function App() {
  return <>
    <Navbar/>
    <HeroSection/>
    <TrustedBy/>
    <Bento/>
  </>;
}

export default App;
