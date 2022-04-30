import React from "react";
import { View, Text } from "@tarojs/components";

import "./index.scss";

interface INavBarProps {
  baseWidth?: number;
  portion?: number;
}

// 默认比例:125 500 125
const defaultWidth = 125;
// 左右默认为1
const defaultPortion = 3;

const DefaultLeftComponent = () => {
  return (
    <View>
      <Text
        style={{ fontSize: "18px", color: "white" }}
        className="flex justify-center  align-center"
      >
        直播
      </Text>
    </View>
  );
};

const DefaultMiddleComponent = () => {
  return (
    <View>
      <Text
        style={{ fontSize: "30px", color: "white" }}
        className="flex justify-center  align-center"
      >
        Timotte直播
      </Text>
    </View>
  );
};
const DefaultRightComponent = () => {
  return (
    <View>
      <Text
        style={{ fontSize: "18px", color: "white" }}
        className="flex justify-center  align-center"
      >
        此外
      </Text>
    </View>
  );
};

const NavBar: React.FC<INavBarProps> = (props) => {
  console.log(props.children);
  let Left =
    props.children && props.children[0]
      ? props.children[0]
      : DefaultLeftComponent;
  let Middle =
    props.children && props.children[0]
      ? props.children[0]
      : DefaultMiddleComponent;
  let Right =
    props.children && props.children[0]
      ? props.children[0]
      : DefaultRightComponent;

  let { baseWidth, portion } = props;
  baseWidth = baseWidth ? baseWidth : defaultWidth;
  portion = portion ? portion : defaultPortion;

  return (
    <View className="navbar-wrapper bg-primary">
      <View className="left" style={{ flexBasis: baseWidth + "px" }}>
        <Left />
      </View>
      <View
        className="middle"
        style={{ flexBasis: baseWidth * portion + "px" }}
      >
        <Middle />
      </View>
      <View className="right" style={{ flexBasis: baseWidth + "px" }}>
        <Right />
      </View>
    </View>
  );
};

export default NavBar;
