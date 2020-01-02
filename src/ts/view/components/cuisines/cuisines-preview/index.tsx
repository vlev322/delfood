import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { ICuisineProps, CuisineItem } from "../cuisine-item";
import { CuisineService } from "../../../../services";
import { MealItem } from "../../meals/meal-component";
import { MealCollection } from "../../meals/meal-collection";

export class Cousines extends Component {
  public state = { data: [] as ICuisineProps[] };

  public componentDidMount(): void {
    const _cuisineService = new CuisineService();
    _cuisineService.getCuisinesAsync().then(result => {
      let data = result as ICuisineProps[];
      this.setState({ data })
    })

  }
  render() {
    return (
      <Router>
        <div className="cuisines">
          {this.state.data.map(cuisine => <CuisineItem {...cuisine} />)}
        </div>
        <Switch>
          {this.state.data.map(({ name, id }) => <Route path={`/cuisine/${name.toLowerCase()}`}>

            <MealCollection name={name} />
          </Route>)
          }
        </Switch>
      </Router>
    )
  }
}