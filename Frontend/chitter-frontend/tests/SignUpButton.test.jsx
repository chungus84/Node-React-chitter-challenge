import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignUpButton from '../src/Components/SignUpButton';

test('SignUpButton matches snapshot', () => {
    expect(render(<MemoryRouter><SignUpButton /></MemoryRouter>))
})
