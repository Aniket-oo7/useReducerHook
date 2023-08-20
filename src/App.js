import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import Search from './search';
import UserCard from './userCard';

function App() {
   
    
  return (
    <div className="App">
      <Search />
      <UserCard />
    </div>
  );
}

export default App;
