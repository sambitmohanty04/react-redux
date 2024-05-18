import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, reset } from '../action/counterAction'; 


const CounterModal = ({ count, increment, decrement, reset }) => {
  return (
    <div className='redux-btns'>
      <h3>Counter Number: {count}</h3>
      <button className='btn btn-primary text-center' onClick={increment}>Increment</button>
      <button className='btn btn-danger' onClick={decrement}>Decrement</button>
      <button className='btn btn-warning' onClick={reset}>Reset</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count // Map 'count' from Redux store state to 'count' prop
});

const mapDispatchToProps = {
  increment,
  decrement,
  reset
};

export  default connect(mapStateToProps, mapDispatchToProps)(CounterModal);