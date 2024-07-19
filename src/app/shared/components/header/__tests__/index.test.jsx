import React from 'react';
import { Header } from '..';
import { shallow } from 'enzyme';
import { waitFor } from '@testing-library/react';
import * as NavigationHeaderContext from '../../../../shared/stores/navigationHeader';

jest.mock('../view', () => ({
    HeaderView: () => <div data-testid="header-view">Header View</div>,
}));

const mockNavigationHeaderState = {
    title: 'headerTitle',
    shouldRenderHeader: true,
    shouldRenderBackIcon: true,
};

const mockUseNavigationHeaderStateReturn = {
    navigationHeader: mockNavigationHeaderState,
};

const mockGoBack = jest.fn();

jest.mock('next/navigation', () => ({
    useRouter() {
        return {
            back: mockGoBack,
        };
    },
    usePathname() {
        return '/';
    },
}));

describe('Header Component', () => {
    beforeEach(() => {
        jest.spyOn(
            NavigationHeaderContext,
            'useNavigationHeaderState'
        ).mockImplementation(() => mockUseNavigationHeaderStateReturn);
    });
    it('should render lazy loading before header view', async () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('LazyHeaderLoading')).toBeTruthy();
        await waitFor(() =>
            expect(wrapper.find({ 'data-testid': 'header-view' })).toBeTruthy()
        );
    });
    it('should render a Suspense component', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('Suspense').exists()).toBeTruthy();
    });
});
