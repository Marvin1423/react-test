import './App.css';
import Paragraph from './components/paragraph/paragraph'
import Button from './components/button/button';

function App() {
  return (
    <div className="App">
      <Paragraph transformText='uppercase' color='blue'/>
      <Paragraph transformText='uppercase'  color='red'/>
      <Paragraph transformText='uppercase' color='lightgreen'/>

      <div className='buttons'>
        <Button label='Baixar CV'/>
        <Button label='Play'/>
        <Button label='Download'/>
      </div>
    </div>
  );
}

export default App;
