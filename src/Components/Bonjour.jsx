import { useState, useEffect } from 'react'
import axios from 'axios'
import LoadingBox from './LoadingBox'
import BasicAlerts from './BasicAlert'
import ButtonAdvice from './ButtonAdvice'

const Bonjour = () => {
    // state : name => valeur par defaut ''
    // error et loading
    const [advice, setAdvice] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // componentWillMount
        callAPI()
        return () => {
            // componentWillUnmount
        }
    }, [])
    useEffect(() => {
        // componentWillUpdate || componentWillReceiveProps

        // Ici useEffect surveille les modifications sur le state advice mis en dépendance
    }, [advice])
    useEffect(() => {
        // componentDidMount
    }, [])

    const callAPI = () => {
        setLoading(true)
        // const urlQuiBug = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid="
        const uFBCIEP = 'https://api.adviceslip.com/advice'
        // uFBCIEP => urlFunBeCarefulInEnglishPlease
        axios.get(uFBCIEP)
        .then(response => {
            if(response.status === 200){
                // response.data.slip.advice
                setAdvice(response.data.slip.advice) 
                setLoading(false)
            }
            else{
                console.log('HUSTON Y\'AS UN PITI PROBLEME')
                setError('HUSTON Y\'AS UN PITI PROBLEME')
            }
        })
        .catch(err => {
            console.error(err)
            setError('Le 49.3 axios n\'as pas fonctionné')
        })
    }
    /*
    MONTAGE :
    -> componentWillMount => componentDidMount

    MISE A JOUR :
    -> componentWillUpdate => shouldComponentUpdate => componentDidUpdate
    -> componentWillReceiveProps

    DEMONTAGE
    -> componentWillUnmount
    */

    // let count = 0 => State de react
    const handleClick = () => {
        callAPI()
    }
    return (
        <div>
            {loading
                ?  <ButtonAdvice disabled={true} handleClick={false}/>
                :  <ButtonAdvice disabled={false} handleClick={handleClick}  />
            }
            {error && <BasicAlerts><h2>{error}</h2></BasicAlerts>}
            {loading
                ? <LoadingBox />
                : <h2>{advice}</h2>
            }
        </div>
    )
}

export default Bonjour

