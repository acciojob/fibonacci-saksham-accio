function fibonacci(num) {
	let n1 = 0;
	let n2 = 1;
	if(num==0) return n1;
	if(num==1) return n2;
	
	let n3;
	for(let i=2; i<num; i++){
		n3 = n1+n2;
		n1 = n2;
		n2 = n3;
	}
	return n3;
}

module.exports = fibonacci;
