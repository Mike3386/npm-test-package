'use strict';

var moduleMy = require('./npm-test-package');


moduleMy.GetUserRepositories("accetoness").then((data)=>{
    var k = 0;
    /*for(var i=0; i<data.length; i++)
    console.log(data[i].id + " " + data[i].name + " " + data[i].url);*/
});



moduleMy.GetRepositoriesByLine("Tetrisssssssss").then((data)=>{
    var k = 0;
    /*for(var i=0; i<data.length; i++)
    console.log(data[i].id + " " + data[i].name + " " + data[i].owner + " " + data[i].url);*/
    return moduleMy.GetCommitsForRepositorie(data[0]);
}).then((data)=>{
    var k = 0;
    /*for(var i=0; i<data.length; i++)
    console.log(data[i].sha + " " + data[i].author + " " + data[i].message + " " + data[i].date);*/
 
});
