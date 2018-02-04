
/* segregate-0s-and-1s-in-an-array-by-traversing-array-once */


//Method 1
var arr = [0, 0, 1, 0, 0, 1, 1, 0];

let left = 0, right = arr.length - 1;

while(left < right) {
	if ( arr[left] == 0 && left < right ) {
		left++;
	};

	if ( arr[right] == 1 && left < right ) {
		right--;
	}

	if (left < right) {
		arr[left] = 0;
		arr[right] = 1;
		left++;
		right--;
	}
}

console.log(arr);


//Method 2
var arr = [0, 0, 0, 1, 1, 1, 0, 1, 0, 0];
var count = 0;

for (var i = 0; i < arr.length; i++) {
	if (arr[i] == 0) {
		count++;
	}
}

for (var i = 0; i < arr.length; i++) {
	if (i < count) {
		arr[i] = 0;
	} else {
		arr[i] = 1;
	}
}

console.log(arr);