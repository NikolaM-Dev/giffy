import React from 'react';
import {
  screen,
  render,
  fireEvent,
  waitForElement,
} from '@testing-library/react';
import App from '../App';
describe('Home page', () => {
  it('should home work as expected', async () => {
    const { container } = render(<App />);
    const gifLink = await waitForElement(() =>
      container.querySelector('.Gif-link')
    );

    expect(gifLink).toBeVisible();
  });

  it('should search form be used', async () => {
    render(<App />);
    const input = await screen.findByRole('textbox');
    const button = await screen.findByRole('button');

    fireEvent.change(input, { target: { value: 'Matrix' } });
    fireEvent.click(button);

    const title = await screen.findByText('Matrix');
    expect(title).toBeVisible();
  });
});
