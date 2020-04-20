import React from 'react';

import { action } from '@storybook/addon-actions';
import DateInput from '../date-input';

import { css } from 'styled-components/macro';

export default {
  title: 'DateInput',
  component: DateInput
};


export const Story = () => <DateInput />;
