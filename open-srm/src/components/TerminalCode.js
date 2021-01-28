import React from "react";
import $ from 'jquery';
import '../components/loader'

class TerminalCode extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    $('body').terminal({
      startmon: function() {
        console.log("Hi ! Is this thing on ?")

      },
      help: function() {
        this.echo('type "startmon" to start the monitor')
      }
    });
  }
  render() {
    return (
       <h1>Hi! Is this thing on ?</h1>
    );
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

