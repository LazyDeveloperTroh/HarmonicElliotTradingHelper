import * as React from 'react'
import {CloudUpload} from "@mui/icons-material";
import "./FileUpload.css"

function FileUpload({onChange, onDrop}) {
    const [isActive, setActive] = React.useState(false);
    const handleDragStart = () => setActive(true);
    const handleDragEnd = () => setActive(false);


    return <label className={`upload${isActive? ' active' : ''}`}
                  onDragEnter={handleDragStart}
                  onDragLeave={handleDragEnd}
                  onDrop={onDrop}
    >
        <input type={"file"} onChange={onChange.bind(this)} style={{display: "none"}} />
        <CloudUpload sx={{fontSize: "5rem"}}/>
        <p style={{fontWeight: "bold", fontSize: "1rem", margin: "20px 0 10px"}}>클릭 혹은 파일을 이곳에
            드롭하세요.</p>
    </label>;
}

export default FileUpload;