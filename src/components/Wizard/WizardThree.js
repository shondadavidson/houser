import React,  { Component } from 'react';
import {connect} from 'react-redux' 
import {updateMortgage, updateRent, cancelButton } from '../../ducks/reducer'
import axios from 'axios'

class WizardThree extends Component {

goBack = () => {
    this.props.history.goBack();
        }

addHouse(){
    console.log(`1`, this.props )
    let {name, address, city, state, zip, img, mortgage, rent} = this.props
    axios.post('/api/house', {
        name, address, city, state, zip, img, mortgage, rent
        }).then(res => {
        this.props.history.push("/")
        this.props.cancelButton()

        })
    }
    render(){
        // console.log(this.props)
        const {updateMortgage, updateRent} = this.props
        return(
            <div>
                 
                    <h5>Monthly Mortgage Amount</h5>
                    <input type='text'
                    placeholder='0'
                    value={this.props.mortgage}
                    onChange={ (e) => updateMortgage(e.target.value)}/>
                    <h5>Desired Monthly Rent</h5>
                    <input type='text'
                    placeholder='0'
                    value={this.props.rent}
                    onChange={ (e) => updateRent(e.target.value)}/>

                    <button onClick={this.goBack}>Go Back</button>
                    
                     <button onClick={ () => this.addHouse()}> Complete</button> 


            </div>
        )
    }
}

function mapStateToProps(state) {

    return state
}

export default connect(mapStateToProps, {updateMortgage, updateRent, cancelButton})(WizardThree)