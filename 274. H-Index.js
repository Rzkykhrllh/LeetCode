/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    let sorted = citations.sort((a,b) => b-a).filter(x => x!=0) // Descending Sort and Remove 0
    let h=0
    
    for (let i=0; i<sorted.length; i++){
        if (sorted[i] >= i + 1) {
            h = i + 1
        }
    }

    if (h!=0) return h
    else return sorted.length
};