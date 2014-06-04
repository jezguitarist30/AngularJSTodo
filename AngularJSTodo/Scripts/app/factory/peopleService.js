﻿define([
    'app/modules/services'
], function (appServices) {


    appServices.service('peopleService', function () {

        this.peopleResponse = "";

        this.savePeopleResponse = function (data) {
            this.peopleResponse = data;
        };

        this.getPeopleResponse = function () {
            return this.peopleResponse;
        };

    });


});