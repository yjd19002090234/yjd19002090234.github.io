
function reduce(array, combine, start) {
    var current = start;//6
    for (var element of array) {
        current = combine(current, element);
    }
    return current;
} 


var max=function(data){
    return reduce(data, (a,b)=>{ a>b.credit?a:b.credit;
            }
        ,0)
}