var app = angular.module("redApp");

app.service("redService", function ($http) {
	this.getPosts = function () {
		var promise = $http.get("https://www.reddit.com/r/aww/.json");
		return promise;
	};
});