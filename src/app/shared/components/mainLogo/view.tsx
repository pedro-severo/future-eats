import React from 'react';
import mainLogo from '../../assets/images/futureEatsLogo/logo-future-eats-invert.png';
import Image from 'next/image';

// istanbul ignore next
export const MainLogoView = () => {
    return <Image src={mainLogo} alt="CompanyLogo" />;
};
