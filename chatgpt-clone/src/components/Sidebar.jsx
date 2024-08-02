import "../App.css";
import gptLogo from "../assets/chatgpt.svg";
import plusIcon from "../assets/add-30.png";
import msgIcon from "../assets/message.svg";
import Home from "../assets/home.svg";
import BookmarkIcon from "../assets/bookmark.svg";
import rocket from "../assets/rocket.svg";
function Sidebar() {
    return (
        <div className="App">
            <div className="sidebar">
                <div className="upperside">
                    <div className="uppersidetop">
                        <img src={gptLogo} alt="Chatgpt logo" className="logo" />
                        <span className="brand">ChatGpt</span>
                    </div>
                    <button className="midbtn">
                        <img src={plusIcon} alt="Plus Icon" className="addbtn" />
                        New Chat
                    </button>
                    <div className="uppersidebtn">
                        <button className="query">
                            <img src={msgIcon} alt="message icon" /> What is programming ?
                        </button>
                        <button className="query">
                            <img src={msgIcon} alt="" /> How to use an API ?
                        </button>
                    </div>
                </div>
                <div className="lowerside">
                    <div className="listitems">
                        {" "}
                        <img src={Home} alt="Plus Icon" className="listitemimg" />
                        Home
                    </div>
                    <div className="listitems">
                        {" "}
                        <img src={BookmarkIcon} alt="Plus Icon" className="listitemimg" />
                        Sved
                    </div>
                    <div className="listitems">
                        {" "}
                        <img src={rocket} alt="Plus Icon" className="listitemimg" />
                        Upgrade to Pro
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
