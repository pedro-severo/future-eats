import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from '..';

jest.mock('../useFooter', () => ({
    useFooter: jest.fn().mockReturnValue({
        router: {
            push: jest.fn(),
        },
        pagePath: '/',
    }),
}));

describe('Footer Component', () => {
    it('should render component correctly', () => {
        const wrapper = shallow(
            <Footer router={{ push: jest.fn() }} pagePath="/" />
        );
        expect(
            wrapper.find({ 'data-testid': 'footer-view' }).exists()
        ).toBeTruthy();
    });
});
