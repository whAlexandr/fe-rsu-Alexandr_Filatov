//1
var a=10,b=20;
console.log(a,b)

//2
function area(a,b){
	areaTriangle=a*b/2;
	return areaTriangle;
}
console.log(area(a,b));


//3
var M=[1,2,3,4,5];
var j=M.length-1,k=M.length-1;
function MassArray(M){
	
	for(var i=M.length;i>=0; i--){
		console.log(M[i]);
	}
	while (j >=0 ) {
		console.log(M[j]);
		j--;
}
do{	console.log(M[k]);
		k--;
	
}while(k>=0)
	
	
	
		
	
}

MassArray(M);


//4
function checked(num){
	if (num>0){
		ans="num is positive";
	}
	else if (num<0){
		ans="num is negative";
	}
	else {
		ans="num = 0";
	}
	return ans;
}
console.log(checked(10)); 
console.log(checked(0)); 
console.log(checked(-10)); 


//5
var name=window.prompt("name?");
alert(name);

//6
function factorial(N){
	if(N < 0) {
		
	return 0;} 
	
    if (N == 0) {
	return 1;} 
	
    else {
		return N * factorial(N - 1); 
			}
	    
}
console.log(factorial(5));



