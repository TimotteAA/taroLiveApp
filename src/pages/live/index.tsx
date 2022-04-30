import { View, Text, Video, Image, ScrollView } from "@tarojs/components";
import { useReady, getWindowInfo } from "@tarojs/taro";
import { useState } from "react";
import "./index.scss";
import my from "../../static/tabbar/min.png";

import Gifts from "../../components/live/Gift";

const Live = () => {
  const [deviceConfig, setDeviceConfig] = useState<any>({});

  useReady(() => {
    setDeviceConfig({ ...deviceConfig, ...getWindowInfo() });
  });

  // console.log(deviceConfig);

  return (
    <View className="live">
      <Video
        src="http://vodkgeyttp9c.vod.126.net/vodkgeyttp8/2w9yFsET_1729114192_uhd.mp4?ts=1651316040&rid=47115DC667964F5C42BDE925D7219E80&rl=3&rs=sgrZYGvgjyKkvorhFIYBJRzQEsUTcCJu&sign=c826f094fa66230283d189e4354baa42&ext=NnR5gMvHcZNcbCz592mDGUGuDOFN18isir07K1EOfL32zzO%2FhcJMPSajWVlGNqHtdBDaVMhYXrVymgJ87HeFCWHVDHqTM56O2mL%2F6Dn0YIWCjwmao1jbualnNFsTzXM5XhmlCAAT5DoThFLGrh6oW%2BnxpDfnHjIFuPCXut0FgoA1FydxGHyST0D057ReOxSc3%2Bn9vU7aj9ivg8al5%2Fpx0gW4cS7Vn2L2ZGtrrf643LiWWlr%2FtgcB4KucSss3dt7b"
        controls={false}
        autoplay
        muted
      />

      {/* 个人信息、观看信息 */}
      <View
        style="position: fixed; left: 0; right: 0; top: 0; height: 50px"
        className="px-1 flex justify-between"
      >
        <View
          style={`width: ${
            deviceConfig.screenWidth * 0.45
          }px; background-color: rgba(0, 0,0, 0.4)`}
          className="flex rounded-circle align-center justify-center"
        >
          <View
            style="padding: 5px 10px;"
            className="flex justify-center align-center"
          >
            <Image
              src={my}
              style="width: 30px; height: 30px"
              className="rounded-circle "
            />
          </View>

          <View className="flex-1 flex flex-column justify-center">
            <Text className="text-white font">昵称</Text>
            <Text className="text-white font-sm">100</Text>
          </View>
          <View
            className="rounded-circle flex align-center justify-center bg-danger"
            style="width: 30px; height: 30px; margin-right: 5px"
          >
            <Text>+</Text>
          </View>
        </View>
        <View
          style={`width: ${
            deviceConfig.screenWidth * 0.45
          }px; background-color: rgba(0, 0,0, 0.4)`}
          className="bg-info flex rounded-circle align-center justify-center"
        >
          <ScrollView scrollX className="flex-1" style="width: 120px">
            <View className="flex">
              {[1, 2, 3, 4, 5].map((item) => {
                return (
                  <View
                    style="margin-right: 10px;"
                    className="flex justify-center align-center"
                  >
                    <Image
                      src={my}
                      style="width: 30px; height: 30px"
                      className="rounded-circle "
                    />
                  </View>
                );
              })}
            </View>
          </ScrollView>
          <View
            className="rounded-circle flex align-center justify-center bg-danger"
            style="width: 30px; height: 30px; margin-right: 5px"
          >
            <Text style="font-size: 10px">1000</Text>
          </View>
        </View>
      </View>

      {/* 金币  */}
      <View
        style={`position: fixed; left: 0; right: 0; top: 50px; height: 50px; width: ${
          deviceConfig.screenWidth * 0.6
        }px; background-color: rgba(0, 0,0, 0.4)`}
        className="bg-success px-2 flex rounded-circle align-center justify-center"
      >
        <View className="flex justify-center align-center">
          <Text className="font-sm" style="color: gold">
            金币：
          </Text>
        </View>

        <View className="flex-1 flex flex-column justify-center">
          <Text className="text-white font-sm">100</Text>
        </View>
      </View>

      {/* 礼物 */}
      <Gifts screenWidth={deviceConfig.screenWidth} />

      {/* 底部聊天记录 */}
      <View
        style={`position: fixed; left: 0; right: 0; bottom: 120px; height: 200px; width: ${
          deviceConfig.screenWidth * 0.75
        }px`}
        className="bg-primary"
      ></View>

      {/* 底部 */}
      <View
        style="position: fixed; left: 0; right: 0; bottom: 0; height: 120px"
        className="bg-warning"
      ></View>
    </View>
  );
};

export default Live;
