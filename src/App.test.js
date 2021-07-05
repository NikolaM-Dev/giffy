import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

it('shoulds renders without crashing', async () => {
  const { findByText } = render(<App />);
  const title = await findByText(/Última búsqueda/i);
  expect(title).toBeInTheDocument();
});
