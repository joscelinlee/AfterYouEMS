'use strict';

angular.module('afterYouEmsApp')
    .controller('LoginCtrl', function ($scope) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.model = {
            key: '6LddIvkSAAAAAJBd0N6rx42k5YoTZjq_dOHnJNQw'
        };

        $scope.submit = function () {
            var valid;

            /**
             * SERVER SIDE VALIDATION
             *
             * You need to implement your server side validation here.
             * Send the model.captcha object to the server and use some of the server side APIs to validate it
             * See https://developers.google.com/recaptcha/docs/
             */
            console.log('sending the captcha response to the server', vcRecaptchaService.data());

            if (valid) {
                console.log('Success');

            } else {
                console.log('Failed validation');

                // In case of a failed validation you need to reload the captcha because each challenge can be checked just once
                vcRecaptchaService.reload();
            }
        };
    });
