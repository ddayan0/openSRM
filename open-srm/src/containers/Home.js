import React from "react";
import TerminalHead from '../components/TerminalHead'
import TerminalBody from '../components/TerminalBody'
class Home extends React.Component {
    render() {
        return (
            <div>
                {/* <Terminal></Terminal>
                <TerminalBody></TerminalBody> */}
                <TerminalHead/>
                <TerminalBody/>
            </div>
        )
    };
};
export default Home;