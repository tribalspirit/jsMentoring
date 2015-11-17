/**
 * Created by Nick on 17.11.2015.
 */

'use strict';

var module = angular.module('notebook');

module.service('NoteService', NoteService);

NoteService.$inject = ['$q'];

function NoteService($q){
    return {
        create: function(){},
        read: function(){

        }
    }
}