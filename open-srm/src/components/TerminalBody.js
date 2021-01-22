import React from "react"
import Script from "react-inline-script"


class TerminalBody extends React.Component{
    render() {
        return(
            // <h1>Hello World</h1>
            <Script>console.log('Hello');</Script>
        );
        
    };
}

export default TerminalBody;
