import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AddBook from '../components/AddBook'
import ReadingList from '../components/ReadingList'
import NotFound from '../components/NotFound'


const GlobalRoutes = () => (
    <Switch>
        <Route exact path='/' component={ReadingList} />
        <Route exact path='/addbook' component={AddBook} />
        <Route path='*' component={NotFound} />
    </Switch>
)
export default GlobalRoutes
