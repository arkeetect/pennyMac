import {useState, useRef} from "react";
import './App.css';
// http://www.tvmaze.com/api
// https://api.tvmaze.com/search/shows?q=walking

function App() {
  const filter = useRef();
  const [data, setData] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    console.log(filter.current.value);
    fetch(`https://api.tvmaze.com/search/shows?q=${filter.current.value}`)
    .then((response) => response.json())
    .then(setData)
    .catch((error) =>{
      console.error(`Error: ${error}`);
    });
    //setFilter(e.target.value);
    //alert(`${filter} will be searched for`);
  };
  //if(data){}
  return (
      <form onSubmit={submit}>
        <div className="container">
        <header>
          <div className="inputContainer">
                <i className="fas fa-search icon"></i>
              <input className="Field" type="text"
              placeholder="    Search..."
              ref={filter}
              //onChange={(e) => setFilter(e.target.value)}
              />
              <button className="Button" type="submit">Search</button>
            </div>
            
        </header>
        {/* <article id="main-content"> */}
          {/* <div className="container-flex"> */}
          {data.map((item) =>(
          <>
          <div className="movie-image">
          {/* <div> */}
          <div>
              <img src={item.show.image
                        ? item.show.image.medium
                        :""
                       } alt=""/>
              </div>
              </div>
              <div className="movie-card">
              {/* <div> */}
                <h1>{item.show.name}</h1>
                  {item.show.summary.replace("/(<([^>]+)>)/ig", '')}
              </div>
              </>
              ))}
              </div>
        {/* </article> */}
        
      {/* </div> */}
          </form>
      
    );
  
}

export default App;
