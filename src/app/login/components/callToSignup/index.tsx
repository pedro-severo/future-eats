import React from 'react';
import { CallToSignupView } from './view';

// TODO: Abstract this component to be a generic CallToAction component

interface ICallToSignup {
    action: () => void;
    callToActionLinkColor?: string;
}

const MemoCallToSignup = ({ action, callToActionLinkColor }: ICallToSignup) => {
    return (
        <CallToSignupView
            data-testid="call-to-signup-view"
            action={action}
            callToActionLinkColor={callToActionLinkColor}
        />
    );
};

export const CallToSignup = React.memo(MemoCallToSignup);
