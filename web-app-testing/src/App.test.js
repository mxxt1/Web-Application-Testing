import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Display from './components/Display';
import * as rtl from '@testing-library/react';



it('renders ', () => {
const wrapper = rtl.render(
    <App />

);
// console.log(wrapper.debug())

})

it('renders display', () => {
    const result = rtl.render(
        <Display />
    );
    // console.log(result.debug())
})


