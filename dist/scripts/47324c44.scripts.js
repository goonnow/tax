"use strict";function TAX(a){for(var b={total:0,detail:[]},c=0,d=1;d<taxLevels.length;d++)if(taxLevels[d-1].max<a&&a<=taxLevels[d].max){c=d;break}for(var e=c;e>0;e--){var f=a-taxLevels[e-1].max;b.total+=f*taxLevels[e].tax,a-=f}return b}var taxLevels=[{max:15e4,tax:0},{max:3e5,tax:.05},{max:5e5,tax:.1},{max:75e4,tax:.15},{max:1e6,tax:.2},{max:2e6,tax:.25},{max:4e6,tax:.3},{max:1/0,tax:.35}];window.types={income:[{desc:"Salary",placeholder:"120000",predefined:!0},{desc:"Bonus",placeholder:"12000",predefined:!0}],deduction:[{desc:"Expense",placeholder:"60000",predefined:!0},{desc:"Personal Deduction",placeholder:"30000",predefined:!0},{desc:"LTF / RTF",placeholder:"5000"}]};var app=angular.module("taxApp",["ngCookies","ngResource"]);app.config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),app.controller("MainCtrl",["$scope",function(a){a.income=0,a.deduction=0,a.diff=function(){return a.income-a.deduction}}]),app.controller("BoxCtrl",["$scope","$attrs",function(a,b){function c(){var c=window.types[b.title];a.list=[];var d=0;angular.forEach(c,function(b){b.predefined&&(a.list.push(b),d++)}),a.types=c,a.selected=c[d]}c(),a.addRecord=function(){a.list.push(a.selected)},a.sum=function(){var b=0;return angular.forEach(a.list,function(a){a.value&&(b+=parseFloat(a.value,10))}),a.value=b||0,b}}]),app.directive("box",function(){return{templateUrl:"views/box.html",restrict:"E",replace:!0,scope:{title:"@",classModifier:"@",value:"="},controller:"BoxCtrl"}}),app.directive("element",function(){return{templateUrl:"views/element.html",restrict:"E",replace:!0,scope:{data:"="}}});