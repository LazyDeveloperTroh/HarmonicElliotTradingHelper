import React from 'react'
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

function MenuItem({name, icon}) {

    return (
        <>
        <Button startIcon={<SendIcon fontSize={'small'}/>} style={{color: "#5f748d"}} size={'small'} >
            {name}
        </Button>
        </>
    );
}

export default MenuItem;