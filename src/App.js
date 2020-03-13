import React from 'react';


import logo from './logo.svg';
import Link from './components/link';

import './App.css';

import { css } from 'styled-components/macro';

const styles = {
    root: css`
      text-align: center;
    `,

    header: css`
        background-color: #282c34;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: calc(10px + 2vmin);
        color: white;
    `,
}


function App() {
  return (
    <div css={styles.root}>
      <header css={styles.header}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Link />
      </header>
    </div>
  );
}

export default App;
