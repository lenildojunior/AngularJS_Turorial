angular.
  module('phonecatApp').
    component('phoneList', {
      template:
        '<h1>Tutorial {{$ctrl.name}}</h1>' + 
        '<ul>' +
          '<li ng-repeat="phone in $ctrl.phones">' +
            '<span>{{phone.name}}</span>' +
            '<p>{{phone.snippet}}</p>' +
          '</li>' +
        '</ul>' +
        '<p>Number of phones = {{$ctrl.phones.length}}</p>',

      controller: function PhoneListController() {
        this.phones = [
          {
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.'
          }, 
          {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.'
          }, 
          {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.'
          }
        ];
        this.name = 'AngularJS';
      }
    });