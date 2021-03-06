/**
 * Created by Nick on 17.11.2015.
 */

'use strict';

var module = angular.module('notebook');

module.service('NoteService', NoteService);

NoteService.$inject = ['$q', '$http'];

function NoteService($q, $http){
    return {
        create: function(params){
            let deferred = $q.defer();

            $http.post('/api/articles', params)
                .success(function(data){
                    deferred.resolve(data);
                })
                .error(function(){
                    deferred.reject();
                });
            return deferred.promise;
        },
        read: function(){
            let deferred = $q.defer();
            $http.get('/api/articles')
                .success(function(data){
                    deferred.resolve(data);
                })
                .error(function(){
                    deferred.reject();
                });
            return deferred.promise;
        },
        delete: function(id){
            let deferred = $q.defer();
            $http.delete('/api/articles/'+id)
                .success(function(data){
                    deferred.resolve(data);
                })
                .error(function(){
                    deferred.reject();
                });
            return deferred.promise;
        },
        update: function(id, params){
            let deferred = $q.defer();
            $http.put('/api/articles/'+id, params)
                .success(function(data){
                    deferred.resolve(data);
                })
                .error(function(){
                    deferred.reject();
                });
            return deferred.promise;
        }
    }
}