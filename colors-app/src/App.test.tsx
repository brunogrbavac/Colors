import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('Does the logo get rendered?', () => {
  render(<App/>);
  expect(screen.getByRole('img', { name: /logo/i })).toBeInTheDocument();
});

test('Does the text input get rendered?', () => {
  render(<App/>);
  expect(screen.getByRole('textbox')).toBeInTheDocument();
});

test('Does the get color button get rendered?', () => {
  render(<App/>);
  expect(screen.getByRole('button', {name: /get a random color!/i})).toBeInTheDocument();
});

test('Does the random color get rendered?', () => {
  render(<App/>);
  userEvent.clear(screen.getByRole('textbox'));
  userEvent.type(screen.getByRole('textbox'),"color");
  expect(screen.getByRole('heading', {  name: /color/})).toBeInTheDocument();
});

test('Does a new list element appear after 2 clicks?', async() => {
  render(<App />);
  userEvent.click(screen.getByRole('button', {name: /get a random color!/i}));
  userEvent.click(screen.getByRole('button', {name: /get a random color!/i}));

  await waitFor(() => {expect( screen.getAllByRole('article')).toHaveLength(1);});
});
