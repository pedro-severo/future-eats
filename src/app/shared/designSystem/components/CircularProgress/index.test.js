import React from 'react';
import { shallow } from 'enzyme';
import { CircularProgressIndeterminate } from '.';
import { Box, CircularProgress } from '@material-ui/core';
describe('CircularProgress Component', () => {
    it('should render CircularProgress correctly', () => {
        const wrapper = shallow(<CircularProgressIndeterminate />);
        const MUICircularProgress = wrapper.find(CircularProgress);
        const MUIBox = wrapper.find(Box);
        expect(MUICircularProgress.exists()).toBeTruthy();
        expect(MUIBox.exists()).toBeTruthy();
    });
});
