import React from 'react';
import designSystem from '../../../designSystem';

interface ICallToSignupView {
    action: () => void;
    callToActionLinkColor?: string;
}

export const CallToSignupView = ({
    action,
    callToActionLinkColor,
}: ICallToSignupView) => {
    return (
        <designSystem.typography variant="subtitle1">
            Nao possui cadastro?{' '}
            <span
                className="call-to-action-link"
                style={{ color: callToActionLinkColor }}
                onClick={action}
            >
                Clique aqui
            </span>
        </designSystem.typography>
    );
};
