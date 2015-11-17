/**
 * Created by Nick on 17.11.2015.
 */

'use strict';

var module = angular.module('notebook');

module.directive('addNote', addNoteDirective);


function addNoteDirective() {
    function linker(scope){
        scope.title = "";
        scope.content = "";
        scope.submitEnabled = function(){
            return $scope.title.length > 0 && $scope.content.length > 10;
        }
    }

    return {
        restrict: 'EA',
        transclude: true,
        scope: {},
        templateUrl: '../app/directives/add-note.html',
        link: linker
    }

}