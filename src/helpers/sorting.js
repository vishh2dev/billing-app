const { DateTime } = require("luxon")

export const sorting = (arr,field,sortBy) =>{
  
    let result = []
    if(field === 'name'){
        if(sortBy === 'Asc'){
            result = arr.sort((a,b)=>{
                const nameA = a[field]
                const nameB = b[field]
    
                if (nameA > nameB) {
                    return 1
                }
                if (nameB > nameA) {
                    return -1
                }
                return 0
        })
        }else if(sortBy === 'Desc'){
            result = arr.sort((a,b)=>{
                const nameA = a[field]
                const nameB = b[field]
    
                if (nameA > nameB) {
                    return -1
                }
                if (nameB > nameA) {
                    return 1
                }
                return 0
        })
    }
       
    }
    else if(field === 'price'){
        if(sortBy === 'numAsc'){
            result = arr.sort((a,b) => a.price - b.price)
        }else if(sortBy === 'numDesc'){
            result = arr.sort((a,b) => b.price - a.price)
        }
        
    }
    return result
}



export const modifyDate = (date) =>{
    if(date){
        const cleanDate = date.split('T')
        const dt = DateTime.fromISO(cleanDate[0])
        const humanReadable = dt.setLocale('fr').toLocaleString(dt.DATETIME_MED)
        return humanReadable
    }
    
}