import React from 'react';
import Image, { StaticImageData } from 'next/image';

// istanbul ignore next
export const MemoMainLogoDarkMode = ({
    mainLogo,
}: {
    mainLogo: StaticImageData;
}) => {
    return <Image src={mainLogo} alt="CompanyLogo" />;
};

export const MainLogoDarkModeView = React.memo(MemoMainLogoDarkMode);
