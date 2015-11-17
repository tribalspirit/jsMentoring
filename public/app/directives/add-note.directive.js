/**
 * Created by Nick on 17.11.2015.
 */

'use strict';

var module = angular.module('notebook');

module.directive('addNote', addNoteDirective);

addNoteDirective.$inject = ['NoteService'];

function addNoteDirective(NoteService) {
    function linker(scope){
        scope.title = "";
        scope.content = "";
        scope.submitEnabled = function(){
            return $scope.title.length > 0 && $scope.content.length > 10;
        }
        scope.create = function(){
            let params = {
                title: scope.title,
                content: scope.content
            };
            NoteService.create(params).then(function(data){
                if (data.status === "OK") {
                    scope.title = "";
                    scope.content = "";
                }
            })
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