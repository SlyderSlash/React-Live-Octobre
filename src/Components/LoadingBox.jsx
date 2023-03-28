import {CircularProgress, LinearProgress} from '@mui/material/'

const LoadingBox = () => {
    return (
       <div style={{marginTop: 25}}>
            <LinearProgress color="secondary" />
            <h2>
                <CircularProgress />  En cours de chargement
            </h2>
            <LinearProgress color="success" />
        </div> 
    )
}

export default LoadingBox