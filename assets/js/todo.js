let app = angular.module('todoApp', []);

app.controller('todoCtrl', ['$scope', ($scope)=>{
    $scope.todoList = [];

    $scope.addTodo = ()=>{
        $scope.todoList.push({
            title: $scope.newTodo.title,
            description: $scope.newTodo.description,
            date: {
                day: $scope.newTodo.date.getDate(),
                month: $scope.newTodo.date.getMonth(),
                year: $scope.newTodo.date.getFullYear()
            }
        });

        $scope.newTodo.title = '';
        $scope.newTodo.description = '';
        $scope.newTodo.date = '';
    };

    $scope.removeTodo = (todos)=>{
        let removedTodo = $scope.todoList.indexOf(todos)
        $scope.todoList.splice(removedTodo, 1);
    };
}]);
