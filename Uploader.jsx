import react from 'react';
import axios from 'axios';



export default function Uploader() {
    const[form ,setForm]=react.useState({
        title:"",
        description:"description",
        file:null
    })
    function handleChange(event){
        const inputValue=event.targent.name === "file" ? event.targent.files[0]:event.targent.value;
        setForm({
            ...form ,
            [event.target.name]:inputValue

        })
        }
        function handleSubmit(event){
            event.preventDefault();
          const videoData=new FormData();
            videoData.append("videoFile",form.file);
            videoData.append("title",form.title);
            videoData.append("description",form.description);
           axios.post("http://localhost:3000/upload",videoData)
           .then(response=>{
               console.log(response.data);
           })
        }
    return (
        <div><h2> upload video</h2>
        <form onSubmit={handleSubmit}>
            <div>
            <input type="text" name="title" autoComplete="off"  onChange={handleChange} placeholder="title"/>
            </div>
            <div>
            <textarea type="text" name="description" autoComplete="off" onChange={handleChange} placeholder="description"/>
            </div>
            <div>
            <input type="file" accept="video/mp4" name="file" autoComplete="off"  onChange={handleChange}  placeholder="choose file" />
            </div>
                <button type="submit" > upload</button>
        </form>
            
        </div>
    )
}
