import Alert from '@mui/material/Alert'

export default function BasicAlerts(props) {
    return (
        <Alert 
            style={{
                position: 'fixed', 
                top: 0, 
                left: 0,
                width: '100vw'
            }} 
            severity="error">
            {props.children}
        </Alert>
    )
}