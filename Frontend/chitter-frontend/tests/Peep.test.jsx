import { render, screen, waitFor } from '@testing-library/react';
import Peep from '../src/Components/Peep';

import testData from './peepsTest.json';

describe('Peep card tests', () => {
    it('should render a peep with "His this is a Peep" as its message ', () => {

        render(<Peep peepData={testData[0]} />);
        const cardMessage = screen.getByText(testData[0].message);


        expect(cardMessage).toBeInTheDocument();
    });

})
