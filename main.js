(function () {
    function add (value) {
        var temp = value;
        add = function() {
            var arg = arguments[0] ? arguments[0] : 0;
            return temp = temp + arg;
        };
        return add();
    }
    console.log(add(1));
    console.log(add(2)); 
    console.log(add(5)); 
})();

    function arrayList()
{
    let arg = [];
    return function(array)
    {
        console.log("Added element: " + array)
        if(array)
        {
            for(let item of array)
            {
                arg.push(item)
                return arg;
            }
        }
        else
            {
                item = 0;
                return arg =[0];
            }
    };
}
let result = arrayList();
console.log(result([2]));
console.log(result([6]));
console.log(result([4]));
console.log(result([]));

