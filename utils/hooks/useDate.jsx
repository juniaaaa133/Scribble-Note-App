import React from 'react'

const useDate = (time) => {
    let DATE = new Date(time)
    let date = DATE.getDate(time)
    let month = DATE.getMonth(time)
    let year = DATE.getFullYear(time)
    
    let generateDate = () => {
        let modifiedMonth ;
        switch (month) {
            case 0:
            modifiedMonth = 'Jan';
            break;
            case 1:
            modifiedMonth = 'Feb'
            break;
            case 2:
            modifiedMonth = 'Mar'
            break;
            case 3:
            modifiedMonth = 'Apr'
            break;
            case 4:
            modifiedMonth = 'May'
            break;
            case 5:
            modifiedMonth = 'Jun'
            break;
            case 6:
            modifiedMonth = 'Jul'
            break;
            case 7:
            modifiedMonth = 'Aug'
            break;
            case 8:
            modifiedMonth = 'Sep'
            break;
            case 9:
            modifiedMonth = 'Oct'
            break;
            case 10:
            modifiedMonth = 'Nov'
            break;
            case 11:
            modifiedMonth = 'Dec'
            break;
        }
        return `${modifiedMonth} ${date}, ${year}`
    }
    return generateDate();
}

export default useDate