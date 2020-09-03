angular.
module('phoneList').
component('phoneList', {
  // Note: The URL is relative to our `index.html` file
  templateUrl: 'phone-list/phone-list.template.html',

      controller: function PhoneListController() {
        this.phones = [
          {
            name: 'Nexus S',
            snippet: 'Fast just got faster with Nexus S.',
            age: 1
          }, 
          {
            name: 'Motorola XOOM™ with Wi-Fi',
            snippet: 'The Next, Next Generation tablet.',
            age: 2
          }, 
          {
            name: 'MOTOROLA XOOM™',
            snippet: 'The Next, Next Generation tablet.',
            age: 3
          }
        ];
        this.name = 'AngularJS';
        this.orderProp = 'age';
      }
    });