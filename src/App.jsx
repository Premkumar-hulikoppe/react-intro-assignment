import logo from './logo.svg';
import './App.css';

function App() {
  const os = ["Android", "Blackberry", "iPhone", "Windows Phone"];
  const owners = ["Samsung", "HTC", "Micromax", "Apple"];
  return (
    <div className="App">
      <div className="os">
      <h1>Mobile Operating System</h1>
      <GetItems  data = {os}/>
      </div>

      <div className="owners">
      <h1>Mobile Manufacturers</h1>
      <GetItems data = {owners}/>
      </div>
    </div>
  );
}

function GetItems({data}) {
  return (
    <ul>
    {data.map( e => (<li> {e} </li>))}
    </ul>
  )
}

export default App;
