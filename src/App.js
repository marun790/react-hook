import React from 'react';
import './App.css'
// import HookMouse from './components/HookMouse';
// import HookMouseContainer from './components/HookMouseContainer';
// import IntervalHookCounter from './components/IntervalHookCounter';
import DataFetch from './components/DataFetch';
// import CounterComponent from './components/CounterComponent';
// import HookCounter from './components/HookCounter';
// import HoockObject from './components/HoockObject';
// import ArrayHook from './components/ArrayHook';
// import HookCounter1 from './components/HookCounter1';

function App() {
  return (
    // <Provider store={store}>
    //   <BakaryComponent />
    // </Provider>
    // <CounterComponent />
    <div className="App">
      {/* <HookCounter /> */}
      {/* <HoockObject /> */}
      {/* <ArrayHook /> */}
      {/* <HookMouse /> */}
      {/* <HookMouseContainer/> */}
      {/* <IntervalHookCounter/> */}
      {<DataFetch/>}
    </div>
  );
}

export default App;
