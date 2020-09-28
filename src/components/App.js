import React from 'react'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import Exercises from '../Pages/Exercise'
import ExercisesNew from '../Pages/ExerciseNew'
import NotFound from '../Pages/NotFound'

const App = () => (
    <BrowserRouter>
            <Switch>
                <Route exact path="/exercise" component={Exercises}/>
                <Route exact path="/exercise/new" component={ExercisesNew}/>
                <Route component={NotFound}/>
            </Switch>
        </BrowserRouter>
)
export default App