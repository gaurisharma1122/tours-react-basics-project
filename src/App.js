import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";

const url='https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading]= useState(true);
  const [tours, setTours]= useState([]);

  useEffect(()=>{
    fetchTours();
  }, []);

  const fetchTours= ()=>{
    fetch(url)
    .then(response=> response.json())
    .then(data=>{
      console.log(data);
      setLoading(false);
      setTours(data);
    });
  };

  const deleteTours= (id)=>{
    const newTours= tours.filter((tour)=> tour.id !== id);
    setTours(newTours);
  }

  return (
    <div className="App">
      {
        loading? <Loading/>: <Tours tours={tours} deleteTours={deleteTours}/>
      }
    </div>
  );
}

export default App;
