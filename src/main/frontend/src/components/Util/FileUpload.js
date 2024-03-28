import * as React from 'react'
import {CloudUpload} from "@mui/icons-material";
import "./FileUpload.css"

function FileUpload({onChange}) {
    const [isActive, setActive] = React.useState(false);
    const handleDragStart = () => setActive(true)
    const handleDragEnd = () => setActive(false)
    const handleDragOver = (event) => {
        event.stopPropagation();
        event.preventDefault();
    }

    return <label className={`upload${isActive? ' active' : ''}`}
                  onDragEnter={handleDragStart}
                  onDragLeave={handleDragEnd}
                  onDragOver={handleDragOver}
                  onDrop={onChange.bind(this)}
    >
        <input type={"file"} style={{display: "none"}} />
        <CloudUpload sx={{fontSize: "5rem"}}/>
        <p style={{fontWeight: "bold", fontSize: "1rem", margin: "20px 0 10px"}}>클릭 혹은 파일을 이곳에
            드롭하세요.</p>
    </label>;
}

export default FileUpload;