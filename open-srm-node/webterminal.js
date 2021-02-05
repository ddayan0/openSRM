var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = (new JSDOM('')).window;
global.document = document;
var $ = jQuery = require('jquery')(window);

$(document).ready(function(){
    $('body').append($('<script src="./jquery.terminal-2.210.0.min.js"></script>'));
});




// jQuery(function($, undefined) {
//     $('#term_demo').terminal(function(command) {
//         if (command !== '') {
//             var result = window.eval(command);
//             if (result != undefined) {
//                 this.echo(String(result));
//             }
//         }
//     }, {
//         greetings: 'Javascript Interpreter',
//         name: 'js_demo',
//         height: 200,
//         width: 450,
//         prompt: 'js> '
//     });
// });