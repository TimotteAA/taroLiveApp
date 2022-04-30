export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/my/index",
    "pages/min/index",
    "pages/live/index",
  ],
  window: {
    backgroundTextStyle: "dark",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    color: "#000",
    selectedColor: "#B733FF",
    backgroundColor: "#fff",
    borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "发现",
        iconPath: "static/tabbar/find.png",
        selectedIconPath: "static/tabbar/find-selected.png",
      },
      {
        pagePath: "pages/min/index",
        text: "性感直播！",
        iconPath: "static/tabbar/min.png",
        selectedIconPath: "static/tabbar/min.png",
      },
      {
        pagePath: "pages/my/index",
        text: "我的",
        iconPath: "static/tabbar/my.png",
        selectedIconPath: "static/tabbar/my-selected.png",
      },
    ],
  },
});
