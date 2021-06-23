import { render, screen } from '@testing-library/react';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';

test('Test', () => {
    render( 
	<BrowserRouter >
          <App />
        </BrowserRouter>
    );
    const linkElement = screen.queryByTestId("Аpp");
    expect(linkElement).toBeDefined();
});