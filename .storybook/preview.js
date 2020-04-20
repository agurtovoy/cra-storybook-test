import { addDecorator } from '@storybook/react';
import { host } from 'storybook-host';

import '../src/index.css';

addDecorator(host({
    align: "center middle",
    backdrop: "#fff"
}));
