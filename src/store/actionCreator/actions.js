import axios from "axios";

export const ageUp = () => {
    return (
        { type: 'AGE_UP', payload: 1 }
    )

}

export const ageDown = () => {
    return (
        { type: 'AGE_DOWN', payload: 1 }
    )
}

export const loading = () => {
    return (
        { type: 'LOADING' }
    )
}

export const ageChange = () => {
    return (dispatch => {
        dispatch(loading())
        setTimeout(() => {
            dispatch(ageUp())
        }, 3000)
    })
}

export const apiData = (response) => {
    return { type: 'API_DATA', payload: response }
}


export const apiFetch = () => {
    return (
        dispatch => {
            dispatch(loading())
            axios.get('https://jsonplaceholder.typicode.com/users')
                .then(response => {
                    dispatch(apiData(response.data))
                })
        }
    )
}

