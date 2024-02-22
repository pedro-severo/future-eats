import React from 'react';
import { shallow } from 'enzyme';
import { Button } from '..';

describe('Button Component', () => {
    it('should test if Button from materialUI is rendered on Button component', () => {
        const wrapper = shallow(<Button />);
        const MUIButton = wrapper.find({ id: 'mui-button-id' });
        expect(MUIButton.exists()).toBeTruthy();
    });
});
