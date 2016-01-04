'use strict';

var fjuFilters = angular.module('fjuFilters', []);

fjuFilters.filter('renderHTMLCorrectly', function($sce)
{
	return function(stringToParse)
	{
		return $sce.trustAsHtml(stringToParse);
	}
});