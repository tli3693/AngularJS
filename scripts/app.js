var app = angular.module("ang", []);

app.controller("myExample", example);
app.controller("ctrl1", controller1);
app.controller("ctrl2", controller2);

function example($scope) {
	$scope.textBoxChange = function() {
		console.log("Textbox changed");
	}
	
	
}

function controller1() {
	// assume var this = $scope
	this.operation = "+";
	
	this.calculate = function() {
		console.log("Calculating...");
		this.errors = "";
		if(this.first!=null && this.second!=null) {
			if(this.operation==="+")
				this.result = this.first + this.second;
			else if(this.operation==="-")
				this.result = this.first - this.second;
			else if(this.operation==="*")
				this.result = this.first * this.second;
			else if(this.operation==="/")
				this.result = this.first / this.second;
			else {
				this.errors = "Some error occurred!"
			}
		}
		else
			this.errors = "Please enter a number in each textbox below!"
	}
	
	this.changeOperation = function(button) {
		this.operation = button;
	}


}

function controller2() {
	this.testProp = "From Ctrl 2";
}

