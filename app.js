var app = angular.module("redApp", []);

app.controller("postCtrl", function ($scope, redService) {
	$scope.request = redService.getPosts();

	$scope.request.then(function (response) {
		$scope.posts = response.data.data.children;

		console.log($scope.posts);
	});
});

app.directive("post", function () {
	return {
		templateUrl:"posts.html",
		replace:true
	}
});