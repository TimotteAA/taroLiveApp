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

let IconZhengzaizhibo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M510.6 105C290.4 105 112 283.4 112 503.6c0 220 178.4 398.4 398.6 398.4 220 0 398.4-178.4 398.4-398.4C909 283.4 730.6 105 510.6 105z m59.7 466.8c0 28.3-22.9 51.2-51.2 51.2H382.4c-28.3 0-51.2-22.9-51.2-51.2V435.1c0-28.3 22.9-51.2 51.2-51.2H519c28.3 0 51.2 23 51.2 51.2v136.7z m139.4 8.5c0 12.7-12.7 23-28.3 23-6.2 0-12-1.7-16.8-4.4h-0.1L615.3 562c-5.6-1.6-3.9-10.5-3.9-15.5v-95.2c0-3.2 1.5-4.5 4-6.1l48.4-36.5c0.1 0.2 0.3 0.2 0.8 0 4.6-2.8 10.4-4.4 16.8-4.4 15.6 0 28.3 10.3 28.3 23v153z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconZhengzaizhibo.defaultProps = {
  size: 18,
};

IconZhengzaizhibo = React.memo ? React.memo(IconZhengzaizhibo) : IconZhengzaizhibo;

export default IconZhengzaizhibo;
