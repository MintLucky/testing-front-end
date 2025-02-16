import './App.css';
import { useEffect, useState } from 'react';
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  const onClick = () => setToggle(prev => !prev);

  useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 500)
  }, []);
  return (
    // <div className="App">
    //   {toggle === true && <div data-testid="toggle-elem">toggle</div>}
    //   {data && <div>data</div>}
    //   <h1>Hello world</h1>
    //   <button data-testid="toggle-btn" onClick={onClick}>click me</button>
    //   <input type="text" placeholder="input value" />
    // </div>


    <div>
        <Navbar />
        <AppRouter />
    </div>
  );
}

export default App;
