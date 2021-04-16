
import './App.css';
import NavBar from './components/NavBar';
import Input from './components/Input';
import Source from './components/Source';
import {useState, useEffect}  from 'react';
function App(){
  
  const [sources, setSources] = useState([]);
  useEffect(()=> fetchData());

  const fetchData = async () => {
    fetch(`/api/sources`, {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json'
      }})
      .then(response => {
          if (response.status >= 200 && response.status < 300) {
              return response;
            }
            const error = new Error(`HTTP Error ${response.statusText}`);
            error.status = response.statusText;
            error.response = response;
            console.log(error);
            throw error;
      })
      .then(response => response.json())
      .then(json => {
          console.log(json);
          setSources(json.data);
      })
      .catch(error => console.log(error));
  };
  
  let new_id = sources.length+1;

  const deleteSource = (id)=>{
    fetch(`/api/delete_source/${id}`, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      }})
      .then(response => {
          if (response.status >= 200 && response.status < 300) {
              return response;
            }
            const error = new Error(`HTTP Error ${response.statusText}`);
            error.status = response.statusText;
            error.response = response;
            console.log(error);
            throw error;
      })
      .then(response => response.json())
      .then(json => {
          console.log(json);
          setSources([json.data]);
      })
      .catch(error => console.log(error));
  };
  const submitSource = (name,email)=> {
    if (name!==""){
      const newSource = {
        "id":new_id, "name": name,"email":email
      };
      new_id +=1;
      fetch(`/api/add_source`, {
        method: 'POST',
        body: JSON.stringify({source: newSource}),
        headers: {
            'Content-Type': 'application/json'
        }})
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return response;
              }
              const error = new Error(`HTTP Error ${response.statusText}`);
              error.status = response.statusText;
              error.response = response;
              console.log(error);
              throw error;
        })
        .then(response => response.json())
        .then(json => {
            console.log(json);
            setSources([json.data]);
        })
        .catch(error => console.log(error));
    
    }
  };
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
