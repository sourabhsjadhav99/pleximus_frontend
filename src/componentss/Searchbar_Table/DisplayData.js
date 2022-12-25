import React from 'react'
import Header from '../Header'
import "./DisplayData.css"
import Table from './Table'

function DisplayData() {
  return (
    <div className="main-box">
      <div>
        <Header/>
        <Table/>
      </div>
    </div>
  )
}

export default DisplayData
