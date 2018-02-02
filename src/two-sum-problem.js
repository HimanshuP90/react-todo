let arr = [-4, 2, 1, 9, 7, 5]
let target = 3;

//Brute Force
let TwoSum = (arr, sum) => {
	let result = []
	for (let i = 0; i < arr.length; i++) {
		for (let j = i+1; j < arr.length; j++) {
			if (arr[j] + arr[i] == sum) {
				result.push([arr[i], arr[j]])
			}
		}
	}
	return result;
}

console.log(TwoSum(arr, target));


//hashmap
let arr = [-4, 2, 1, 9, 7, 5]
let target = 3;

let hashMapTwoSum = (array, sum) => {
  let hashMap = {},
      results = []
  
  for (let i = 0; i < array.length; i++){
    if (hashMap[array[i]]){
      results.push([hashMap[array[i]], array[i]])
    }else{
      hashMap[sum - array[i]] = array[i]
    }
  }
  return results
}

console.log(hashMapTwoSum(arr, target));