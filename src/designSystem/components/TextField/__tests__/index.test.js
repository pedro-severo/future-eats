import React from 'react';
import { shallow } from 'enzyme';
import { TextFieldInput } from '..';

describe('TextField Component', () => {
    it('should test if TextField from materialUI is rendered on TextFieldInput component', () => {
        const wrapper = shallow(<TextFieldInput id="mui-text-field" />);
        const MUIButton = wrapper.find({ id: 'mui-text-field' });
        expect(MUIButton.exists()).toBeTruthy();
    });
});
