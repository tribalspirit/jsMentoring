/**
 * Created by Nick on 18.11.2015.
 */

'use strict';

var module = angular.module('notebook');

module.directive('viewNote', viewNoteDirective);

viewNoteDirective.$inject = ['NoteService'];

function viewNoteDirective(NoteService) {
    function linker(scope){

        scope.editMode = false;

        scope.toggleMode = function(){
            scope.editMode = !scope.editMode;
        }

        scope.update = function(){
            let params = {
                title: scope.item.title,
                content: scope.item.content
            };
            NoteService.update(scope.item._id, params).then(function(data){
                if (data.status === "OK") {
                    scope.toggleMode();
                }
            })
        }

        scope.deleteNote = function(){
            NoteService.delete(scope.item._id).then(function(data) {
                scope.refresh();
            })
        }

    }

    return {
        restrict: 'EA',
        transclude: true,
        scope: {
            item: '=',
            refresh: '&'
        },
        templateUrl: '../app/directives/view-note.html',
        link: linker
    }

}