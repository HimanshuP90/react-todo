//Bitwise Operators

/* 
Interesting Facts about Bitwise Operators: 

&(bitwise AND): Takes two numbers as operands  and does AND on every bit of two numbers. The result of AND is 1 only if both bits are 1.

|(bitwise OR): Takes two numbers as operands  and does OR on every bit of two numbers. The results of OR is one if any of the two is 1.

^(bitwise XOR): Takes two numbers as operands  and does XOR on every bit of two numbers. The results of XOR is 1 if the two bits are different.

<<(left shift): Takes two numbers, left shifts the bits of the first operand, the second operand decide the number of places to shift.

>>(right shift): Takes two numbers, right shifts the bits of the first operand, the second operand decide the number of places to shift.

~(bitwise NOT): Takes one number and inverts all bits of it.

The left-shift and right-shift operators are equivalent to multiplication and division by 2 respectively.
The result of logical operators (&&, || and !) is either 0 or 1, but bitwise operators return an integer value.

int main()
{
   int x = 2, y = 5;
   (x & y)? printf("True ") : printf("False ");
   (x && y)? printf("True ") : printf("False ");
   return 0;
}
// Output: False True

*/

let a = 5, b = 9;

console.log(a & b);
console.log(a | b);
console.log(a ^ b);
console.log(a << b);
console.log(a >> b);


//Getting lowest set bit of a number:

num = 7;
num & ~(num -1); 


//Count set bits in an integer
num &= (num-1);

//Count total bits in a number

num = 18;

	while (n)
	   {
	        count++;
	        n >>= 1;
	    }
	return count;

//Position of rightmost set bit
 n &  ~(n-1)