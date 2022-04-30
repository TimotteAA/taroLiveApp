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

const IconFaxian: FunctionComponent<Props> = ({ size, color, style: _style, ...rest }) => {
  const style = _style ? { ...DEFAULT_STYLE, ..._style } : DEFAULT_STYLE;

  return (
    <svg viewBox="0 0 1024 1024" width={size + 'rem'} height={size + 'rem'} style={style} {...rest}>
      <path
        d="M512 972.8c-253.44 0-460.8-207.36-460.8-460.8S258.56 51.2 512 51.2s460.8 207.36 460.8 460.8-207.36 460.8-460.8 460.8z m0-51.2c225.28 0 409.6-184.32 409.6-409.6S737.28 102.4 512 102.4 102.4 286.72 102.4 512s184.32 409.6 409.6 409.6z m0-204.8c-143.36 0-281.6-104.96-281.6-204.8s138.24-204.8 281.6-204.8 281.6 104.96 281.6 204.8-138.24 204.8-281.6 204.8z m0-51.2c117.76 0 230.4-87.04 230.4-153.6s-112.64-153.6-230.4-153.6-230.4 87.04-230.4 153.6 112.64 153.6 230.4 153.6z m0-51.2c-56.32 0-102.4-46.08-102.4-102.4s46.08-102.4 102.4-102.4 102.4 46.08 102.4 102.4-46.08 102.4-102.4 102.4z m0-51.2c28.16 0 51.2-23.04 51.2-51.2s-23.04-51.2-51.2-51.2-51.2 23.04-51.2 51.2 23.04 51.2 51.2 51.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </svg>
  );
};

IconFaxian.defaultProps = {
  size: 18,
};

export default IconFaxian;
