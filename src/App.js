
import { createContext, useEffect, useState } from 'react';
import './assets/css/bootstrap.css'
import './assets/css/style.css';
import AppRoutes from './routes/Route';
import { fetchUserData } from './Auth/CallAPI';
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(false);
  const loginByAuth = async () => {
    const userKey = localStorage.getItem("key");
    if(typeof userKey === 'string' && userKey !== 'undefined'){
      console.log(typeof userKey)
      const userData = await fetchUserData(userKey);
      setUser(userData)
    }
  };

  useEffect(()=>{loginByAuth()},[])

  return (
    <UserContext.Provider value={[user, setUser]}>
      <div className="mobile_body no_scroll" style={{backgroundColor:"#F4F8FB"}} >
          <AppRoutes user={user}/>
      </div>
    </UserContext.Provider>
  );
}

export default App;
