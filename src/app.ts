import { Component } from "react";
import "./common/icon.css";
import "./common/free.css";
import "./app.scss";
import "@antmjs/vantui/lib/index.css";

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    return this.props.children;
  }
}

export default App;
