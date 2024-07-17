import { useState } from 'react';

export const usePasswordInput = () => {
    const [showPassword, setShowPassword] = useState(false);
    return {
        showPassword,
        setShowPassword,
    };
};
