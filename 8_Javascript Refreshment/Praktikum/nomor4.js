let bdays = ["10-17", "05-19", "20-19"];
const result_arr = [];
for (let i = 0; i < bdays.length; i++) {
	result_arr.push(bdays[i].replace("-", "/"));
}
console.log(result_arr);