import './style/index.scss'

import $ from 'jquery'
$(function(){
  console.log('jq')
})

console.log("index");
if (module.hot) {
  module.hot.accept("./print.js", function() {
    console.log("Accepting the updated printMe module!");
    printMe();
  });
}
