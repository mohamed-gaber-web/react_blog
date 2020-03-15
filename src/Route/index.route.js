import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomePage } from "../Pages/Home/index.page";
import AddPost from "../Pages/AddPost/index.page";

export const RoutePath = () => {
    return(
        <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/addpost" exact  component={AddPost} />
        </Switch>
    );
}