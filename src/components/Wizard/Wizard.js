import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom'
import WizardOne from './WizardOne'
import WizardTwo from './WizardTwo'
import WizardThree from './WizardThree'
import {connect} from 'react-redux'
import './Wizard.css';
import {cancelButton} from '../../ducks/reducer'

class Wizard extends Component {
  
  render() {
    console.log(this.props)
    const {cancelButton} = this.props
    return (
      <div className="Wizard">
        
        
        <h2>Add New Listing</h2>

        
        <Link to="/">
        <button onClick={() => cancelButton()}>Cancel</button>
        </Link>
        
        
          <Route path="/wizard/step1" component={WizardOne}/>
          <Route path="/wizard/step2" component={WizardTwo}/>
          <Route path="/wizard/step3" component={WizardThree}/>
      
        
      </div>
    );
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, {cancelButton})(Wizard);