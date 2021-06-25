import { useState } from 'react';
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, 
      title: "Protect Your Company",
      text1: "Compliance Audits & Training",
      text2: "Employee Data Storage",
      text3: "Policy Drafting"
    },
    { id: 2, 
      title: "Protect Your Company",
      text1: "Compliance Audits & Training",
      text2: "Employee Data Storage",
      text3: "Policy Drafting"
    },
    { id: 3, 
      title: "Protect Your Company",
      text1: "Compliance Audits & Training",
      text2: "Employee Data Storage",
      text3: "Policy Drafting"
    }
  ]);
  return (
    <div className="App">
      <Header/>
      <Cards list={posts}/>
    </div>
  );
}

export default App;
