import React from 'react';
import { shallow } from 'enzyme';
import { IconButton } from '.';

describe('IconButton Component', () => {
    it('should test if IconButton from materialUI is rendered on IconButton component', () => {
        const wrapper = shallow(<IconButton />);
        const MUIIconButton = wrapper.find({ id: 'mui-icon-button-id' });
        expect(MUIIconButton.exists()).toBeTruthy();
    });
});
