angular.module('app',[]).
config(function($routeProvider) {
	$routeProvider.
	when( '/tareas', {
		templateUrl: 'views/tareas.html',
		controller: 'TareasCtrl'
	}).
	when( '/tarea/addtarea', {
		templateUrl: 'views/addtarea.html',
		controller: 'AddtareaCtrl'
	}).
	when( '/tarea/sobre', {
		templateUrl: 'views/sobre.html'
	}).
	when( '/tarea/conf', {
		templateUrl: 'views/conf.html'
	}).
	when( '/tarea/:tareaId', {
		templateUrl: 'views/tarea.html',
		controller: 'TareaDetailCtrl'
	}).
	otherwise({ redirectTo: '/tareas' });
});


