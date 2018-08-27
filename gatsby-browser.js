/* eslint-disable react/no-danger */

import React from 'react';

import Layout from './src/layout';
import Root from './src/root';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}

export function wrapRootElement({ element }) {
  return <Root>{element}</Root>;
}
