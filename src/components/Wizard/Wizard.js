import React, { Component } from 'react';
import { Link} from 'react-router-dom'
import axios from 'axios';



class Wizard extends Component {
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

  handleName(val){
    this.setState({
      name: val
    })
  }

  handleAddress(val){
    this.setState({
      address: val
    })
  }

  handleCity(val){
    this.setState({
      city: val
    })
  }

  handleState(val){
    this.setState({
      state: val
    })
  }

  handleZip(val){
    this.setState({
      zip: val
    })
  }

  addHouse(name, address, city, state, zip){
    console.log(`add house`)
    axios.post('/api/house', {
      name, address, city, state, zip
      }).then(res => {
        // console.log(this.state)
        this.setState({
          houses: res.data,
          name: '',
          address: '',
          city: '',
          state: '',
          zip: ''
        })
      })
  }


  render() {
    const {name, address, city, state, zip} = this.state
    return (
      <div className="Wizard">
        <p>Wizard Screen</p> 
        <input type='text'
          placeholder='name'
          onChange={ (e) => this.handleName(e.target.value)}/>
        <input type='text'
          placeholder='address'
          onChange={ (e) => this.handleAddress(e.target.value)}/>
        <input type='text'
          placeholder='city'
          onChange={ (e) => this.handleCity(e.target.value)}/>
        <input type='text'
          placeholder='state'
          onChange={ (e) => this.handleState(e.target.value)}/>
        <input type='text'
          placeholder='zip'
          onChange={ (e) => this.handleZip(e.target.value)}/>
        <button onClick={ () => this.addHouse(name, address, city, state, zip)}> Complete</button>
        
        
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    );
  }
}

export default Wizard;