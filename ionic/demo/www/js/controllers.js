angular.module('app.controllers', [])


	.controller('AppController', function ($scope, $ionicModal) {

		$ionicModal.fromTemplateUrl('templates/profile.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function (modal) {
			$scope.profileModal = modal;
		});

	})


	.controller('HomeController', function ($scope) {
	})


	.controller('ContentController', function ($scope) {
	})


	.controller('ButtonController', function ($scope) {
	})


	.controller('ListController', function ($scope) {

		var items = [];
		for (var i = 0; i <= 30; i++) {
			items[i] = i;
		}

		$scope.items = items;

	})


	.controller('FormController', function ($scope) {
	})


	.controller('TabController', function ($scope) {
	})


	.controller('GridController', function ($scope) {
	})


	.controller('NavigationController', function ($scope) {
	})


	.controller('ActionSheetController', function ($scope, $ionicActionSheet, $timeout) {

		// Triggered on a button click, or some other target
		$scope.show = function() {

			// Show the action sheet
			var hideSheet = $ionicActionSheet.show({
				buttons: [
					{ text: '<b>Share</b> This' },
					{ text: 'Move' }
				],
				destructiveText: 'Delete',
				titleText: 'Modify your album',
				cancelText: 'Cancel',
				cancel: function() {
					// add cancel code..
				},
				buttonClicked: function(index) {
					return true;
				}
			});

			// For example's sake, hide the sheet after two seconds
			$timeout(function() {
				hideSheet();
			}, 2000);

		};

	})

	.controller('LoadingController', function ($scope, $ionicLoading) {

		// Triggered on a button click, or some other target
		$scope.show = function() {
			$ionicLoading.show({
				duration: 2000,
				template: 'Loading..'
			});
		};

	})


	.controller('ModalController', function ($scope, $ionicModal) {

		$ionicModal.fromTemplateUrl('templates/modal.html', {
			scope: $scope,
			animation: 'slide-in-up'
		}).then(function(modal) {
			$scope.modal = modal;
		});
		$scope.show = function() {
			$scope.modal.show();
		};
		$scope.hide = function() {
			$scope.modal.hide();
		};
		//Cleanup the modal when we're done with it!
		$scope.$on('$destroy', function() {
			$scope.modal.remove();
		});
		// Execute action on hide modal
		$scope.$on('modal.hidden', function() {
			// Execute action
		});
		// Execute action on remove modal
		$scope.$on('modal.removed', function() {
			// Execute action
		});

	})


	.controller('PopoverController', function ($scope, $ionicPopover) {

		// .fromTemplate() method
		var template = '<ion-popover-view><ion-header-bar> <h1 class="title">My Popover Title</h1> </ion-header-bar> <ion-content> Hello! </ion-content></ion-popover-view>';

		$scope.popover = $ionicPopover.fromTemplate(template, {
			scope: $scope
		});

		// .fromTemplateUrl() method
		$ionicPopover.fromTemplateUrl('templates/popover.html', {
			scope: $scope
		}).then(function(popover) {
			$scope.popover = popover;
		});

		$scope.show = function($event) {
			$scope.popover.show($event);
		};
		$scope.hide = function() {
			$scope.popover.hide();
		};
		//Cleanup the popover when we're done with it!
		$scope.$on('$destroy', function() {
			$scope.popover.remove();
		});
		// Execute action on hide popover
		$scope.$on('popover.hidden', function() {
			// Execute action
		});
		// Execute action on remove popover
		$scope.$on('popover.removed', function() {
			// Execute action
		});

	})


	.controller('PopupController', function ($scope, $ionicPopup, $timeout) {

		// Triggered on a button click, or some other target
		$scope.showPopup = function() {
			$scope.data = {}

			// An elaborate, custom popup
			var myPopup = $ionicPopup.show({
				template: '<input type="password" ng-model="data.wifi">',
				title: 'Enter Wi-Fi Password',
				subTitle: 'Please use normal things',
				scope: $scope,
				buttons: [{
					text: 'Cancel'
				}, {
					text: '<b>Save</b>',
					type: 'button-positive',
					onTap: function(e) {
						if (!$scope.data.wifi) {
							//don't allow the user to close unless he enters wifi password
							e.preventDefault();
						} else {
							return $scope.data.wifi;
						}
					}
				}, ]
			});
			myPopup.then(function(res) {
				console.log('Tapped!', res);
			});
			$timeout(function() {
				myPopup.close(); //close the popup after 3 seconds for some reason
			}, 3000);
		};
		// A confirm dialog
		$scope.showConfirm = function() {
			var confirmPopup = $ionicPopup.confirm({
				title: 'Consume Ice Cream',
				template: 'Are you sure you want to eat this ice cream?'
			});
			confirmPopup.then(function(res) {
				if (res) {
					console.log('You are sure');
				} else {
					console.log('You are not sure');
				}
			});
		};

		// An alert dialog
		$scope.showAlert = function() {
			var alertPopup = $ionicPopup.alert({
				title: 'Don\'t eat that!',
				template: 'It might taste good'
			});
			alertPopup.then(function(res) {
				console.log('Thank you for not eating my delicious ice cream cone');
			});
		};

	})


	.controller('ScrollController', function ($scope) {
	})


	.controller('SlideBoxController', function ($scope) {
	})


	.controller('RefreshController', function ($scope) {

		$scope.items =  [
			{name: "Do the dishes"},
			{name: "Take out the trash"}
		]

		$scope.doRefresh = function() {
			$scope.items.unshift({ name: 'Incoming item ' + new Date().toString().split(' ')[4] });
			$scope.$broadcast('scroll.refreshComplete');
			$scope.$apply();
		};

	})


	.controller('SpinnerController', function ($scope) {
	})


	.controller('IconController', function ($scope) {
	});

