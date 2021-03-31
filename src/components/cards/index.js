/** @format */

import React, { Component } from "react";
import { Card, Col, Button } from "antd";
import img_not_found  from "../../images/not_found.jpg";
import "./style.css";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { DeleteFilled } from '@ant-design/icons';

const { Meta } = Card;

export class CardPost extends Component {
  render() {
    const item = this.props.post;
    return (
      <Col xs={24} sm={12} md={12} lg={12} xl={12} key={item.id}>
        <Card title={item.title} bordered={false}>
          {item.description}
        </Card>
      </Col>
    );
  }
}

export class CardMovieAjax extends Component {
  render() {
    const item = this.props.post;
    return (
      <Col
        xs={24}
        sm={12}
        md={8}
        lg={8}
        xl={8}
        className="col-sm-12 col-md-4 col-lg-6"
        key={item.id}
      >
        <Card
          hoverable
          style={{ width: 240 }}
          cover={<img alt={item.Title} src={item.Poster} />}
        >
          <Meta title={item.Title} description={item.Plot} />
        </Card>
        <Card
          style={{ width: 300 }}
          cover={
            <img
              alt="example"
              src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
          }
          actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
          ]}
        >
          <Meta title="Card title" description="This is the description" />
        </Card>
      </Col>
    );
  }
}

export class CardMovie extends Component {
  render() {
    const item = this.props.post;
    return (
      <Col xs={24} sm={12} md={4} lg={4} xl={4} key={item.id}>
        <Card
          cover={
            <img
              alt={item.title}
              src={item.image == null ||item.image === "null" ? img_not_found : item.image}
              //onerror= {`this.onerror=null; this.src='${img_not_found}'; this.setAttribute('data-src-error','${img_not_found}')`}
            />
          }
          actions={[
            <Link to={`/movies/details/${item.id}`}>
              <EditOutlined key="edit" />
            </Link>,
            <DeleteFilled />,
          ]}
        >
           {/* <Meta titleName={item.title} title="aaa" /> */}

         <div className="ant-card-meta">
           <div className="ant-card-meta-detail">
             <div className="ant-card-meta-title" title={item.title} >{item.title}</div>
             </div>
          </div>
        </Card>
      </Col>
    );
  }
}

export class CardCategories extends Component {
  render() {
    const item = this.props;
    return (
      <Card title="Categoria">
        {item.post.map((i) => (
          //<Card.Grid key={i.id} style={gridStyle} hoverable={true} id={i.id} onClick={item.functionSearch.bind(this,i.id)}>
          <Button
            className="btn-custom"
            type="primary"
            key = {i.id}
            id={i.id}
            onClick={item.functionSearch.bind(this,i.id)}
          >
            {i.name}
          </Button>
        ))}
      </Card>
    );
  }
}
