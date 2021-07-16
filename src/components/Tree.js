import React ,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
import App from './App';



const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 200,
  },
});

export default function FileSystemNavigator() {
  const classes = useStyles();
  const [editor,setEditor]=useState([{language:"html",displayName:"HTML",value:''},
  {language:"css",displayName:"CSS",value:''},{language:"Js",displayName:"JS",value:''}]);
    
  const[selectededitor,setSelectededitor]=useState({language:'html',displayName:"HTML",value:editor[0].value})

  function chooseEditor(filename)
  {

    console.log(typeof(filename.innerHTML));
    const file=filename.innerHTML;
      if(file.endsWith('.html'))
      {
        setSelectededitor({language:'html',displayName:"HTML",value:editor[0].value});

        }
        if(file.endsWith('.css'))
      {
        setSelectededitor({language:'css',displayName:"CSS",value:editor[1].value});

        }
        if(file.endsWith('.js'))
      {
        setSelectededitor({language:'js',displayName:"JS",value:editor[2].value});

        }



      

  }

  function onChange(language,value)
  {
    
    setEditor(prevState=>{
       // eslint-disable-next-line array-callback-return
       prevState.map(editor=>{
           console.log(prevState);
           console.log(value);
           if(language===editor.language)
           {
               editor.value=value;
               
           }


       })
       return prevState;
    })
    setSelectededitor(prevState=>({
        ...prevState,value:value
    }))
  }

  return (

    
      <>
    <TreeView 
      className={classes.root}
      defaultCollapseIcon={<ExpandMoreIcon />}
      defaultExpandIcon={<ChevronRightIcon />}
    >
      <TreeItem nodeId="1" label="FileExplorer">
        <TreeItem onClick={(e)=>chooseEditor(e.target)} nodeId="2" label="index.html" />
        <TreeItem onClick={(e)=>chooseEditor(e.target)} nodeId="3" label="index.css" />
        <TreeItem onClick={(e)=>chooseEditor(e.target)} nodeId="4" label="index.js" />
      </TreeItem>


      </TreeView>
      <App
      editor={editor}
      onChange={onChange}
      selectededitor={selectededitor}
      /> 

</>
      
      
  );
  }
