import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import { Button } from 'antd';

function App() {
  return (
    // TODO Antd-Router-Menu组件, 参数是数组, 其中可能有两种属性interface, MenuItem 和MenuItemGroup.
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button type="primary">Button</Button>
      </header>
    </div>
  );
}

export default App;
