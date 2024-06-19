import React from 'react';
import { MainLogoDarkMode } from '..';
import { waitFor } from '@testing-library/react';
import { shallow } from 'enzyme';

jest.mock('../view', () => ({
    MainLogoView: () => <div data-testid="main-logo-view">Main Logo View</div>,
}));

jest.mock('../../../designSystem', () => ({
    designSystem: {
        circularProgressIndeterminate: () => (
            <div data-testid="main-logo-lazy-loading">Main Logo View</div>
        ),
    },
}));

describe('MainLogo Component', () => {
    it('should render lazy loading before MainLogoView', async () => {
        const wrapper = shallow(<MainLogoDarkMode />);
        expect(
            wrapper.find({ 'data-testid': 'main-logo-lazy-loading' })
        ).toBeTruthy();
        await waitFor(() => expect(wrapper.find('MainLogoView')).toBeTruthy());
    });
    it('should render a Suspense component', () => {
        const wrapper = shallow(<MainLogoDarkMode />);
        expect(wrapper.find('Suspense').exists()).toBeTruthy();
    });
});
