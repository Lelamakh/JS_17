// 1) for ციკლი, 0 დან 25 - მდე

for (let i = 0; i < 25; i++) {
  console.log(i);
}
console.log("end of the for loop");

// 2) while ციკლი 0 დან 20 - მდე

let i = 0;
while (i < 20) {
  console.log(i);
  i++;
}
console.log("end of the while loop");

// 3) do while ციკლი 0 დან 30 - მდე

let b = 0;
do {
  console.log(b);
  b++;
} while (b < 30);

console.log("end of the do/while loop");

// 4) for ლუპის დახმარებით შეამოწმეთ მასივის ყველა ელემენტი

const numbers = [2, 3, 6, 7, 8, 9, 23, 24, 29];
let sum = 0;
for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  console.log("Even Numbers -", 2, 6, 8, 24);
  sum += element;
}
console.log("sum -", sum);
let average = sum / numbers.length;
console.log("average -", average);

console.log("end of the const numbers");

// 5) switch
