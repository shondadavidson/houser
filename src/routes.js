import React, { Component} from 'react'
import { Route, Switch} from 'react-router-dom'

import Wizard from './components/Wizard/Wizard'
import Dashboard from './components/Dashboard/Dashboard'

export default class Routes extends Component {
    render() {
        return <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/wizard" component={Wizard} />

        </Switch>
    }
}