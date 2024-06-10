import React from 'react';
import { Header } from '..';
import { shallow } from 'enzyme';
import { waitFor } from '@testing-library/react';

jest.mock('../view', () => ({
    HeaderView: () => <div data-testid="header-view">Header View</div>,
}));

describe('Header Component', () => {
    it('should render lazy loading before header view', async () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('LazyHeaderLoading')).toBeTruthy();
        await waitFor(() => expect(wrapper.find('HeaderView')).toBeTruthy());
    });
    it('should render a Suspense component', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('Suspense').exists()).toBeTruthy();
    });
});
