import React from "react";
import { findDOMNode } from "react-dom"
import "jquery.terminal"
import $ from "jquery"

class TerminalCode extends React.Component {
  render() {
      return (
        jQuery(function($, undefined){
          $('body').terminal(function(command){
              if(command !== ''){
                var result = window.eval(command);
                if(result != undefined) {
                  this.echo(String(result))
                }
              }
          }
        }
    ));
  }
}
export default TerminalCode;



// $('body').terminal({
//   startmon: function() {
//     console.log('works!')
//     // put actual code in here !!!
//     // please put the actual code in here !!
//   },
//   help: function() {
//     this.echo('Type startmon To Start The Monitor')
//   }
// }, {
//   greetings: 'SERVER RESOURCE MONITOR'
// });

