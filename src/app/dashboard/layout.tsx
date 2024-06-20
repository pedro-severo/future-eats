import React from 'react';
import { Footer } from '../shared/components/footer';

// istanbul ignore file

const DashboardLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <>
            {children}
            <Footer />
        </>
    );
};

export default DashboardLayout;
