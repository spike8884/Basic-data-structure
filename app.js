//<------ Problem 1 ----->

function reverseString(str) {
    str = str.split("");
    str = str.reverse();
    str = str.join([seperator = '']);
    return str;
}

reverseString("hello");

reverse

//<----- Problem 2 ------>

function factorialize(num) {
    for count=num;
    if(count===0){
        return 1;
    }
    else{
        for(var i=1;i<count;i++){
            num=num*i;
        }
    }
    return num;
}
factorialize(5);
factorialize(10);
factorialize(20);
factorialize(0);


//<------- Palindromes ----->

function palindrome(str) {
    str=str.toLowerCase();
    for(var i=0;i<str.length;i++){
        str=str.replace(' ','');
        str=str.replace(',','');
        str=str.replace('.','');
        str=str.replace('/','');
        str=str.replace('_', '');
        str=str.replace('-', '');
        str=str.replace('(','');
        str=str.replace(')','');
    }
    var copy= str.split('').reverse().join('');
    if(copy==str){
        return true;
    }
    else{
        return false
    }
}

palindrome("0_0 (: /-\ :) 0-0");