import React from 'react';
import { shallow } from 'enzyme';
import GlobalStateProvider from '.';
import { userInitialState } from './redux/user/reducer';
import { navigationHeaderInitialState } from './navigationHeader';

const mockSetNavigationHeader = jest.fn();
const mockUserDispatch = jest.fn();

describe('GlobalStateProvider', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<GlobalStateProvider />);
        jest.spyOn(React, 'useReducer').mockImplementation(() => [
            userInitialState,
            mockUserDispatch,
        ]);
        jest.spyOn(React, 'useState').mockImplementation(() => [
            navigationHeaderInitialState,
            mockSetNavigationHeader,
        ]);
    });
    it('should render UserStateContext correctly', () => {
        const userStateContext = wrapper.find({
            'data-testid': 'user-state-context',
        });
        expect(userStateContext.exists()).toBeTruthy();
    });
    it('should render NavigationHeaderStateContext correctly', () => {
        const navigationStateContext = wrapper.find({
            'data-testid': 'navigation-state-context',
        });
        expect(navigationStateContext.exists()).toBeTruthy();
    });
});
