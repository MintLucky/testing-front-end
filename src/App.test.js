import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', async () => {
  render(<App />);
  // const helloWorldElem = screen.queryByText(/hello2/i);
  // expect(helloWorldElem).toBeNull();  
  const helloWorldElem = await screen.findByText(/data/i);
  expect(helloWorldElem).toBeInTheDocument();  
  // expect(helloWorldElem).toBeInTheDocument();
  // expect(btn).toBeInTheDocument();
  // expect(input).toBeInTheDocument();
  // expect(input).toMatchSnapshot();
 });


 test('Click event', async () => {
  render(<App />);
  
  const btn = screen.getByTestId('toggle-btn');
  expect(screen.queryByTestId('toggle-elem')).toBeNull();
  fireEvent.click(btn);
  expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
 });
 
 