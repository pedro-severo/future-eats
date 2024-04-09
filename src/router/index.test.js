import React from 'react';
import { shallow } from 'enzyme';
import { Router } from '.';
import PATH from './interfaces';

describe('Router', () => {
    it('should check if all Routes are rendered', () => {
        const wrapper = shallow(<Router />);
        const loginRoute = wrapper.find({ path: PATH.LOGIN });
        const signupRoute = wrapper.find({ path: PATH.SIGNUP });
        expect(loginRoute.exists()).toBeTruthy();
        expect(signupRoute.exists()).toBeTruthy();
    });
});
