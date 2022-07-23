// 1. how to compare two json have the same properties without order
//a. var obj1 = {name:"person 1", age:5};
//b. var obj2 = {age:5,name:"person 1" };
//answer

var obj1 = {name:"person 1", age:5};
var obj2 = {age:5,name:"person 1" };
let a = JSON.stringify(obj1)
let b = JSON.stringify(obj2)
if (obj1 = obj2)
{
  console.log("true");
}
else
{
  console.log("False");
}  

 
 // 2. use the rest countries API URL >https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json & display all the country flag
//answer

var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result)
    for(var i=0; i<result.length; i++)
    console.log(result[i].flags);

}                                                     


 // 3. use the same rest countries & print all countries name, region, subregion & population
//answer

var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json")
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
    console.log(result)
    for(var i=0; i<result.length; i++)
    console.log(result[i].name+" "+result[i].region+" "+result[i].subregion+" "+result[i].population);

}                                                     
