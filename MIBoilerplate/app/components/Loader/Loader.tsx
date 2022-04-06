import React from 'react';
import {ActivityIndicator} from 'react-native';
import {palette} from 'app-constants';

const Loader = () => {
  return <ActivityIndicator size="large" color={palette.redPrimary} />;
};

export default Loader;
