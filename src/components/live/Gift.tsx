import React, { useEffect, useState, useRef } from "react";
import { View, Text, Image, ScrollView, Button } from "@tarojs/components";
// import gift from "../../static/gift/2.png";
import { useReady, nextTick, createSelectorQuery } from "@tarojs/taro";
import defaultAvatar from "../../static/tabbar/min.png";
import gift from "../../static/gift/3.png";

const Gifts = ({ screenWidth }) => {
  const [gifts, setGifts] = useState([]);
  const [scrollDist, setScrollDist] = useState<number>(0);
  const [scrollViewHeight, setScrollViewHeight] = useState<number>(0);
  const scrollRef = useRef();

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
              case "scrollView": {
                setScrollViewHeight(rec.height);
                break;
              }
              case "item": {
                setScrollDist(rec.height);
                break;
              }
            }
            return;
          }
        })
        .exec();
    });
  };

  useReady(() => {
    getHeight(".gift-item", "item");
    getHeight(".scroll-view-container", "scrollView");
  });

  const scroll = (arg) => {
    nextTick(() => {
      const query = createSelectorQuery();
      query
        .select(".scroll-view-wrapper")
        .boundingClientRect((rec) => {
          if (!rec) {
            scroll(".scroll-view-wrapper");
          } else {
            if (scrollRef.current) {
              const element = scrollRef.current as any;
              element.scrollTop = rec.height + Math.random();
            }
            return;
          }
        })
        .exec();
    });
  };

  useEffect(() => {
    scroll(1);
  }, [gifts]);

  return (
    <View>
      <ScrollView
        scrollY
        style={`height: 320px; padding: 10px 0px; position: fixed; left: 0; right: 0; top: 100px; height: 320px; width: ${
          screenWidth * 0.75
        }px`}
        ref={scrollRef}
        className="scroll-view-container"
        scrollWithAnimation
        enhanced
      >
        <View className="scroll-view-wrapper">
          {gifts.length &&
            gifts.map((t, idx) => {
              return (
                <View
                  style={`width: ${
                    screenWidth * 0.5
                  }px; margin-left: 10px;  margin-top: 10px`}
                  className="flex flex-row align-center gift-item"
                  key={idx}
                  id={"item" + idx}
                >
                  <View
                    style={`width: ${
                      screenWidth * 0.35
                    }px; background-image: linear-gradient(to right, #BCABB1, #65AAF0);`}
                    className="px-3 flex rounded-circle align-center justify-between"
                  >
                    <View
                      style="padding: 5px 10px;"
                      className="flex justify-center align-center"
                    >
                      {/* 用户头像 */}
                      <Image
                        src={t.avatar || defaultAvatar}
                        style="width: 30px; height: 30px"
                        className="rounded-circle "
                      />
                      <Text
                        className="font-sm"
                        style="color: white; margin-left: 3px"
                      >
                        {t.username}
                      </Text>
                    </View>

                    <View
                      className="rounded-circle flex align-center justify-center bg-danger"
                      style="width: 30px; height: 30px; margin-right: 5px"
                    >
                      <Image
                        src={t.gift_image}
                        style="width: 30px; height: 30px;"
                      />
                    </View>
                  </View>
                  <Text
                    className="font-sm"
                    style="padding: 0px 5px; color: white"
                  >
                    X{t.num}
                  </Text>
                </View>
              );
            })}
        </View>
      </ScrollView>
      <Button
        style="color: white;"
        onClick={() => {
          setGifts([
            ...gifts,
            {
              username: "发送人",
              avatar: "",
              gift_name: "蛋糕",
              gift_image: gift,
              num: 1,
            },
          ]);
        }}
      >
        点我啊
      </Button>
    </View>
  );
};

export default Gifts;
