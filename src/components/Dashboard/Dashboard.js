import React, { Component } from 'react';
import House from '../House/House'
import { Link} from 'react-router-dom'
import axios from 'axios';
import './Dashboard.css';


class Dashboard extends Component {
  constructor() {
    super()
    this.state = {
      houses: [],
      name: '',
      address: '',
      city: '',
      state: '',
      zip: ''
    }
    
    this.deleteHouse = this.deleteHouse.bind(this)

  }

  componentDidMount(){
    this.getHouses()
  }

  getHouses(){
    axios.get('/api/houses').then( res => {
      // console.log(res.data)
      this.setState({
        houses: res.data
      })
    })
  }

  deleteHouse(id){
    axios.delete(`/api/house/${id}`).then(res => {
      this.setState({houses: res.data})
    })
  }




  render() {
    const mappedHouses = this.state.houses.map(house => {
      return ( <House
        key={house.id}
        house={house}
        deleteHouse={this.deleteHouse} />
      )
    })
    return (
      <div className="Dashboard">
        
        <Link to="wizard/step1">
          <button>Add New Property</button>
        </Link>
        {mappedHouses}
      </div>
    );
  }
}

export default Dashboard;