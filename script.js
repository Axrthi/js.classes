function analyzeText(){
    let input=document.getElementById("paragraphInput").value
    let charcount=input.length;
    let wordcount=input.split(" ").length
    let nospace=charcount-(wordcount-1)
    let sentencecount=input.match(/[.!?]/g)
    let uniquewords=[...new Set(input.split(" "))].length
    let freq={}
    input.split(" ").map((word)=>{
        freq[word]=(freq[word]||0)+1
})
for(let x in freq){
    console.log(x+" : "+freq[x])
}
}