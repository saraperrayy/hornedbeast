// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { animalData } from './data';



function App() {
  
  return (
    <div className="App">
      <Header/>
      <Main 
        animalData={animalData}
      />
      <Footer/>
    </div>
  );
}
export default App;