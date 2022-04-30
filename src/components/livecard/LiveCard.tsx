import { View, Image, Text } from "@tarojs/components";
import { navigateTo } from "@tarojs/taro";
import React, { useState } from "react";

import { IconLiwu } from "../iconfont/h5";
import "./index.scss";

interface ILiveCardProps {
  size: number;
  padding: number;
  src: string;
}

const LiveCard: React.FC<ILiveCardProps> = (props) => {
  const { size, padding, src } = props;
  const [imgHeight, setImgHeight] = useState<number>(0);

  const getImageHeight = (e: any) => {
    setImgHeight(e.detail.height);
  };

  return (
    <View
      style={{
        width: size / 2 + "px",
        height: imgHeight + "px",
        borderRadius: "10px",
        marginTop: "5px",
        position: "relative",
      }}
      onClick={() => {
        navigateTo({ url: "pages/live/index" });
      }}
    >
      <Image
        src={src}
        mode="aspectFill"
        style={{
          width: size / 2 + "px",
          height: size / 2 + "px",
        }}
        onLoad={(e) => getImageHeight(e)}
      />
      <View className="zuoshang rounded-lg">
        <IconLiwu size={0.8} className="icon" />
        <Text>123</Text>
      </View>
      <View className="youshang rounded-lg">
        <Text>人气：0</Text>
      </View>
      <View className="youxia rounded-lg">
        <Text>已结束</Text>
      </View>
      <View className="zuoxia rounded-lg">
        <Text>标题</Text>
      </View>
    </View>
  );
};

export default LiveCard;
