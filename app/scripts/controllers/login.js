'use strict';

angular.module('afterYouEmsApp')
    .config(function (reCAPTCHAProvider) {

        reCAPTCHAProvider.setPublicKey('6LddIvkSAAAAAJBd0N6rx42k5YoTZjq_dOHnJNQw');

        reCAPTCHAProvider.setOptions({
            theme: 'clean'
        });
    })

    .controller('LoginCtrl', function ($scope, reCAPTCHA) {
        $scope.email = "";
        $scope.password = "";
        $scope.register = function () {
            if ($scope.registerForm.$valid) {
                $scope.showdialog = true;
                console.log('Form is valid');
            }
        }
    });