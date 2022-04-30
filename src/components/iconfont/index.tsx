/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';

export type IconNames = 'gengduo' | 'wode' | 'zanting' | 'bofang' | 'faxian' | 'zhengzaizhibo' | 'bizhongguanli' | 'guanbi' | 'qingxidu' | 'fanzhuanxiangji' | 'meibai' | 'tuichu' | 'liwu' | 'meiyan';

export interface IconProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<IconProps> = () => {
  return null;
};

export default IconFont;
