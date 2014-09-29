angular.module('boom.plp')

    .controller('plpCtrl', ['$scope', 'categoryRepository',
        function ($scope, categoryRepository) {

        $scope.categories = [];

        (function() {
            categoryRepository.all().then(function(categories) {
                $scope.categories = categories.data;
            });
        })();
    }]
);