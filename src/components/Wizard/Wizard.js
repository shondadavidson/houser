import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom'
import WizardOne from './WizardOne'
import WizardTwo from './WizardTwo'
import WizardThree from './WizardThree'

class Wizard extends Component {
  
  render() {
    
    return (
      <div className="Wizard">
        
        
        <h2>Add New Listing</h2>
        <Link to="/">
          <button>Cancel</button>
        </Link>
        
          <Route path="/wizard/step1" component={WizardOne}/>
          <Route path="/wizard/step2" component={WizardTwo}/>
          <Route path="/wizard/step3" component={WizardThree}/>
      
        
      </div>
    );
  }
}

export default Wizard;