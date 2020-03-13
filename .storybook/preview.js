import { addDecorator } from '@storybook/react';
import { host } from 'storybook-host';

import '../src/index.css';

addDecorator(host({
    align: "center middle",
    backdrop: "#2a2a2e"
}));
