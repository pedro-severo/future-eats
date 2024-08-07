import * as React from 'react';
import SvgIcon from '@mui/material/SvgIcon';

// istanbul ignore file

export function MemoHome({ color }: { color: string }) {
    return (
        <SvgIcon fill={color}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27"
                height="27"
                viewBox="0 0 27 27"
            >
                <g fillRule="nonzero">
                    <path d="M.315 11.14L12.89.228a.932.932 0 0 1 1.22 0l12.575 10.914a.91.91 0 0 1 .086 1.292.931.931 0 0 1-1.305.085l-.974-.845V25.29a.92.92 0 0 1-.925.916H3.433a.92.92 0 0 1-.925-.916V11.673l-.974.845a.927.927 0 0 1-1.305-.085.91.91 0 0 1 .086-1.292zm15.32 13.235v-7.543h-4.27v7.543h4.27zm-11.278-14.3v14.3h5.158v-8.458A.92.92 0 0 1 10.44 15h6.12c.51 0 .924.41.924.916v8.458h5.159v-14.3-.007L13.5 2.133l-9.143 7.935v.007z" />
                    <path d="M15.882 8.735c0 .439-.396.794-.886.794h-2.198c-.49 0-.886-.355-.886-.794 0-.438.397-.794.886-.794h2.198c.49 0 .886.356.886.794z" />
                </g>
            </svg>
        </SvgIcon>
    );
}

const Home = React.memo(MemoHome);

export default Home;
