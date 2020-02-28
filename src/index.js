import './style/index.scss'
import './css/index.css'

import $ from 'jquery'
$(function(){
  console.log('jq')
})

console.log(process.env.NODE_ENV)
console.log("index");
if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    printMe();
  });
}
