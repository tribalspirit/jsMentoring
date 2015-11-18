/**
 * Created by Nick on 17.11.2015.
 */
'use strict'

var module = angular.module('notebook');

module.controller('NotesController', NotesController);

NotesController.$inject = ['$scope', 'NoteService'];

function NotesController ($scope, NoteService) {
    $scope.notes = [];

    $scope.readNotes = function(){
        NoteService.read().then((data) => $scope.notes = data);
    };

}

