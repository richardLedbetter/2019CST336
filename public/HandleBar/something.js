
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}

function scrable(name){
    tmp_name = name
    for(var i =0; i<name.length;i++){
        tmp = Math.random()*name.length%1;  
        tmp_letter = tmp_name.charAt(i);
        console.log(tmp_letter, tmp_name.charAt(tmp));
        tmp_name = tmp_name.replace(i, tmp_name.charAt(tmp));
        tmp_name = tmp_name.replace(tmp, tmp_letter);
         console.log(tmp_name);
        
    }
    console.log(tmp_name);
    return name;
}
scrable("testthing");