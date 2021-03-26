
import './App.css';
import NavBar from './components/NavBar';
import Input from './components/Input';
import Source from './components/Source';
import {useState}  from 'react';
function App(){
  
  const [sources, setSources] = useState([
      {"id": 1, "name" :"Presbo" ,"email":"presbo@columbia.edu"},
      {"id": 2, "name":"John Jay Mouse" ,"email":"mouse@columbia.edu"},
      {"id": 3, "name":"Water Bottle Man" ,"email":"flipper@columbia.edu"}
  ]);
  let new_id = sources.length+1;
  const deleteSource = (id)=>{
    const newSources = sources.filter((source)=>source.id!==id);
    newSources.forEach((source) =>{
      if (source.id>id){  
        source.id-=1;}
    })
    setSources(newSources);
  };
  const submitSource = (name,email)=> {
    if (name!==""){
      const newSource = {
        "id":new_id, "name": name,"email":email
      };
    new_id +=1;
    setSources([...sources,newSource]);}
  }
    return (
        <div>
            <NavBar />
            
              <Input submitSource = {submitSource} />
              {sources.map(source => {
                  return (
                      <Source source = {source} deleteSource={deleteSource}/>
                    )
              })}
              
                
              
            
          </div> 
    );
  }




export default App;
