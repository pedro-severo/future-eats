import React from 'react';
import mainLogo from '../../assets/images/logo-future-eats.png';
import Image from 'next/image';

// istanbul ignore next
export const MainLogoDarkModeView = () => {
    return <Image src={mainLogo} alt="CompanyLogo" />;
};
