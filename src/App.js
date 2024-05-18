import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Route,  Routes} from 'react-router-dom';

import CounterModal from './components/counterModal'
import Header from './components/header'
import Sidebar from './components/sidebar';
import Home from './pages/Home';
import SignUp from './components/signUp';
import SignIN from './components/signIn';

function App() {

  // let arr = [1,3,10,11,14];
  // goal = 13;

  const [count, setCount] = useState(0);
  const [inputVal, setInputVal] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const increment = () => {
      setCount(count + +inputVal);
      //setCount(count + 1);
      setInputVal('');
  }

  const decrement = () => {
    if(count > 0) {
      setCount(count - 1);
    }
  }

  const handleChange = (e) => {
    setInputVal(e.target.value);
  }

  //modal open
  const openModal = () => {
    setIsOpenModal(true);
  }
  const closeModal = () => {
    setIsOpenModal(false);
  }

  return (
    <div className="App">
      <Router>
      <Header />
        <Routes>
          {/* <Home /> */}
          <Route path="/" Component={Home } />
          <Route path="/signUp" Component={SignUp} />
          <Route path="/signIn" Component={SignIN} />
        </Routes>
      </Router>
      {/* <SignUp /> */}
      {/* <div className='text-center'>
        <h3>{count}</h3>
        <input type='number' placeholder='Enter a number' onChange={handleChange} value={inputVal} />
        <button className='btn' onClick={increment}>Increment</button>
        <button className='btn' onClick={decrement}>Decrement</button>
      </div>
      <div className='m-5'>
        <button className='btn btn-info' onClick={openModal}>counter using react-redux</button>
        {
          isOpenModal && <CounterModal onClick={closeModal} />
        }
        
      </div> */}
    </div>
  );
}

export default App;
