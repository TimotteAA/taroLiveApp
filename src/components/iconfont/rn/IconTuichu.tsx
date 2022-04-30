/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconTuichu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M768 819.2H512V204.8L256 102.4h512v102.4h102.4V0H0v819.2L512 1024v-102.4h358.4v-204.8h-102.4v102.4zM1024 460.8l-256-153.6v102.4H563.2V512h204.8v102.4L1024 460.8z"
        fill={getIconColor(color, 0, '#FA9B4E')}
      />
    </Svg>
  );
};

IconTuichu.defaultProps = {
  size: 18,
};

IconTuichu = React.memo ? React.memo(IconTuichu) : IconTuichu;

export default IconTuichu;
