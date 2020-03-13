import React from 'react';

import { action } from '@storybook/addon-actions';
import SearchBar from './searchBar';

import { css } from 'styled-components/macro';

export default {
  title: 'SearchBar',
  component: SearchBar
};

export const Story = () => <div css={css`
    width: 800px; 
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #eeeeee;
    `}><SearchBar /></div>;
