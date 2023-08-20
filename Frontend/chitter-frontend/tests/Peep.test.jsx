import { render, screen, waitFor } from '@testing-library/react';
import Peep from '../src/Components/Peep';
import { MemoryRouter } from 'react-router-dom';

import PeepModel from '../src/Components/utils/Peep.model.js';

describe('Peep test suite', () => {

    describe('Testing render when peep is sent', () => {
        const testUser = { userName: "TestUser" }

        const testPeep = new PeepModel("64d8f2372e3cfdfa88da2d1e", "This is a test peep", "2023-08-20T19:30:13.396Z", testUser.userName)

        test('render the test peep', () => {

            render(<MemoryRouter><Peep peep={testPeep} /></MemoryRouter>)

            expect(screen.getByText('This is a test peep')).toBeInTheDocument()
            expect(screen.getByText(`peeped by ${testUser.userName}`)).toBeInTheDocument()
        })
    })

})
