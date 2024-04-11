import React from 'react';
import { MainLogo } from '..';
import { waitFor, render } from '@testing-library/react';
import { shallow } from 'enzyme';

jest.mock('../view', () => ({
    MainLogoView: () => <div data-testid="main-logo-view">Main Logo View</div>,
}));

describe('MainLogo Component', () => {
    it('should render lazy loading before MainLogoView', async () => {
        const { getByTestId } = render(<MainLogo />);
        expect(getByTestId('main-logo-lazy-loading')).toBeInTheDocument();
        await waitFor(() =>
            expect(getByTestId('main-logo-view')).toBeInTheDocument()
        );
    });
    it('should render a Suspense component', () => {
        const wrapper = shallow(<MainLogo />);
        expect(wrapper.find('Suspense').exists()).toBeTruthy();
    });
});
