import React from 'react';
import { createRouter } from '@expo/ex-navigation';
import Schedule from '../scenes/Schedule';
import About from '../scenes/About';
import Layout from './NavigationLayout';

export default createRouter(() => ({
  layout: () => Layout,
  schedule: () => Schedule,
  about: () => About
}));
