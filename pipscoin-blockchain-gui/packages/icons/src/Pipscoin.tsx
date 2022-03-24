import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import PipscoinIcon from './images/pipscoin.svg';

export default function Keys(props: SvgIconProps) {
  return <SvgIcon component={PipscoinIcon} viewBox="0 0 150 58" {...props} />;
}
