import React, {Component} from 'react';
import './App.css';
import './App'
import axios from 'axios';


class NewAccount extends Component{

    constructor(props){
        super(props);
    this.saveData = this.saveData.bind(this);
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

    saveData(e){
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
    axios.post('http://localhost:8080/create',data)
    
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
         <div className="App-margin"><h3>New Account</h3></div>
         <table className="App-headertwo">
         <tbody>
         <tr><th className="pull-left"></th></tr>
            <tr><td className="App-margin">Personal Details:</td><td className=" pull-right">Other Details:</td></tr>
            </tbody>
         </table>

         <div className="App-form">
         <form >
          <table>
          <tbody>
            <tr><td>Account Name:</td><td><input type="text"  name="name"  onChange={this.dataChange.bind(this)}/></td>
            <td>Telephone:</td><td><input type="text"  name="telephone" onChange={this.dataChange.bind(this)}/></td></tr>
            
            <tr><td>Account Category:</td><td><input type="text"  name="catagorey"  onChange={this.dataChange.bind(this)}/></td>
            <td>Mobile:</td><td><input type="text"  name="mobile"  onChange={this.dataChange.bind(this)}/></td></tr>
            
            <tr><td>Opening Balance:</td><td><input type="text"  name="balance"  onChange={this.dataChange.bind(this)}/></td>
            <td>NTN/GST:</td><td><input type="text"  name="ntngst" onChange={this.dataChange.bind(this)}/></td></tr>
            
            <tr><td>Credit Limit:</td><td><input type="text"  name="credit"  onChange={this.dataChange.bind(this)}/></td>
            <td>Price List:</td><td><input type="text"  name="price" onChange={this.dataChange.bind(this)}/></td></tr>
            
            <tr><td>Currency:</td><td><input type="text"  name="currency"  onChange={this.dataChange.bind(this)}/></td>
            <td>Address:</td><td><input type="text"  name="address" onChange={this.dataChange.bind(this)} /></td></tr>
            
            <tr><td>Due Days:</td><td><input type="text"  name="duedays"  onChange={this.dataChange.bind(this)}/></td>
            <td>City:</td><td><input type="text"  name="city" onChange={this.dataChange.bind(this)}/></td></tr>
            
            <tr><td>Created Date:</td><td><input type="text"  name="createddate"  onChange={this.dataChange.bind(this)}/></td>
            <td>Country:</td><td><input type="text"  name="country" onChange={this.dataChange.bind(this)}/></td></tr>
            
            <tr><td>Password:</td><td></td>
            <td >Contact Person:</td><td><input type="text" className="" name="contact" onChange={this.dataChange.bind(this)}/></td></tr>
            
            
            <tr><td></td><td>
              <button className="App-btn Pull-left" onClick={this.saveData}>Save</button>

              {/* <input type="submit" onClick={this.postData} className="App-btn Pull-left" /> */}
              </td></tr>
            {/* <tr><td></td><td><Link to={'/newtest'} className="App-link pull-left">Forgot Password</Link></td></tr> */}
            </tbody>
          </table>
          </form>
          
          </div>
          
          </div> 

              
          
          
        );
      }


}
export default NewAccount;