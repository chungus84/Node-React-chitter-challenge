import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../src/Components/Header';

test('Header matches snapshot', () => {
    expect(render(<MemoryRouter><Header /></MemoryRouter>))
})
