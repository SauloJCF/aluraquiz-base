/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import NextLink from 'next/link';

export default function Link({
  children, href, disabled, ...props
}) {
  return (
    <NextLink href={disabled ? '' : href} passHref>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}
