import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import LoginButton from '../src/Components/LoginButton';

test('LoginButton matches snapshot', () => {
    expect(render(<MemoryRouter><LoginButton /></MemoryRouter>))
})
