import React from 'react'
import "./uploadpannel.css"
import Botimg from "../assets/botimg.png"
import Uploadimg from "../assets/upload.png"
import codereviewimg from "../assets/dataprocessing.png"
export default function Uploadpannel () {
  return (
    <div className='Upload-pannel'>
      <div className='upload-header'>
<h3><span>Hi User </span>,Ready to <br></br>
Review & Improve Your Code?
</h3>
      </div>
      <div className='upload-content'>
<div className='upload-actions-btn'>
<div className='upload-card'>
<button className='upload-triggers'>
<img src={Uploadimg} alt='upload-section '>
</img>
<p>Code Review</p>
</button>
</div>
<div className='upload-card'>
<button className='upload-triggers'>
<img src={codereviewimg} alt='upload-section '>
</img>
<p>Update code </p>
</button>
</div>
</div>
      </div>
    </div>
  )
}
