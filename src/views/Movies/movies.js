/** @format */
import React, { Fragment, Component } from "react";
import Breadcrumb from "../../components/breadcrumb/index";
import ComponentLayout from "../layout";
import { CardMovie, CardCategories } from "../../components/cards/index";
import { SearchMoviesForCategories } from "../../api/movies";
import { GetListCategories } from "../../api/generic";
import { categoryType } from "../../api/common";
import { Row } from "antd";
export default class movies extends Component {
  state = {
    movies: [],
    categories: [],
  };

  funSearch = (value) => {
    let data = {
      category_id: value,
      page: "1",
      perPage: "5",
    };
    SearchMoviesForCategories(data).then((response) => {
      const json = response.data;
      console.info(json, "SearchMoviesForCategories");
      if (!json.Error) {
        const size = json.length;
        this.setState({ movies: size === undefined ? [json] : json });
      } else {
        this.setState({ movies: [] });
      }
    });
  };

  funListCategories = (typeId) => {


    GetListCategories(typeId).then((response) => {
      const json = response.data;
      console.info(json, "getListCategories");
      if (!json.Error) {
        const size = json.length;
        //this.setState({ categories: size === undefined ? [json] : json });
        //this.state.categories.unshift({id: null,name: "Todos"});

        this.setState({
          categories:[{id: null,name: "Todos"},...size === undefined ? [json] : json]
        });

      } else {
        this.setState({ categories: [] });
      }
    });
  };

  async componentDidMount() {
    this.funSearch(null);
    this.funListCategories(categoryType.movies);
  }

  render() {
    return ComponentLayout(
      <Fragment>
        <Breadcrumb page="Ajax" subPage="Peliculas extraidas de Omdbapi" />
        <CardCategories post={this.state.categories} functionSearch={this.funSearch}  />
        <Row gutter={16} className="bg-dark site-card-border-less-wrapper">
          {this.state.movies.map((i) => (
            <CardMovie post={i} key={i.id} />
          ))}
        </Row>
      </Fragment>
    );
  }
}
