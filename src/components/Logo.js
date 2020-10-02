import React from 'react';
import LogoIcon from './LogoIcon';

const Logo = () => {
    return (
        <div className="logo">
            <LogoIcon />
            <span className="logo__txt">MyBooki</span>
        </div>
    );
}

export default Logo;