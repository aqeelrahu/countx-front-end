import React, { Component } from 'react';
import './App.css';
import './NewAccount'
import { BrowserRouter as Route, Link,   } from 'react-router-dom';
import axios from 'axios';



class App extends Component {
  
  constructor(props){
    super(props);
    this.postData = this.postData.bind(this);
    this.dataChange = this.dataChange.bind(this);
    this.state={
      name:'',
      password:'',
      telephone:'',
      catagorey:'',
      mobile:'',
      balance:'',
      ntngst:'',
      credit:'',
      price:'',
      currency:'',
      address:'',
      duedays:'',
      city:'',
      createddate:'',
      country:'',
      contact:'',
      loading:false,
      message:''
    }
  }
  
  dataChange(e){
  this.setState({
    [e.target.name]:e.target.value,
    [e.target.password]:e.target.value,
    [e.target.telephone]:e.target.value,
    [e.target.catagorey]:e.target.value,
    [e.target.mobile]:e.target.value,
    [e.target.balance]:e.target.value,
    [e.target.ntngst]:e.target.value,
    [e.target.credit]:e.target.value,
    [e.target.price]:e.target.value,
    [e.target.currency]:e.target.value,
    [e.target.address]:e.target.value,
    [e.target.duedays]:e.target.value,
    [e.target.createddate]:e.target.value,
    [e.target.country]:e.target.value,
    [e.target.city]:e.target.value,
    [e.target.contact]:e.target.value
  })
  }
  postData(e){
    e.preventDefault()
    const name=this.state.name
    const password=this.state.password
    const telephone=this.state.telephone
    const catagorey=this.state.catagorey
    const mobile=this.state.mobile
    const balance=this.state.balance
    const ntngst=this.state.ntngst
    const credit=this.state.credit
    const price=this.state.price
    const currency=this.state.currency
    const address=this.state.address
    const duedays=this.state.duedays
    const city=this.state.city
    const createddate=this.state.createddate
    const country=this.state.country
    const contact=this.state.contact
    this.setState({
      loading:true
    })
    const data={
      name,
      password,
      telephone,
      catagorey,
      mobile,
      balance,
      ntngst,
      credit,
      price,
      currency,
      address,
      duedays,
      city,
      createddate,
      country,
      contact
     
    }
    // axios.post('/t/791gw-1553756191/post',data)
    axios.post('http://localhost:8080/Login',data)
    
    .then(Response =>{this.setState({
      
      loading:false,
      message:Response.data,
      
    })
    console.log(Response);
  }).catch(err =>{
    this.setState({
      
      loading:false
    })
    console.log(err);
  })
  }

  
  render() {
    return (

      
          
    <div>
     <div className="App-body">
     <form >
      <table>
        
        <tbody>
        <tr><td>Email/User ID:</td><td><input type="text" className="form-text" name="name"  onChange={this.dataChange.bind(this)}/></td></tr>
        <tr><td>Password:</td><td><input type="Password" className="form-text" name="password"  onChange={this.dataChange.bind(this)}/></td></tr>
        
        <tr><td></td><td>
          <button className="App-btn Pull-left" onClick={this.postData}>Login</button>
           {/* <input type="submit" onClick={this.postData} className="App-btn Pull-left" />  */}
          </td></tr>
        <tr><td></td><td><Link to={'/NewAccount'} className="App-link pull-left">Forgot Password</Link></td></tr>
        </tbody>
      
      </table>
      </form>
      {this.loadOrShowMessage}
      </div>
      </div>
    
          
      
      
      
    );
  }
}

export default App;

