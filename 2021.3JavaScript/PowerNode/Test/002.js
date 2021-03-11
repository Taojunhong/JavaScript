var str="是吗@Test1:我觉得你说的很对@Test:学无止境";
var r=str.match(/@.*?:/ig);
for (var index = 0; index <  r.length; index++) {
    str=str.replace(r[index],"<a>"+r[index]+"</a>");
}
console.log(str);