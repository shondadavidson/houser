import React,  { Component } from 'react';
import {Link} from 'react-router-dom'
import {connect} from 'react-redux' 
import {updateImg} from '../../ducks/reducer'

class WizardTwo extends Component {
goBack = () => {
    this.props.history.goBack();
}
    render(){
        const {updateImg} = this.props
        return(
            <div>
                <h5>Image URL</h5>
                    <input type='text'
                    placeholder='Img Url'
                    value={this.props.img}
                    onChange={ (e) => updateImg(e.target.value)}/>
                    
                    <button onClick={this.goBack}>Go Back</button>
    
                <Link to="/wizard/step3">
                    <button>Next</button>
                </Link>


            </div>
        )
    }
}

function mapStateToProps(state) {
    const {img} = state

    return {
        img
    }
}

export default connect(mapStateToProps, {updateImg})(WizardTwo)