import { Layout, Menu,Col } from "antd";
import React from 'react'
const { Header } = Layout
import '../styles/headercomponent.css'

export const HeaderComponent = () => {
  const items = [
    { label: '1° Generación', key: '1' },
    { label: '2° Generación', key: '2'}
  ]
  return (
    <Header className="Header" >
      <div className="Logo">
        <img className="Header-img" src="https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg" alt="pokedux"/>
      </div>
        <Menu className="Header-menu"
          theme="dark"
          mode="horizontal"
          items={items}
        />
    </Header>
  )
}
