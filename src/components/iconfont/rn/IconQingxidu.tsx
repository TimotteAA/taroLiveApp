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

let IconQingxidu: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64z m155.7 79.4c16.5 7 32.4 15 47.7 24.1L535 344.6v-92.3l117.8-114.9c5 2 10 3.9 14.9 6zM535 750.1l359.5-355.7c7.4 24.1 12.5 48.8 15.2 74L535 839.3v-89.2z m0-371.9l201.2-197.6c17.4 11.8 34 25.1 49.5 39.6L535 467.4v-89.2z m0-159.4V112.7c31.5 1.8 62.4 7.2 92.3 16.2L535 218.8z m0 654.3L911.8 500c0.1 4 0.2 8 0.2 12 0 30.6-3.4 60.6-10.1 89.9l-304.6 301c-20.4 4.4-41.2 7.2-62.3 8.4v-38.2z m350.8-503.9L535 716.4V627l321.8-318c8.9 15.2 16.9 30.9 23.8 47.3 1.8 4.3 3.5 8.6 5.2 12.9z m-42.1-81L535 593.3v-92.2l267.7-263.9c15.1 16 28.8 33 41 51zM229.2 794.8c-36.8-36.8-65.6-79.5-85.7-127.2C122.6 618.4 112 566 112 512s10.6-106.4 31.4-155.7c20.1-47.6 49-90.4 85.7-127.2 36.8-36.8 79.5-65.6 127.2-85.7 41.6-17.6 85.5-27.9 130.7-30.7v798.5c-45.2-2.8-89-13-130.7-30.7-47.6-20.1-90.4-48.9-127.1-85.7z m565.6 0c-36.8 36.8-79.5 65.6-127.2 85.7-7.4 3.1-14.9 6-22.5 8.7l242.5-239.6c-2.2 6-4.6 12.1-7.1 18-20.1 47.7-48.9 90.5-85.7 127.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconQingxidu.defaultProps = {
  size: 18,
};

IconQingxidu = React.memo ? React.memo(IconQingxidu) : IconQingxidu;

export default IconQingxidu;
