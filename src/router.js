import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NotFound from './views/not_found'
import Post from './views/Post/posts'

const router = () =>{
    return (
        <BrowserRouter>
        <Switch>
         <Route exact path="/post" component={Post} />
         <Route component={NotFound} />
         </Switch>
        </BrowserRouter>
    )
}

export default router
