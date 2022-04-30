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

let IconFanzhuanxiangji: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1253 1024" width={size} height={size} {...rest}>
      <Path
        d="M1074.334152 1024H179.560145A179.772016 179.772016 0 0 1 0 844.424721V294.378953A179.772016 179.772016 0 0 1 179.560145 114.803674h85.126491l35.064548-67.510982A87.411664 87.411664 0 0 1 377.598414 0.000197h463.088112a87.411664 87.411664 0 0 1 77.84723 47.292495l35.064547 67.510982h120.735849a179.772016 179.772016 0 0 1 179.529878 179.575279v550.045768A179.772016 179.772016 0 0 1 1074.334152 1024zM179.560145 167.771269A126.743887 126.743887 0 0 0 52.967594 294.378953v550.045768a126.743887 126.743887 0 0 0 126.592551 126.607685H1074.334152a126.75902 126.75902 0 0 0 126.607684-126.607685V294.378953a126.75902 126.75902 0 0 0-126.607684-126.607684h-136.777463a26.483797 26.483797 0 0 1-23.517612-14.286117l-42.464877-81.721432a34.61054 34.61054 0 0 0-30.842274-18.735394h-463.088111a34.61054 34.61054 0 0 0-30.842274 18.735394l-42.48001 81.721432a26.483797 26.483797 0 0 1-23.502479 14.286117z"
        fill={getIconColor(color, 0, '#231815')}
      />
      <Path
        d="M851.295178 643.057061a26.514064 26.514064 0 0 1-23.97162-37.728061 228.593004 228.593004 0 0 0 21.686447-97.793313c0-127.273563-103.54408-230.802509-230.817643-230.80251a229.001611 229.001611 0 0 0-143.421112 49.940875l67.96499 67.964991a26.483797 26.483797 0 0 1-37.425389 37.440522l-87.774871-87.774871a26.468664 26.468664 0 0 1 0-37.455656 281.908671 281.908671 0 0 1 200.656382-83.113722c156.481408 0 283.785238 127.288696 283.785237 283.770104a281.484931 281.484931 0 0 1-26.680534 120.266706 26.498931 26.498931 0 0 1-24.001887 15.284935zM621.642822 802.474386c-156.466274 0-283.770104-127.30383-283.770104-283.770104a281.303327 281.303327 0 0 1 26.695668-120.266706 26.483797 26.483797 0 1 1 47.958373 22.473393 228.804874 228.804874 0 0 0-21.671313 97.793313c0 127.258429 103.54408 230.802509 230.80251 230.80251a229.092413 229.092413 0 0 0 143.421112-49.940875l-67.949857-67.96499a26.483797 26.483797 0 0 1 37.440523-37.455656l87.77487 87.77487a26.468664 26.468664 0 0 1 0 37.455656 281.863271 281.863271 0 0 1-200.701782 83.098589z"
        fill={getIconColor(color, 1, '#231815')}
      />
    </Svg>
  );
};

IconFanzhuanxiangji.defaultProps = {
  size: 18,
};

IconFanzhuanxiangji = React.memo ? React.memo(IconFanzhuanxiangji) : IconFanzhuanxiangji;

export default IconFanzhuanxiangji;