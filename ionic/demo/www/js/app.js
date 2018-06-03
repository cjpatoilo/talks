
angular.module('app', ['ionic', 'app.controllers'])

	.run(function($ionicPlatform) {

		$ionicPlatform.ready(function() {
			if (window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
			}
			if (window.StatusBar) {
				StatusBar.backgroundColorByHexString('#0C63EE');
			}
		});

	})

	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider

		.state('app', {
			url: '/app',
			abstract: true,
			templateUrl: 'templates/menu.html',
			controller: 'AppController'
		})

		.state('app.home', {
			url: '/home',
			views: {
				'menuContent': {
					templateUrl: 'templates/home.html',
					controller: 'HomeController'
				}
			}
		})

		.state('app.content', {
			url: '/content',
			views: {
				'menuContent': {
					templateUrl: 'templates/content.html',
					controller: 'ContentController'
				}
			}
		})

		.state('app.button', {
			url: '/button',
			views: {
				'menuContent': {
					templateUrl: 'templates/button.html',
					controller: 'ButtonController'
				}
			}
		})

		.state('app.list', {
			url: '/list',
			views: {
				'menuContent': {
					templateUrl: 'templates/list.html',
					controller: 'ListController'
				}
			}
		})

		.state('app.form', {
			url: '/form',
			views: {
				'menuContent': {
					templateUrl: 'templates/form.html',
					controller: 'FormController'
				}
			}
		})

		.state('app.tab', {
			url: '/tab',
			views: {
				'menuContent': {
					templateUrl: 'templates/tab.html',
					controller: 'TabController'
				}
			}
		})

		.state('app.grid', {
			url: '/grid',
			views: {
				'menuContent': {
					templateUrl: 'templates/grid.html',
					controller: 'GridController'
				}
			}
		})

		.state('app.navigation', {
			url: '/navigation',
			views: {
				'menuContent': {
					templateUrl: 'templates/navigation.html',
					controller: 'NavigationController'
				}
			}
		})
		.state('app.navigation-facts', {
			url: '/navigation/facts',
			views: {
				'menuContent': {
					templateUrl: 'templates/navigation-facts.html',
					controller: 'NavigationController'
				}
			}
		})
		.state('app.navigation-more', {
			url: '/navigation-more',
			views: {
				'menuContent': {
					templateUrl: 'templates/navigation-more.html',
					controller: 'NavigationController'
				}
			}
		})

		.state('app.actionsheet', {
			url: '/actionsheet',
			views: {
				'menuContent': {
					templateUrl: 'templates/actionsheet.html',
					controller: 'ActionSheetController'
				}
			}
		})

		.state('app.loading', {
			url: '/loading',
			views: {
				'menuContent': {
					templateUrl: 'templates/loading.html',
					controller: 'LoadingController'
				}
			}
		})

		.state('app.modal', {
			url: '/modal',
			views: {
				'menuContent': {
					templateUrl: 'templates/modal.html',
					controller: 'ModalController'
				}
			}
		})

		.state('app.popover', {
			url: '/popover',
			views: {
				'menuContent': {
					templateUrl: 'templates/popover.html',
					controller: 'PopoverController'
				}
			}
		})

		.state('app.popup', {
			url: '/popup',
			views: {
				'menuContent': {
					templateUrl: 'templates/popup.html',
					controller: 'PopupController'
				}
			}
		})

		.state('app.scroll', {
			url: '/scroll',
			views: {
				'menuContent': {
					templateUrl: 'templates/scroll.html',
					controller: 'ScrollController'
				}
			}
		})

		.state('app.slidebox', {
			url: '/slidebox',
			views: {
				'menuContent': {
					templateUrl: 'templates/slidebox.html',
					controller: 'SlideBoxController'
				}
			}
		})

		.state('app.refresh', {
			url: '/refresh',
			views: {
				'menuContent': {
					templateUrl: 'templates/refresh.html',
					controller: 'RefreshController'
				}
			}
		})

		.state('app.spinner', {
			url: '/spinner',
			views: {
				'menuContent': {
					templateUrl: 'templates/spinner.html',
					controller: 'SpinnerController'
				}
			}
		})

		.state('app.icon', {
			url: '/icon',
			views: {
				'menuContent': {
					templateUrl: 'templates/icon.html',
					controller: 'IconController'
				}
			}
		})

		$urlRouterProvider.otherwise('/app/home');

	});
