const initialState = {
    product: [],
    account: JSON.parse(localStorage.getItem('foodAccounts')) || [],
    basket: []
}


export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ACCOUNT':
            localStorage.setItem('foodAccounts', JSON.stringify([...state.account, action.payload]))
            return {...state, account: JSON.parse(localStorage.getItem('foodAccounts')) || []}
        case 'LOG_IN':
            let logIn = JSON.parse(localStorage.getItem('foodAccounts')).map(el => {
                if (el.id === action.payload) {
                    return {
                        id: el.id,
                        name: el.name,
                        gmail: el.gmail,
                        password: el.password,
                        inAcc: true
                    }
                } else {
                    return {
                        id: el.id,
                        name: el.name,
                        gmail: el.gmail,
                        password: el.password,
                        inAcc: el.inAcc
                    }
                }
            })
            localStorage.setItem('foodAccounts', JSON.stringify(logIn))
            return {...state, account: JSON.parse(localStorage.getItem('foodAccounts')) || []}
        case 'LOG_OUT':
            let logOut = JSON.parse(localStorage.getItem('foodAccounts')).map(el => {
                return {
                    id: el.id,
                    name: el.name,
                    gmail: el.gmail,
                    password: el.password,
                    inAcc: false
                }

            })
            localStorage.setItem('foodAccounts', JSON.stringify(logOut))
            return {...state, account: JSON.parse(localStorage.getItem('foodAccounts')) || []}
        case 'NEW_PASSWORD':
            let newPassword = JSON.parse(localStorage.getItem('foodAccounts')).map(el => {
                if (el.gmail === action.payload.g) {
                    return {
                        id: el.id,
                        name: el.name,
                        gmail: el.gmail,
                        password: action.payload.p,
                        inAcc: true
                    }
                } else {
                    return {
                        id: el.id,
                        name: el.name,
                        gmail: el.gmail,
                        password: el.password,
                        inAcc: el.inAcc
                    }
                }
            })

            localStorage.setItem('foodAccounts', JSON.stringify(newPassword))
            return {...state, account: JSON.parse(localStorage.getItem('foodAccounts')) || []}

        case "DATA_DETAIL" : {
            return {...state, basket: action.payload}
        }
        default:
            return state
    }
}





