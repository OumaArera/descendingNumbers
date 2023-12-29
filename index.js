/* 
 Takes an integer
 Converts it to string
 Splits it into pieces
 Sorts in a descending order
 Joins the sorted string
 Converts it back to integer
*/ 
const descendingOrder = n => parseInt(n.toString().split("").sort((a,b) => b-a).join(""));

/* 
 Takes an integer
 Converts it to string
 Splits it into pieces
 Sorts in a ascending order
 Joins the sorted string
 Converts it back to integer
*/ 
const ascendingOrder = n => parseInt(n.toString().split("").sort((a,b) => a-b).join(""));