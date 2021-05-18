import { render, screen } from '@testing-library/react';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

test('Test', () => {
  render(
        <BrowserRouter >
        <App />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous"></script>
        </BrowserRouter>
    );
  const linkElement = screen.queryByTestId("Аpp");
  expect(linkElement).toBeDefined();
});
