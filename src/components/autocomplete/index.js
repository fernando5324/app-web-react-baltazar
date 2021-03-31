import React, { Component } from 'react'
import { Select, Spin } from 'antd';
import debounce from 'lodash/debounce';
import axios from 'axios';
const { Option } = Select;
const posts = ['Juegos', 'Libros','Peliculas'];
const uriBase = "http://localhost:3200"; 
const urlLibs = `${uriBase}/api/libs/list/search`
const urlMovies = `${uriBase}/api/movies/list/search`
const urlGames = `${uriBase}/api/games/list/search`

export default class index extends Component {
  constructor(props) {
    super(props);
    this.fetchUser = debounce(this.fetchUser, 800);
  }
  state = {
    data: [],
    value: [],
    url:"",
    fetching: false,
    placeholder:"",
    disable:true,
  };
  callData = value => {
    console.log('value', value);
    this.setState({ data: [], fetching: true });
    let data = {
      "value":value,
      "page":"1",
      "perPage":"5"
    };
    axios.post(this.state.url,data).then(response => {
        //console.log(response.data,"----")
        const data = response.data.map(game => ({
          text: `${game.id} ${game.title}`,
          value: game.id,
        }));
        this.setState({ data, fetching: false });
      }).catch(error => {
        console.info(error)
      })
  }
  fetchUser = value => {
    this.callData(value);
  };
  //Al seleccionar el elemento
  handleChange = value => {
    this.setState({
      value,
      data: [],
      fetching: false,
    });
  };
  onFocus = value => {
    //console.log('focus');
    this.callData("");
  }
  changeOptionSelect = value => {
    if(value === "Juegos"){
      this.setState({ url:urlGames ,data: [],placeholder :`Seleccione ${value}` });
      console.info(value,"value");
    }
    if(value === "Libros"){
      this.setState({ url:urlLibs ,data: [] ,placeholder :`Seleccione ${value}`});
    }
    if(value === "Peliculas"){
      this.setState({ url:urlMovies ,data: [] ,placeholder :`Seleccione ${value}`});
    }
    this.setState({ disable:false});
  };
  render() {
    const { fetching, data, value } = this.state;
    return (
      <div className="jumbotrom">
      <Select style={{ width: "20%"}} placeholder={"Tipo"} onChange={this.changeOptionSelect}>
        {posts.map(item => (
          <Option key={item}>{item}</Option>
        ))}
      </Select>
      <Select
        showSearch
        labelInValue
        value={value}
        placeholder= {this.state.placeholder}
        notFoundContent={fetching ? <Spin size="small" /> : null}
        filterOption={false}
        onSearch={this.fetchUser}
        onFocus={this.onFocus}
        onChange={this.handleChange}
        style={{ width: '80%' }}
        disabled= {this.state.disable ? this.state.disable : false}
        allowClear
      >
        {data.map(d => (
          <Option key={d.value}>{d.text}</Option>
        ))}
      </Select>
      </div>
    );
  }
}
