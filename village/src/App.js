import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Navigation from './components/Navigation';
import EditSmurf from './components/EditSmurf';
import {Route, Switch} from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
componentDidMount(){
    this.getData()
}

getData=()=>{
  axios.get('http://localhost:3333/smurfs')
  .then((res)=>{
      this.setState({
        smurfs: res.data
      })
  })
  .catch((err)=>{
    alert("there was an error fetching the data", err)
  })
}


postData=(smurf)=>{
  axios.post('http://localhost:3333/smurfs',smurf)
    .then((res)=>{
      this.setState({
          smurfs: res.data
      })
    }).then(alert("added smurf successfully!"))
    .catch((err)=>{alert("there was an error adding smurf", err)})
}

deletePost =(e,id)=> {
    e.preventDefault()
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then((res => {
        this.setState({
           smurfs: res.data
        })
    })).then(alert("delete successful"))
    .catch((err)=>{
      alert("there was an error deleting", err)
    })
}


  render() {
    console.log(this.state.smurfs)
    return (
      
      <div className="App">
        <Navigation />

      <Switch>
       <Route exact path="/smurf-form" render={props => <SmurfForm {...props} postData={this.postData}/>} />
       <Route exact path='/' render={ props=> <Smurfs {...props} smurfs={this.state.smurfs} />} />
       <Route exact path="/smurfs/:id" render={props => <EditSmurf {...props} smurfs={this.state.smurfs} deletePost={this.deletePost}/>}  />
      </Switch>
      </div>
    );
  }
}

export default App;
