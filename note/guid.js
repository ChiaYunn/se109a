function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}
//取16進位的亂數
function guid() {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}
//8位數-4位數-4位數-4位數-12位數
console.log(guid())