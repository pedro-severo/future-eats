import React from 'react';
import { shallow } from 'enzyme';
import { Router } from '.';
import PATH from './interfaces';

describe('Router', () => {
    it('should check if all Routes are rendered', () => {
        const wrapper = shallow(<Router />);
        const loginRoute = wrapper.find({ path: PATH.LOGIN });
        const registerRoute = wrapper.find({ path: PATH.REGISTER });
        expect(loginRoute.exists()).toBeTruthy();
        expect(registerRoute.exists()).toBeTruthy();
    });
});
