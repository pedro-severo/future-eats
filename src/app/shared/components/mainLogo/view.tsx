import React from 'react';
import Image, { StaticImageData } from 'next/image';

// istanbul ignore next
export const MemoMainLogo = ({ mainLogo }: { mainLogo: StaticImageData }) => {
    return <Image src={mainLogo} alt="CompanyLogo" />;
};

export const MainLogoView = React.memo(MemoMainLogo);
