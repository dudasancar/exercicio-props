import './App.css';
import Button from './components/Button/Button';
import Card from './components/Card/Card';
import Card2 from './components/Card2/Card2';
import Titulo from './components/Titulo/Titulo';

function App(props) {
  function handleClick() {
    console.log('Clicou!')
  }
  return (
    <div className="App">
      <Titulo title="Exercício Props" />
      <Button handleClick={handleClick} />
      <Card title="Card1" name="Fulaninho" age="38" city="Jaciara" career="Dentista" />
      <Card2>
        {props.children}
      </Card2>
    </div>
  );
}

export default App;
