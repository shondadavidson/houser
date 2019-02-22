import React,  { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux' 
import {updateName, updateAddress, updateCity, updateState, updateZip} from '../../ducks/reducer'

class WizardOne extends Component {

goBack = () => {
        this.props.history.goBack();
        }

    render(){
        // console.log(this.props)
        const {updateName, updateAddress, updateCity, updateState, updateZip} = this.props
        return(
            <div>
                 
                    <h5>Property Name</h5>
                    <input type='text'
                    placeholder='name'
                    onChange={ (e) => updateName(e.target.value)}/>
                    <h5>Address</h5>
                    <input type='text'
                    placeholder='address'
                    onChange={ (e) => updateAddress(e.target.value)}/>
                    <h5>City</h5>
                    <input type='text'
                    placeholder='city'
                    onChange={ (e) => updateCity(e.target.value)}/>
                    <h5>State</h5>
                    <input type='text'
                    placeholder='state'
                    onChange={ (e) => updateState(e.target.value)}/>
                    <h5>Zip</h5>
                    <input type='text'
                    placeholder='zip'
                    onChange={ (e) => updateZip(e.target.value)}/>
                    
                    <button onClick={this.goBack}>Go Back</button>

                    <Link to="/wizard/step2">
                        <button>Next</button>
                    </Link>
                    


            </div>
        )
    }
}

function mapStateToProps({name, address, city, state, zip}) {
    // console.log(reduxState)
    

    return {
        name, address, city, state, zip
    }
}

export default connect(mapStateToProps, {updateName, updateAddress, updateCity, updateState, updateZip})(WizardOne)