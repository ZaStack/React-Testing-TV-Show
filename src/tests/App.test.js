import React from 'react';
import { render, wait } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';




test('App fetches show data', async () => {
  const { getByText } = render(<App />);

  getByText(/Fetching Data.../i);
  await wait(() => {
    userEvent.click(getByText(/select a season/i));
    getByText(/season 1/i)
  })
})