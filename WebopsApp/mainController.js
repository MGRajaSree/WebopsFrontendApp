var app=angular.module('mainController',[]);
app.controller('mainCtrl',function(){

});

app.directive('myNgView',function(){
    return {
        templateUrl:"../form.html"

    };
});

var compareTo = function() {
    return {
        require: "ngModel",
        scope: {
            otherModelValue: "=compareTo"
        },
        link: function(scope, element, attributes, ngModel) {
             
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };
 
            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
    };
};
 
app.directive("compareTo", compareTo);




function myFunction() {
    var q= document.getElementById("password");
    if (q.type === "password") {
        q.type = "text";
    } else {
        q.type = "password";
    }
}


function myFunction1() {
    var q= document.getElementById("passwordConfirm");
    if (q.type === "password") {
        q.type = "text";
    } else {
        q.type = "password";
    }
}
