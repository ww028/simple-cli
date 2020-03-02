TODO:'解决mini-css-extract-plugin 插件热刷新'
import './style/index.scss'
// import './css/index.css'

window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function () {
  // 监听横竖屏,安卓延迟获取
  setTimeout(function () {
    if (window.orientation === 0 || window.orientation === 180) {
      console.log('竖屏模式')
    }
    if (window.orientation === 90 || window.orientation === -90) {
      console.log("横屏模式")
    }
    setFontSize()
  }, 300)
}, false);

import $ from 'jquery'
$(function(){
  console.log('jq')
})

console.log(process.env.NODE_ENV)
console.log("index");

