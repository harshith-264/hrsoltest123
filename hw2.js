const async = require("async");

function checkVoteEligibility(age) {
    return new Promise ((resolve) => {
		setTimeout(() => {
			if(age>=18){
			resolve('You are eligible to vote!');
			}
			else{
			resolve('You are not eligible to vote!');
			}
		}, 2000);
	});
}

async function output(age) {
const result = await checkVoteEligibility(age);
	console.log(result);
}
	
output(17);