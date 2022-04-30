import { Component, createRef, useRef, useState } from "react";
import {
  View,
  Text,
  Swiper,
  SwiperItem,
  Image,
  ScrollView,
} from "@tarojs/components";
import {
  getWindowInfo,
  createSelectorQuery,
  nextTick,
  useReady,
} from "@tarojs/taro";

// import { NavBar, MiniNavBar } from "@antmjs/vantui";
import "./index.scss";
import SWIPER1 from "../../static/imgs/swiper1.jpg";
import SWIPER2 from "../../static/imgs/swiper2.png";
import SWIPER3 from "../../static/imgs/swiper3.png";
import NavBar from "../../components/navbar/NavBar";
import LiveCard from "../../components/livecard/LiveCard";
import mm from "../../static/imgs/mm.jpg";

function Index(props) {
  const [imgHeight, setImgHeight] = useState<number>(0);
  const [deviceConfig, setDeviceConfig] = useState<any>({});
  const [navbarHeight, setNavbarHeight] = useState<number>(0);
  const [containerHeight, setContainerHeight] = useState<number>(0);

  const getImageHeight = (e) => {
    setImgHeight(e.detail.height);
  };

  const getHeight = (selector: string, name: string) => {
    nextTick(() => {
      const query = createSelectorQuery();
      query
        .select(selector)
        .boundingClientRect((rec) => {
          if (!rec) {
            getHeight(selector, name);
          } else {
            switch (name) {
              case "container": {
                setContainerHeight(rec.height);
                break;
              }
              case "navbar": {
                setNavbarHeight(rec.height);
              }
            }
          }
        })
        .exec();
    });
  };

  useReady(() => {
    setDeviceConfig({ ...deviceConfig, ...getWindowInfo() });
    getHeight(".taro_page", "container");
    getHeight(".nav-bar", "navbar");
  });

  return (
    <View id="index">
      {/* <NavBar leftText="直播" rightText={"More"} /> */}
      <View className="nav-bar">
        <NavBar />
      </View>

      {/* 轮播图 */}
      <View className="">
        <Swiper
          autoplay={true}
          interval={2000}
          indicatorDots={true}
          circular
          duration={1000}
          style={{ height: imgHeight + "px" }}
        >
          <SwiperItem>
            <View>
              <Image
                src={SWIPER1}
                mode="widthFix"
                onLoad={(e) => getImageHeight(e)}
              />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View>
              <Image
                src={SWIPER2}
                mode="widthFix"
                onLoad={(e) => getImageHeight(e)}
              />
            </View>
          </SwiperItem>
          <SwiperItem>
            <View>
              <Image
                src={SWIPER3}
                mode="widthFix"
                onLoad={(e) => getImageHeight(e)}
              />
            </View>
          </SwiperItem>
        </Swiper>
      </View>
      {/* 图的宽度250 */}

      {/* 直播列表部分 */}

      <ScrollView
        scrollY
        scrollWithAnimation
        style={{
          height: containerHeight - imgHeight - navbarHeight - 5 + "px",
          marginTop: "5px",
        }}
      >
        <View className="flex flex-row flex-wrap ">
          <LiveCard size={deviceConfig.screenWidth} padding={5} src={mm} />
          <LiveCard size={deviceConfig.screenWidth} padding={5} src={mm} />
          <LiveCard size={deviceConfig.screenWidth} padding={5} src={mm} />
          <LiveCard size={deviceConfig.screenWidth} padding={5} src={mm} />
          <LiveCard size={deviceConfig.screenWidth} padding={5} src={mm} />
          <LiveCard size={deviceConfig.screenWidth} padding={5} src={mm} />
          <LiveCard size={deviceConfig.screenWidth} padding={5} src={mm} />
          <LiveCard size={deviceConfig.screenWidth} padding={5} src={mm} />
          <LiveCard size={deviceConfig.screenWidth} padding={5} src={mm} />
          <LiveCard size={deviceConfig.screenWidth} padding={5} src={mm} />
          <LiveCard size={deviceConfig.screenWidth} padding={5} src={mm} />
          <LiveCard size={deviceConfig.screenWidth} padding={5} src={mm} />
          <LiveCard size={deviceConfig.screenWidth} padding={5} src={mm} />
        </View>
      </ScrollView>
    </View>
  );
}

export default Index;
