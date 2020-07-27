import React from 'react';
import Dummy from '../src/components/Dummy/Dummy'
// import { action } from '@storybook/addon-actions';
// import { Button } from '@storybook/react/demo';

export default {
    title: 'Dummy',
    component: Dummy,
};

export const Text = () => <Dummy text="hello">Hello Button</Dummy>;
