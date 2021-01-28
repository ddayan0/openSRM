import React from "react";
import TerminalHead from '../components/TerminalHead'
import TerminalCode from '../components/TerminalCode'

class Home extends React.Component {
    render() {
        return (
            <div>
                <TerminalHead/>
                <TerminalCode/>
            </div>
        )
    };
};
export default Home;