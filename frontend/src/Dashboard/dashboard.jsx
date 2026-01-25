import React from 'react'
import './dashboard.css'
import Sidebar from '../components/sidebar'
import Uploadpannel from '../upload-pannel/uploadpannel'
import Fileuploadfrom from '../upload-forms/fileuploadfrom'
//   #505c94 80%,
export default function Dashboard() {
  return (
    <div>
  <div className="app">
  <Sidebar />

  <div className="main-content">
    <div className="title-header">
      <h3>Code Nigga</h3>
    </div>
    <Uploadpannel/>

  </div>
</div>

    </div>
  )
}
