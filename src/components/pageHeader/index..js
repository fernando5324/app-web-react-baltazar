/** @format */

import React, { Component } from "react";
import { PageHeader, Button } from "antd";



export default class index extends Component {
  render() {
    const routes = this.props.breadcrumb;
    return (
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title={this.props.title}
        breadcrumb={ { routes }}
        subTitle={this.props.subTitle}
        extra={[
          <Button key="2" onClick ={this.props.functionClear}>Limpiar</Button>,
          <Button key="1" type="primary" onClick={this.props.functionSave}>
            Guardar
          </Button>,
        ]}
      ></PageHeader>
    );
  }
}
