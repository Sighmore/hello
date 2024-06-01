import React from 'react';
import { Button } from '@radix-ui/themes/dist/cjs/index.js';

const Header = ({ title, links }) => {
  return (
    <header>
    <h1 > Kenya news portal
    </h1>
    <ul>
        <li>education</li>
        <li>Agriculture</li>
        <li>Entertainment</li>
        <Button>simon</Button>
    </ul>
    </header>
  );
};

export default Header;