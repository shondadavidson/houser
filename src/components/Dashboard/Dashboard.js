import React, { Component } from 'react';
import House from '../House/House'
import { Link} from 'react-router-dom'
import axios from 'axios';


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




  render() {
    const mappedHouses = this.state.houses.map(house => {
      return ( <House
        key={house.id}
        house={house} />
      )
    })
    return (
      <div className="Dashboard">
        <p>Dashboard Screen</p>
  
        <Link to="/wizard">
          <button>Add New Property</button>
        </Link>
        {mappedHouses}
      </div>
    );
  }
}

export default Dashboard;