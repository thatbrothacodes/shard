import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Visitor from '../../visitor/components';
import Insights from '../../insights/components';
import Segments from '../../segments/components';
import Experiences from '../../experiences/components';
import Overview from '../../overview/components';
import InvalidPage from '../404';

const Router = () => (
    <Switch>
        <Route exact path='/' component={Overview}/>
        <Route exact path='/experiences' component={Experiences}/>
        <Route exact path='/segments' component={Segments}/>
        <Route exact path='/insights' component={Insights}/>
        <Route exact path='/visitor' component={Visitor}/>
        <Route component={InvalidPage}/>
    </Switch>
);

export default Router;
