import styled from 'styled-components';
import designSystem from '../../../designSystem';

export const HeaderWrapper = styled('div')<{ shouldRenderHeader: boolean }>`
    width: 100%;
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    margin: 0 0 24px;
    padding: 0 0 10px;
    height: 64px;
    display: flex;
    align-items: end;
    visibility: ${(props) => (props.shouldRenderHeader ? `none` : `hidden`)};
`;

export const IconWrapper = styled.div`
    position: absolute;
    margin-left: 16px;
`;

export const HeaderTitle = styled(designSystem.typography)`
    width: 100%;
    display: flex;
    justify-content: center;
`;
