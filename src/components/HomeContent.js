import React from "react";

function HomeContent(props) {
    return (
        <div className="homecontent">
        <p>{props.content}</p>     
        </div>
    );
}

export default HomeContent;