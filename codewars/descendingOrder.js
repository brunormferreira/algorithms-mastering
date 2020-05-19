/* Your task is to make a function that can take any non-negative integer
as a argument and return it with its digits in descending order. Essentially,
rearrange the digits to create the highest possible number.

Examples:
  Input: 21445 Output: 54421
  Input: 145263 Output: 654321
  Input: 123456789 Output: 987654321
*/

function descendingOrder(number) {
  const arr = number.toString().split('');
  const reversed = [];
  
  for (i = 0; i < arr.length; i++){
    reversed.push(parseInt(arr[i]));
  }
  
  const sort = reversed.sort((a, b) => b - a); // descending
  const result = sort.join('');
  const parsed = parseInt(result);
  
  return parsed;  
}