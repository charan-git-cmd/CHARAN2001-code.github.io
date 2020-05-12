(function (){
	'use strict';
	angular.module('LunchCheck',[])

	.controller('LunchCheckController',LunchCheckController);
	LunchCheckController.$inject=['$scope'];
	function LunchCheckController($scope){
		$scope.checkdishes= function(){
			var num=countdishes($scope.dishes);
			$scope.msg=message(num);
		};
		function countdishes(dishes){
			var count=0;
			//if(dishes)
			//{
				var array=dishes.split(',');
				//console.log(array);
				for (var i in array)
				{
					if(array[i].trim().length!=0)
					{
						count++;
					}
				}
			//}
			return count;
		}
		function message(num)
		{
			if(num==0)
			{
				return 'Please Enter Data First';
			}
			else if(num<=3)
			{
				return 'Enjoy!';
			}
			else
			{
				return 'Too Much';
			}
		}
	}
})();