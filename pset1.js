/* 1
    @func longestArr
    @param {array} arr1
    @param {arrar} arr2
    @returns {array}
    @desc - given two arrays return the longest array
    @example - longestArr([1,2,3,4], ['dog', 'cat']);  // [1, 2, 3, 4]
*/

 let longestArr =(arr1, arr2) =>{
      
      if (arr1.length > arr2.length){
          return arr1 
      }
    else {return arr2
    }

 }
  

 console.log (longestArr([1,2,3,4], [1,2,3]))

// oneliner below
const longestArr1 = (arr1, arr2) => arr1.length > arr2.length ? arr1: arr2;
const longestArr1 = (arr1, arr2) => arr1.lenggth > arr2.length ? arr1: arr2;
*/
/* 2
    @func arrSwapIndex
    @param {array} arr
    @returns {array}
    @desc - given an array, swap the last and first items
            using INDEX only (not using array methods)
            otherwise return string error
    @example - arrSwapIndex([1,2,3,4]);  // [4,2,3,1]
*/
const arrSwapIndex = (arr) =>{
    if 
    
    const fisrtElement = arr[0];
    const lastElement = arr[arr.length -1];

    arr[0]= lastElement;
    arr[arr.lenght - 1] = fisrtElement;

    return arr;
}
console,log (arrSwapIndex([1,2,3,4]), )
/* 3
    @func arrSwap
    @param {array} arr
    @returns {array}
    @desc - given an array, swap the last and first items
            using array methods ONLY (not by index)
            otherwise return string
    @example - arrSwap([1,2,3,4]);  // [4,2,3,1]
*/
const arrSwap = (arr) => {
const fistItem =  arr[0];
const lastItem=



}
/* 4
    @func combineArr
    @param {array} arr1
    @param {arrar} arr2
    @returns {array}
    @desc - given two arrays return ONE array with
            all the items from both arrays 
    @example - combineArr([1,2,3,4], ['dog', 'cat']);  // [1, 2, 3, 4, 'dog', 'cat']
*/
 const combineArr = (arr1)

/* 5
    @func getRandomItem
    @param {array} arr1
    @returns {object} 
    @desc - given an array, return one random
            item from the array.
    @example - getRandomItem([1,2,3,4,5,6,7,8]);  // 7
*/
const getRandomItem = arr1 =>{
    return arr1[ Math.floor(math.random() *arr1.length)]




}

/* 6
    @func getMiddleItem
    @param {array} arr
    @returns {object} 
    @desc - given an array, return the middle element.
            If the array is even in length, return the 
            first "middle item"
    @example - getMiddleItem([1,2,3,4,5,6,7]);  // 4
    @example - getMiddleItem([1,2,3,4,5,6,7,8]);  // 4
*/
const getMiddleItem = (arr) =>{

    const middleIndex = math.floor (arr).length  - 1/2);
    if arr.lenght = math.floor `(arr.length -1/2);`
}

retun arr(middleIndex)
const getmiddleIndex = (arr) =>{
    const middleIndex = math.floor (arr.length - 1 /2);

    if (arr.length % 2 === 0) {
        middleIndex -= 1;
    }

    return arr[middleIndex];
}
console.log (getMiddleIndexItem([1,2,3,4,5,6,7}]))


/* 7
    @func getMedianItem
    @param {array} arr
    @returns {number} 
    @desc - given an array, return the middle element.
            If the array is even in length, return the 
            average of the middle two.
    @example - getMedianItem([1,2,3,4,5,6,7]);  // 4
    @example - getMedianItem([1,2,3,4,5,6,7,8]);  // 4.5
*/
function getMedianItem( arr){
    // if FALSE then arr is def NOT an array
    if (Array.isArray(arr) === false){
            return NaN;

    }
    return 0;
}

/////////////////////////////
function getMedianItem(arr){
    console.log ('arr...',);
    return 0; 
}
console.log('.........................')
console.log('getMedianItem retruns a number',typeof getMedianItem ([1,2,3]))==="number");
console.log('If invalid type, return NaN', isNaN(getRandomItem('lllTeamIvalid')) );
console.log('If array is empty, returns NaN', isNaN(getMeianItem([])));
console.log('getMedianItem of [1,2,3,4,5,6,7] returns 4',
        getMedianItem([1,2,3,4,5,6,7] ===4;
            console.log('getMedianItem of [1,2,3,4,5,6,7,8] returns 4.5',
            getMedianItem9{1,2,3,4,5,6,7,8]) ==4.5;}

// check to see if invalid type
// check to see if array is empty
// check an era





const getMedianItem = (arr) =>{
    const middleup = math.ceil(arr.length /2);
    const middleDown = math.floor(arr.length / 2) - 1;

    if ( arr.length % 2 !== 0){
        return (arr[middleDown];
    }
    return (arr[middleUp] + arr[middleDowm]
}