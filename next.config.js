// eslint-disable-next-line no-undef
/** @type {import('next').NextConfig} */

const nextConfig = {
    // ...rest of options
    compiler: {
        styledComponents: true,
    },
    eslint: {
        dirs: ['src'],
    },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
