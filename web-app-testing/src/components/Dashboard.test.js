import React from 'react';
import ReactDOM from 'react-dom';

import Display from './Display';
import Dashboard from './Dashboard';
import * as rtl from '@testing-library/react';




// it('should click on text', () => {
//     const { getByTestId } = rtl.render(<Dashboard />)
//     const textEl = rtl.getByTestId('strike')
//     fireEvent.click(textEl)
//   })

  it("displays the count", () => {
    const { getByTestId } = rtl.render(<Display />);
    // rtl.expect(getByTestId("count")).toHaveTextContent("0");
  });

  it("increments strikes", () => {
    const { getByTestId } = rtl.render(<Dashboard />);
    rtl.fireEvent.click(getByTestId("strike"));
    // rtl.expect(getByTestId("count")).toHaveTextContent("1");
  });