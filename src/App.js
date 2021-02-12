import React,{ Fragment,useState} from 'react';
import { BrowserRouter  as Router,Switch,Route} from  'react-router-dom';

import Navbar from './components/layout/Navbar';
import User from './components/users/User';
import Alert from './components/layout/Alert';
import About from "./components/pages/About";
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
import Home from './components/pages/Home';
import NotFound from "./components/pages/NotFound";
import './App.css';

import reactDom from 'react-dom';

const  App =()=> {

  // const [users,setUsers]=useState([]);
  // const [user,setUser]=useState({});
  // const [repos,setRepos]=useState([]);
  // const [loading,setLoading]=useState(false);
  // const [alert,showAlert]=useState(null);

  // state={
  //   users:[],
  //   user:{},
  //   repos:[],
  //   loading:false,
  //   alert:null
  // }
 
//  async componentDidMount(){
//     // axios
//     //   .get('https://api.github.com/users')
//     //   .then(res=>console.log(res.data))
//     this.setState({loading:true});


//     const res= await axios.get(`https://api.github.com/users?client_id=
//     ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
//     ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
//     this.setState({users:res.data,loading:false});
//     console.log(res.data);
//   }

  // const searchUsers=async text =>{

  //   setLoading(true);


  //   const res= await axios.get(`https://api.github.com/search/users?q=${text}&client_id=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   setUsers(res.data.items);
  //   setLoading(false);
  // }


  // //Get single User
  // const getUser=async (username)=>{
  //   setLoading(true);


  //   const res= await axios.get(`https://api.github.com/users/${username}?client_id=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   setUser(res.data);
  //   setLoading(false);

  // }

  //  //Get User Repos
  //  const getUserRepos=async (username)=>{
  //   setLoading(true);


  //   const res= await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   setRepos(res.data);
  //   setLoading(false);

  // }
  


//  const clearUsers=()=>{
//     setUsers([]);
//     setLoading(false);
//  } 

//  const  setAlert =(msg,type)=>{
//       showAlert({msg,type});

//       setTimeout(()=>setAlert(null),5000);
//   }

  
    return (
      <GithubState>
        <AlertState>
          <Router>
            <div>
              <Navbar />
              <div className="container">
                <Alert alert={alert} />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/user/:login" component={User} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </Router>
          </AlertState>
        </GithubState>
      
    );
 
 
}

export default App;
