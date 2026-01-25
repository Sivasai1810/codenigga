import React, { useState } from 'react'
import axios from "axios"
import "./fileuploadfrom.css"
import Discardmodel from '../Discardmodel/discardmodel'
export default function Fileuploadfrom(
) {
    const [projectname,setProjectname]=useState("")
    const [Files,setFiles]=useState([])
    const [Fileuploadmessage,setFileuploadmessage]=useState([])
    const handlefilerequest=(e)=>{
const selectedFiles=Array.from(e.target.files)
setFiles(selectedFiles)
    }
  console.log(Files)
const formdata=new FormData()
    const handlefileupload=async(e)=>{
  e.preventDefault()
  Files.forEach((files)=>{
  formdata.append("files",files)
  })
 
  try{
     for(const pair of formdata.entries()){
    console.log(pair)
  }
const res=await axios.post("http://localhost:3000/sendfiles",formdata
,{
withCredentials:true,
headers:{
// :"multipart/form-data"
"Content-Type":"multipart/form-data"
}
}
)
const resmessage=res.data.message
const result=res.data.result
setFileuploadmessage({
  resmessage,
  result
})
  }catch(err){
    setFileuploadmessage("Unable to review your code")
    console.log("error at fileuploadform ",err)
  }
    }
    
  return (
    <div className='form-container'>
      <div className='upload-form'>
<div className='project-name'>
    <h4>Project-name <span>(optional)</span></h4>
    <input
    className='name-input-field'
    type='text'
    placeholder='Project-name'
    // value={projectname}
    onChange={()=>setProjectname(e.target.value)}
    >
    </input>
</div>
<div className="file-upload">
<h4>Upload section</h4>
<section className='input-file'>
    <input
    id='file-upload'
    type='file'
    className='file-input-hidden'
    accept='.py,.cpp,.js'
    multiple
    onChange={handlefilerequest}
    >
    </input>
    <p>Upload different types of files
        <span>.py,.cpp,.js,pdf</span>
    </p>
    <button className='file-action-btn' onClick={()=>document.getElementById("file-upload").click()}>
        Browse files
    </button>
</section>
<section className='file-info'>
<p>Uploaded file</p>
 <ul>
{
 Files.map((value,index)=>(
  <li key={index}>{value.name}</li>
  ))
}
  </ul>
</section>
</div>
<div className='file-upload-footer'>
<button>
cancel
</button>
<button onClick={handlefileupload}>
Review code 
</button>
</div>
      </div>
    </div>
  )
}



//  <div className="form-group">
//                 <input
//                   type="file"
//                   id="file-input"
//                   accept=".pdf,.jpg,.jpeg,.png"
//                   multiple
//                   className="file-input-hidden"
//                   disabled={pastedUrl.trim() !== ""}
//                   onChange={(e) => {
//                     const files = Array.from(e.target.files);
//                     setPdfFile((prev) => {
//                       const base = Array.isArray(prev) ? prev : [];
//                       return [...base, ...files];
//                     });
//                   }}
//                 />

//                 <div className="file-upload-area">
//                   <p>Upload multiple PDF, PNG, JPEG files</p>

//                   <button
//                     type="button"
//                     className="browse-btn"
//                     onClick={() => document.getElementById("file-input").click()}
//                     disabled={pastedUrl.trim() !== ""}
//                   >
//                     Browse Files
//                   </button>
//                 </div>
//               </div>