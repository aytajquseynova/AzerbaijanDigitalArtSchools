function canNest(arr1, arr2) {
	if((Math.min(...arr1)> Math.min(...arr2)) && Math.max(...arr2)> Math.max(...arr1) ) {
		 return true;}
    
	 if ((Math.min(...arr1)== Math.min(...arr2)) && Math.max(...arr2)== Math.max(...arr1) ) {
			return false;
		}
        
            return false;
        
}
console.log(canNest([9, 9, 8,10], [8, 9]));