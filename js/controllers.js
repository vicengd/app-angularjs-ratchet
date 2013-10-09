var menu = angular.element(document.getElementById('menu'));

function TareasCtrl($scope, $http) {
	var snapper = new Snap({
	  element: document.getElementById('content')
	});

	snapper.settings({
		disable: 'right'
	});

	if (localStorage.getItem('tareas')) {
		$scope.tareas = JSON.parse(localStorage.getItem('tareas'));
	}
	else {
	        $http.get('data/tareas.json').success(function(data) {
	            localStorage.setItem('tareas', JSON.stringify(data));
	            $scope.tareas = data;
	        });
	}

	$scope.showmenu = function() {
	    if( snapper.state().state=="left" ){
	        snapper.close(function(){
	        	menu.css('display','none');
	        });
	    } else {
	    	menu.css('display','block');
	        snapper.open('left');
	    }
	};
}

function AddtareaCtrl($scope,$http) {
	$scope.addtarea = function () {
		var tareas = JSON.parse(localStorage.getItem('tareas'));
		var tarea = {
			'id': tareas.length + 1,
			'titulo': $scope.tarea.titulo,
			'desccorta': $scope.tarea.desccorta,
			'desclarga': $scope.tarea.desclarga
		};
        tareas.push(tarea);
        localStorage.setItem('tareas', JSON.stringify(tareas));
        location.href = '#/tareas';
	};
}

function TareaDetailCtrl($scope,$http,$routeParams) {
	$scope.id = $routeParams.tareaId;
	$scope.tareas = JSON.parse(localStorage.getItem('tareas'));
	var index;
	for (var i = 0; i < $scope.tareas.length; i++) {
		if ($scope.tareas[i].id == $scope.id) {
			index = i;
			break;
		}
	};
	var tarea = $scope.tareas[index];
	$scope.tarea = tarea;

   $scope.deletetarea = function() {
        $scope.tareas.splice(index,1);
        localStorage.setItem('tareas', JSON.stringify($scope.tareas));
        location.href = '#/tareas';
    };
}

//Controlador para manejar los eventos iniciados con $emit o $broadcast
function EventCtrl($scope) {
	$scope.$on('MyEvent', function() {
		menu.css('display','none');
	});
}

