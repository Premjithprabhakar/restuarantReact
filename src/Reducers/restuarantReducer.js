import { R_SUCCESS,R_FAIL} from '../constants/restuararntConstants'

export const restuarantListReducer=(state={restaurantsList:[]},action)=>{
    switch(action.type){
        case R_SUCCESS:
            return {restaurantsList:action.payload}
            case R_FAIL:
                return {restaurantsList:action.error}
    
        default:
            return state
    }

}
