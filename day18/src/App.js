import logo from './logo.svg';
import './App.css';

function App() {
  var block = [];
  for (let i = 0; i < 8; i++) {
    let bgColor = i % 2 === 0 ? 'black' : 'white'
    for (let j = 0; j < 8; j++) {
      if(j==7||j==0)
      {
        block.push((
          <div style={{ backgroundColor: bgColor, height: '30px', width: '20px' }}></div>
        ))
      }
      else
      {
        block.push((
          <div style={{ backgroundColor: bgColor, height: '30px', width: '30px' }}></div>
        ))
      }
      bgColor = (bgColor === 'white' ? 'black' : 'white');
    }
  }
  return (
    <div className='board'>
      {block}
    </div>
  )
}

export default App;
