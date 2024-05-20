import { useEffect } from 'react';
import './App.css';
import RoutingPage from './RoutingPage';
import { useNavigate } from 'react-router-dom';

function App() {

  const nav = useNavigate()


  useEffect(() => {
    const interval = setInterval(() => {
      const userLoginToken = localStorage.getItem("Token")
      if (userLoginToken) {
        // nav("/home")
      } else {
        nav("/")
      }


    }, 100)
    return () => clearInterval(interval)
  }, [])


  return (

    <div className="App">

      <RoutingPage />

    </div>
  );
}

export default App;
