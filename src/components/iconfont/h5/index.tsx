/* tslint:disable */
/* eslint-disable */

import React, { SVGAttributes, FunctionComponent } from 'react';
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

interface Props extends Omit<SVGAttributes<SVGElement>, 'color'> {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

const IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'gengduo':
      return <IconGengduo {...rest} />;
    case 'wode':
      return <IconWode {...rest} />;
    case 'zanting':
      return <IconZanting {...rest} />;
    case 'bofang':
      return <IconBofang {...rest} />;
    case 'faxian':
      return <IconFaxian {...rest} />;
    case 'zhengzaizhibo':
      return <IconZhengzaizhibo {...rest} />;
    case 'bizhongguanli':
      return <IconBizhongguanli {...rest} />;
    case 'guanbi':
      return <IconGuanbi {...rest} />;
    case 'qingxidu':
      return <IconQingxidu {...rest} />;
    case 'fanzhuanxiangji':
      return <IconFanzhuanxiangji {...rest} />;
    case 'meibai':
      return <IconMeibai {...rest} />;
    case 'tuichu':
      return <IconTuichu {...rest} />;
    case 'liwu':
      return <IconLiwu {...rest} />;
    case 'meiyan':
      return <IconMeiyan {...rest} />;

  }

  return null;
};

export default IconFont;
