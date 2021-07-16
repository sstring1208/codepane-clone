import React from 'react'

function Frame(props) {
    console.log("the value is"+props);
    return (
        <div className="pane">
             <iframe
          srcDoc={props.srcDoc}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
        </div>
    )
}

export default Frame
