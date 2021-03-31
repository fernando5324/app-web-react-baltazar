/** @format */
import React, { Component, Fragment } from "react";
import ComponentLayout from "../layout/layout";
import PageHeader from "../../components/pageHeader/index.";
//import { GetMovies } from "../../api/movies_ajaxURL";
import { Form, Input, Row, DatePicker, Select } from "antd";
import { SearchMoviesById, SaveMovie } from "../../api/movies";
import { GetListCategories } from "../../api/generic";
import { categoryType, dateFormat, current_user_id } from "../../api/common";
import moment from "moment";

const { Option } = Select;
const routes = [
  {
    path: "index",
    breadcrumbName: "First-level Menu",
  },
  {
    path: "first",
    breadcrumbName: "Second-level Menu",
  },
  {
    path: "second",
    breadcrumbName: "Third-level Menu",
  },
];
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
export default class movies_details extends Component {
  constructor(props) {
    super(props);
    this.wrapper = React.createRef();
    this.formRef = React.createRef();
    this.state = {
      categoryDataList: [],
      formData: [],
      movie_title: "",
      //required_movie_title: "",
    };
  }
  saveData = () => {
    let formData = [];
    formData = this.formRef.current.getFieldsValue();
    formData.premiere = moment(formData.premiere).format(dateFormat);
    formData.image = null;
    formData.is_deleted = 0;
    formData.user_id = current_user_id;
    formData.method_type = "EDIT";

    console.info(formData, "formData");

    SaveMovie(formData)
      .then((response) => {
        console.info(response.data[0].message, "message");
      })
      .catch((error) => {
        console.info(error, "error");
      });
  };
  //https://ant.design/components/form/v3
  onFillData = (data) => {
    this.formRef.current.setFieldsValue({
      movie_id: data.id,
      title: data.title,
      description: data.description,
      category: data.category_id,
      premiere: moment(data.premiere, dateFormat),
    });
  };

  onClearForm = () => {
    this.formRef.current.resetFields();
  };
  OnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  onChangeSelected(value) {
    console.info(value);
  }

  async componentDidMount() {
    let params = this.props.match.params;

    GetListCategories(categoryType.movies).then((response) => {
      const json =
        response.data.length === 1 ? [response.data[0]] : response.data;
      console.info(json, "GetListCategories");
      const array = [];
      json.filter((i) =>
        array.push(
          <Option value={i.id} key={i.id}>
            {i.name}
          </Option>
        )
      );
      this.setState({ categoryDataList: array });
    });
    SearchMoviesById(params.movieId).then((response) => {
      const json = response.data[0];
      console.info(json, "SearchMoviesForCategories");
      this.onFillData(json);
    });
  }

  render() {
    const { categoryDataList } = this.state;
    return ComponentLayout(
      <Fragment>
        <PageHeader
          title="Editar"
          subTitle="elemento 01"
          breadcrumb={routes}
          functionSave={this.saveData}
          functionClear={this.onClearForm}
        />
        <Row className="site-layout-background">
          <Form
            {...formItemLayout}
            ref={this.formRef}
            name="time_related_controls"
            scrollToFirstError
          >
            <Form.Item
              name="title"
              label={<span>Titulo&nbsp;</span>}
              rules={[
                {
                  //required: true,
                  message: "Please input your nickname!",
                },
              ]}
            >
              <Input
                onChange={this.OnChange}
                name="movie_title"
                value={this.state.movie_title}
              />
            </Form.Item>
            <Form.Item name="description" label="Descripción">
              <Input.TextArea />
            </Form.Item>

            <Form.Item name="category" label="Categorias">
              <Select
                //mode="multiple"
                placeholder="Please select favourite colors"
                allowClear
                onChange={this.onChangeSelected}
                //ref={this.wrapper}
              >
                {categoryDataList}
              </Select>
            </Form.Item>
            <Form.Item label="DatePicker" name="premiere">
              <DatePicker format={dateFormat} />
            </Form.Item>
            <Form.Item name="movie_id">
              <Input className="hidden" />
            </Form.Item>
          </Form>
        </Row>
      </Fragment>
    );
  }
}
