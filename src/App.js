import { useState } from 'react';
import Header from './Components/Header/Header';
import Cards from './Components/Cards/Cards';
import Icon1 from '../src/img/icons/icon-1.png';
import Icon2 from '../src/img/icons/icon-2.png';
import Icon3 from '../src/img/icons/icon-3.png';
import './App.css';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, 
      icon: Icon1,
      title: "Protect Your Company For Legal",
      text1: "Compliance Audits & Training",
      text2: "Employee Data Storage",
      text3: "Policy Drafting"
    },
    { id: 2, 
      icon: Icon2,
      title: "Set Your Employees Up For Success",
      text1: "Learning & Development",
      text2: "Employee Performance",
      text3: "Benefit Management"
    },
    { id: 3, 
      icon: Icon3,
      title: "Know Your Industry's Legal Landscape",
      text1: "Work Place Investigations",
      text2: "Employee Mediations",
      text3: "Performance Tracking"
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
