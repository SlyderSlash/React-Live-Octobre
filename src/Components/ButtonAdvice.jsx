import Button from '@mui/material/Button'

const ButtonAdvice = ({disabled, handleClick}) => {
    return (
        <Button 
            primary
            variant="contained"
            disabled={disabled}
            onClick={!disabled && handleClick}
        >
            Nouvelle citation
        </Button>
    )
}

export default ButtonAdvice