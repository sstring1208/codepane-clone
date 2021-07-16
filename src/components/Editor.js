import React from 'react'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import { Controlled as ControlledEditor } from 'react-codemirror2'


export default function Editor(props) {
  const {
    language,
    displayName,
    value,
    
  } = props
 

  function handleChange(...args) 
  {
    
    const language =props.language;
    props.onChange(language,args[2]);

  }
  

  return (

    <div className="main-editor">
    <div className="editor-container">
      <div className="editor-title">
        {displayName}
        
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        onChange={e=>console.log(e)}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: 'material',
          lineNumbers: true
        }}
      />
    </div>
    </div>
   
  )
}
