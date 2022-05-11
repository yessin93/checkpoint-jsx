import logo from './logo.svg';
import './App.css';
import hero from "./imageInSrc.jpg"
import "./styles.css"




function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black", maxwidth:"100vw"}}>
       <h1 className="title-red">mohamed yessin bouchaala</h1>
      <img src="/imageInPublic.jpg" alt="moon knight cover"/>
      <img src ={hero} alt='myHero'/>
      
            
      </div>
    </div>
  );
}

export default App;
