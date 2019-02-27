import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Layout from './hoc/layout/layout'

import PageWithTest from './pages/pageWithTest/pageWithTest'

class Routes extends React.Component{
    render(){
        return(
            <Layout>
                <Switch>
                    <Route path="" exact component={PageWithTest}/>
                </Switch>
            </Layout>
        )
    }
};

export default Routes;