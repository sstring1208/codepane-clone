import React, { useState, useEffect } from 'react';
import Editor from './Editor'
import Frame from "./iFrame";


function App(props) {
 
  
  const [srcDoc, setSrcDoc] = useState('')

  useEffect(() => {
    const timeout = setTimeout(() => {
      
      setSrcDoc(`
        <html>
          <body>${props.editor[0].value}</body>
          <style>${ props.editor[1].value}</style>
          <script>${props.editor[2].value}</script>
        </html>
      `)

    }, 250)

    return () => clearTimeout(timeout)
  }, [props])



  function renderEditors(){

    console.log("editor is"+props.selectededitor.language);
      return  <Editor
      
      
      language={props.selectededitor.language}
      displayName={props.selectededitor.displayName}
      value={props.selectededitor.value}
      onChange={(language,value) => props.onChange(language,value)}
    /> 

    
  }


  
  return (
    <>
      <div className="pane top-pane">
        {renderEditors()}
      </div>
      <Frame
      srcDoc={srcDoc}/>
    </>
  )
}

export default App;
