import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

describe('App component', () => {
    it('should ensure that Router is rendered', () => {
        const wrapper = shallow(<App />);
        const RouterComponent = wrapper.find('Router');
        expect(RouterComponent.exists()).toBe(true);
    });
});
