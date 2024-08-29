import { render, screen } from '@testing-library/react';
import Welcome from '../components/Welcome'

describe('Check if the welcome alert works fine', () => {
    it('mounts correctly', () => {

        render(<Welcome />)

        const welcomeAlert = screen.getByTestId('welcome-alert');

        expect(welcomeAlert).toBeInTheDocument();

    });

    it('has the right text inside', () => {
        render(<Welcome />);

        const welcomeAlertText = screen.getByText(/Welcome to EPILIBRARY!/i);

        expect(welcomeAlertText).toBeInTheDocument();
    })
});