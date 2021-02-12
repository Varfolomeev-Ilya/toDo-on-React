import './styles.css';
import SectionComponents from './components/body/SectionComponents';
import HeaderComponents from './components/header/HeaderComponents';
import FooterComponents from './components/footer/FooterComponents';
import InputComponents from './components/header/InputComponents';


function App() {
  
  return (
    <div className="App">
      <HeaderComponents/> 
        <InputComponents/>
       <SectionComponents/>
        <FooterComponents/>
    </div>
  );
}

export default App;
