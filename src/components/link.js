import React from 'react';

import { css } from 'styled-components/macro';

const styles = {
    link: css`
        color: #61dafb;
    `
};

export default () => 
    <a css={styles.link} href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
    </a>;
