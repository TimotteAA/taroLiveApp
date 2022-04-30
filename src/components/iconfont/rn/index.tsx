/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconGengduo from './IconGengduo';
import IconWode from './IconWode';
import IconZanting from './IconZanting';
import IconBofang from './IconBofang';
import IconFaxian from './IconFaxian';
import IconZhengzaizhibo from './IconZhengzaizhibo';
import IconBizhongguanli from './IconBizhongguanli';
import IconGuanbi from './IconGuanbi';
import IconQingxidu from './IconQingxidu';
import IconFanzhuanxiangji from './IconFanzhuanxiangji';
import IconMeibai from './IconMeibai';
import IconTuichu from './IconTuichu';
import IconLiwu from './IconLiwu';
import IconMeiyan from './IconMeiyan';
export { default as IconGengduo } from './IconGengduo';
export { default as IconWode } from './IconWode';
export { default as IconZanting } from './IconZanting';
export { default as IconBofang } from './IconBofang';
export { default as IconFaxian } from './IconFaxian';
export { default as IconZhengzaizhibo } from './IconZhengzaizhibo';
export { default as IconBizhongguanli } from './IconBizhongguanli';
export { default as IconGuanbi } from './IconGuanbi';
export { default as IconQingxidu } from './IconQingxidu';
export { default as IconFanzhuanxiangji } from './IconFanzhuanxiangji';
export { default as IconMeibai } from './IconMeibai';
export { default as IconTuichu } from './IconTuichu';
export { default as IconLiwu } from './IconLiwu';
export { default as IconMeiyan } from './IconMeiyan';

export type IconNames = 'gengduo' | 'wode' | 'zanting' | 'bofang' | 'faxian' | 'zhengzaizhibo' | 'bizhongguanli' | 'guanbi' | 'qingxidu' | 'fanzhuanxiangji' | 'meibai' | 'tuichu' | 'liwu' | 'meiyan';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'gengduo':
      return <IconGengduo key="1" {...rest} />;
    case 'wode':
      return <IconWode key="2" {...rest} />;
    case 'zanting':
      return <IconZanting key="3" {...rest} />;
    case 'bofang':
      return <IconBofang key="4" {...rest} />;
    case 'faxian':
      return <IconFaxian key="5" {...rest} />;
    case 'zhengzaizhibo':
      return <IconZhengzaizhibo key="6" {...rest} />;
    case 'bizhongguanli':
      return <IconBizhongguanli key="7" {...rest} />;
    case 'guanbi':
      return <IconGuanbi key="8" {...rest} />;
    case 'qingxidu':
      return <IconQingxidu key="9" {...rest} />;
    case 'fanzhuanxiangji':
      return <IconFanzhuanxiangji key="10" {...rest} />;
    case 'meibai':
      return <IconMeibai key="11" {...rest} />;
    case 'tuichu':
      return <IconTuichu key="12" {...rest} />;
    case 'liwu':
      return <IconLiwu key="13" {...rest} />;
    case 'meiyan':
      return <IconMeiyan key="14" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
