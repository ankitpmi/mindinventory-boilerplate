import {TextStyle} from 'react-native';
// import {palette} from 'app-constants';

const BASE_VIEW: TextStyle = {
  width: '100%',
  height: 44,
  borderWidth: 1,
  borderColor: '#000',
  paddingHorizontal: 8,
  borderRadius: 8,
};

export const inputPresets = {
  primary: {
    ...BASE_VIEW,
  } as TextStyle,
  rounded: {
    ...BASE_VIEW,
    borderRadius: 44,
  } as TextStyle,
};

export type InputPresets = keyof typeof inputPresets;
