
/**
 * Generate Random ID
 * @returns random Id
 */
export const genId = () =>{
    const random = Math.random().toString(36).slice(2)
    const date = Date.now().toString(36)

    return random+date
}
/**
 * Formats the day, ex. Jun 05, 2020
 * @returns month day, year
 */
export const formatDate = () =>{
    const newDate = new Date()
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    return  newDate.toLocaleDateString('en-US', options)
}

// export const formatAmount =()=>{
//     const options = {
//         style: 'currency',
//         currency: 'USD'
//     }
//     return amount.toLocaleString('en-US',options)}