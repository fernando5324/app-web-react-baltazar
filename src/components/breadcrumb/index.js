/** @format */

import React, { Component } from "react";
import { Breadcrumb } from "antd";

export default class index extends Component {
  render() {
    return (
      <Breadcrumb className="breadcrumb">
        <Breadcrumb.Item>{this.props.page}</Breadcrumb.Item>
        <Breadcrumb.Item>{this.props.subPage}</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}
