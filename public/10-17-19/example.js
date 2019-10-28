let x = require('./includes/list.js')
var curr = new x(0);
var first = curr;
for (var i = 1; i < 200; i++) {
    var tmp = new x(i);
    curr.next = tmp;
    curr = tmp;
    //console.log(curr.num);
}
curr = first;
while(curr.next){
    console.log(curr.num);
    curr = curr.next;
}