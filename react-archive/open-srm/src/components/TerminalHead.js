import React, {Fragment} from 'react';
import {Helmet} from "react-helmet";

class TerminalHead extends React.Component{
    render() {
        return(
            <Fragment>
            <Helmet>
            <script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
            <script src="https://unpkg.com/jquery.terminal/js/jquery.terminal.min.js"></script>
            <link rel="stylesheet" href="https://unpkg.com/jquery.terminal/css/jquery.terminal.min.css"/>
            </Helmet>
            </Fragment>
            
        );
        
    };
}

export default TerminalHead;
