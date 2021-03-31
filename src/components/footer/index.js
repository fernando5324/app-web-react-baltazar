import React, { Component } from "react";
import { Layout } from "antd";


const { Footer } = Layout;



const FechaActual = (params) => {
  //let strDate = date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate();
  let date = new Date();
  let strDate = date.getFullYear();
  return strDate
} 
export default class index extends Component {
  render() {
    return (
      <Layout>
        <Footer style={{ textAlign: "center" }}>
           ©<FechaActual/> Created by Luis Fernando
        </Footer>
      </Layout>
    );
  }
}
