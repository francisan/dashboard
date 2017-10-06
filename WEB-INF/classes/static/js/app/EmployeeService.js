'use strict';

angular.module('crudApp').factory('EmployeeService',
    ['$localStorage', '$http', '$q', 'urls',
        function ($localStorage, $http, $q, urls) {

            var factory = {
                loadAllEmployees: loadAllEmployees,
                getAllEmployees: getAllEmployees,
                getEmployee: getEmployee,
                createEmployee: createEmployee,
                updateEmployee: updateEmployee,
                removeEmployee: removeEmployee
            };

            return factory;

            function loadAllEmployees() {
                console.log('Fetching all emplayees');
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API)
                    .then(
                        function (response) {
                            console.log('Fetched successfully all emplayees');
                            $localStorage.emplayees = response.data;
                            deferred.resolve(response);
                        },
                        function (errResponse) {
                            console.error('Error while loading emplayees');
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function getAllEmployees(){
                return $localStorage.emplayees;
            }

            function getEmployee(id) {
                console.log('Fetching Employee with id :'+id);
                var deferred = $q.defer();
                $http.get(urls.USER_SERVICE_API + id)
                    .then(
                        function (response) {
                            console.log('Fetched successfully Employee with id :'+id);
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while loading emplayee with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function createEmployee(emplayee) {
                console.log('Creating Employee');
                var deferred = $q.defer();
                $http.post(urls.USER_SERVICE_API, emplayee)
                    .then(
                        function (response) {
                            loadAllEmployees();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                           console.error('Error while creating Employee : '+errResponse.data.errorMessage);
                           deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function updateEmployee(emplayee, id) {
                console.log('Updating Employee with id '+id);
                var deferred = $q.defer();
                $http.put(urls.USER_SERVICE_API + id, emplayee)
                    .then(
                        function (response) {
                            loadAllEmployees();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while updating Employee with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

            function removeEmployee(id) {
                console.log('Removing Employee with id '+id);
                var deferred = $q.defer();
                $http.delete(urls.USER_SERVICE_API + id)
                    .then(
                        function (response) {
                            loadAllEmployees();
                            deferred.resolve(response.data);
                        },
                        function (errResponse) {
                            console.error('Error while removing Employee with id :'+id);
                            deferred.reject(errResponse);
                        }
                    );
                return deferred.promise;
            }

        }
    ]);