import React from 'react';

import { css } from 'styled-components/macro';

import SearchResults from './searchResults';

const styles = {
    root: css`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 100%;
        width: 400px;
        background-color: white;
    `,

    row: css`
        align-self: center;
        width: 100%;        
    `,

    input: css`
        margin-top: 150px;
        background-color: white;
        width: 100%;
    `,

    results: css`
        flex-grow: 2;
        background-color: #f5f5f5;
    `,
    
    footer: css`
        /* justify-self: flex-end; */
        height: 30px;
        background-color: #cccccc;
    `
};

export default () =>
    <div css={styles.root}>
        <div css={styles.row}>
            <input css={styles.input} type="text" />
        </div>
        <div css={styles.results}>
            <SearchResults />
        </div>
        <div css={styles.footer}>
            Footer
        </div>
    </div>
;