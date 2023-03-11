export const reduce = (state,action) =>{
    switch(action.type){
        case 'search':
            return{...state,searchTxt:action.payload}
        case 'loading':
            return{
                ...state,loading:false
            }
    }
    
}

export const Initial_Values = {
    searchTxt:'',
    loading:true,
}