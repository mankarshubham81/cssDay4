// const arr = [4,33,45,1,44,67,2,32];
const arr = [1,2,3,4,5,6,7,8];

function binarySearch(arr, num){
    let start = 0;
    let end = arr.length -1;
    // console.log(arr.length);
    if(arr.length === 0 ){
        return "not found"
    }

    while(start <= end){
        let mid = Math.floor((start + end) / 2);
        if(arr[mid] === num){
            return "Founded index " + mid
        }else if(arr[mid] < num){
            start = mid + 1;
        } else if(arr[mid] > num){
            end = mid - 1;
        }
    }

    return "not found"


}

console.log(binarySearch(arr, 8))