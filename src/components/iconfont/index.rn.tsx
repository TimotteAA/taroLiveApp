/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import Taro from '@tarojs/taro';
import Icon from './rn';

export type IconNames = 'gengduo' | 'wode' | 'zanting' | 'bofang' | 'faxian' | 'zhengzaizhibo' | 'bizhongguanli' | 'guanbi' | 'qingxidu' | 'fanzhuanxiangji' | 'meibai' | 'tuichu' | 'liwu' | 'meiyan';

interface Props {
  name: IconNames;
  size?: number;
  color?: string | string[];
  style?: React.CSSProperties;
}

const IconFont: FunctionComponent<Props> = (props) => {
  const { name, size, color, style } = props;

  // @ts-ignore
  return <Icon name={name} size={parseFloat(Taro.pxTransform(size))} color={color} style={style} />;
};

IconFont.defaultProps = {
  size: 18,
};

export default IconFont;