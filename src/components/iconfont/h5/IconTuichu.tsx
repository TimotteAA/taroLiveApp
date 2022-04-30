/* tslint:disable */
/* eslint-disable */

import React, { CSSProperties, SVGAttributes, FunctionComponent } from 'react';
import { getIconColor } from './helper';

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  size?: number;
  color?: string | string[];
}

const DEFAULT_STYLE: CSSProperties = {
  display: 'block',
};

const IconTuichu: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M768 819.2H512V204.8L256 102.4h512v102.4h102.4V0H0v819.2L512 1024v-102.4h358.4v-204.8h-102.4v102.4zM1024 460.8l-256-153.6v102.4H563.2V512h204.8v102.4L1024 460.8z"
        fill={getIconColor(color, 0, '#FA9B4E')}
      />
    </svg>
  );
};

IconTuichu.defaultProps = {
  size: 18,
};

export default IconTuichu;
