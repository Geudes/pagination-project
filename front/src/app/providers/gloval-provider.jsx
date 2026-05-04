import { useReducer } from 'react'
import GlobalContext from '../context/global-context'

const initalState = {
    spaces: [],
    bookings: [],
    reviews: [],
    selectedSpace: null,
    user: null,
}

const reducer = (state, action) => {
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
        
        case 'SET_BOOKINGS':
            return {
                ...state,
                bookings: action.payload,
            }

        case 'ADD_BOOKINGS':
            return {
                ...state,
                bookings: [...state.bookings, action.payload]
            }

        case 'UPD_BOOKINGS':
            return {
                ...state,
                bookings: state.bookings.map(
                    booking => booking.id === action.payload.id
                        ? action.payload
                        : booking
                )
            }

        case 'SET_REVIEWS':
            return {
                ...state,
                reviews: action.payload,
            }

        case 'ADD_REVIEWS':
            return {
                ...state,
                reviews: [...state.bookings, action.payload]
            }

        case 'UPD_REVIEWS':
            return {
                ...state,
                reviews: state.reviews.map(
                    review => review.id === action.payload.id
                        ? action.payload
                        : review
                )
            }
        
        case 'DEL_REVIEWS':
            return {
                ...state,
                reviews: state.reviews.filter(review => review.id !== action.payload)
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