(function() {
	angular
		.module('iserveu').config(function($mdThemingProvider) {
			$mdThemingProvider.definePalette('isuAqua', {
			    '50': '61d3d8',
			    '100': '61d3d8',
			    '200': '61d3d8',
			    '300': '61d3d8',
			    '400': '00acb1',
			    '500': '00acb1',
			    '600': '00acb1',
			    '700': '006e73',
			    '800': '006e73',
			    '900': '006e73',
			    'A100': 'ff0000',
			    'A200': 'ff0000',
			    'A400': 'ff0000',
			    'A700': 'ff0000',
			    'contrastDefaultColor': 'light',    
			});

			$mdThemingProvider.definePalette('isuOrange', {
			    '50': 'ffb473',
			    '100': 'ffb473',
			    '200': 'ffb473',
			    '300': 'ffb473',
			    '400': 'ff7600',
			    '500': 'ff7600',
			    '600': 'ff7600',
			    '700': 'a64d00',
			    '800': 'a64d00',
			    '900': 'a64d00',
			    'A100': 'ffb473',
			    'A200': 'ff7600',
			    'A400': 'ff7600',
			    'A700': 'a64d00',
			    'contrastDefaultColor': 'light',    
			});

			$mdThemingProvider.theme('default').primaryPalette('isuAqua').accentPalette('isuOrange');
		});
})();