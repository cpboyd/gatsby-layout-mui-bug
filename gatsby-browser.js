/* eslint-disable react/no-danger */

import React from 'react';

import Root from './src/root';

export function wrapRootElement({ element }) {
  return <Root>{element}</Root>;
}
