/**
 * Created by Nick on 18.11.2015.
 */

'use strict';

var module = angular.module('notebook');

module.directive('viewNote', viewNoteDirective);

viewNoteDirective.$inject = ['NoteService'];

function viewNoteDirective(NoteService) {
    function linker(scope){
        scope.title = "";
        scope.content = "";

        scope.update = function(){
            NoteService.create(params).then(function(data){
                if (data.status === "OK") {
                    scope.title = "";
                    scope.content = "";
                    scope.refresh();
                }
            })
        }

    }

    return {
        restrict: 'EA',
        transclude: true,
        scope: {
            item: '='
        },
        templateUrl: '../app/directives/add-note.html',
        link: linker
    }

}