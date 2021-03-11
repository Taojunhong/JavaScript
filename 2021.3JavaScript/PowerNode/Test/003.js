function f1(name,age){
    console.log(name);
    console.log(age);
    console.log(this.name);
    console.log(this.age);
}
f1(10086,10010);
