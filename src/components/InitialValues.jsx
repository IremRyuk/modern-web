export const reduce = (state,action) =>{
    switch(action.type){
        case 'search':
            return{...state,searchTxt:action.payload}
        case 'loading':
            return{...state,loading:false}
        case 'jobsName':
            return{...state,jobsName:action.payload}
        case 'position':
            return{...state,position:action.payload}
        case 'jobsGmail':
            return{...state,jobsGmail:action.payload}
       case 'jobsPhoneNumber':
            return{...state,jobsPhoneNumber:action.payload}
            // contacts paige
        case 'setTimeSeconds':
            return{...state,setSecond:action.seconds}
        case 'setTimeMinutes':
                return{...state,setMinute:action.minutes}
        case 'setTimeHours':
                    return{...state,setHour:action.hours}
        case 'checkSecond':
            return{...state,checkSeconds:action.boolean}
        case 'checkMinutes':
            return{...state,checkMinutes:action.boolean}
        case 'checkHours':
            return{...state,checkHours:action.boolean}
        default :
        return{state}
        
    }
}
export const Initial_Values = {
    searchTxt:'',
    loading:true,
    jobsName:'',
    position:'',
    jobsGmail:'',
    jobsPhoneNumber:'',
    // contacts paige
    setSecond:'00',
    setMinute:'00',
    setHour:'00',
    checkSeconds:true,
    checkMinutes:true,
    checkHours:true,
}