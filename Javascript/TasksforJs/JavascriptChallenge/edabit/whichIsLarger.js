function whichIsLarger(f, g) {
	
    if (f()> g()){
        return "f";
    }
    else if(g()> f()){
        return "g";
    }
    else if (g()===f()){
        return "neither";
    }
}
console.log(whichIsLarger(5, 1))