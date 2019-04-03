import React, {Component} from 'react';
import axios from 'axios';
 class Accounts extends Component{
    constructor(props){
        super(props);
        this.state = {
          list : []
        };
        this.loadList(this);
      }

      

      loadList(t){
        axios.get('http://localhost:8080/users')
          .then((response)=>{
            t.setState({list: response.data});
          });
      }

      render(){
        let mapList = this.state.list.map((e) => <li key={e.name}>{e.name}</li>);
        return (
         
         <div>
           <table><tbody></tbody></table>
         <ul>{mapList}</ul>
         </div>
        );
      }
}
export default Accounts;