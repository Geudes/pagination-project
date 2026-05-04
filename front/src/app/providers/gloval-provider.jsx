import { useReducer } from 'react'
import GlobalContext from '../context/global-context'

const initalState = {
    spaces: [],
    selectedSpace: null,
    user: null,
}

const reducer  = (state, action) => {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.payload
            }
        
        case 'REMOVE_USER':
            return {
                ...state,
                user: null
            }

        case 'SET_SPACES':
            return {
                ...state,
                spaces: action.payload
            }

        case 'SET_SELECTEDSPACE':
            return {
                ...state,
                selectedSpace: action.payload
            }
        
        case 'REMOVE_SELECTEDSPACE':
            return {
                ...state,
                selectedSpace: null
            }    
    
        default:
            return state
    }
}

function GlobalProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initalState)

    const value = {
        state,
        dispatch,
    }

  return (
    <GlobalContext.Provider value={value}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider