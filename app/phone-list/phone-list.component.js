angular.
module('phoneList').
component('phoneList', {
  // Note: The URL is relative to our `index.html` file
  templateUrl: 'phone-list/phone-list.template.html',

  controller: [
    '$http',
    function PhoneListController($http) {
      var self = this;
      self.orderProp = 'age';
      self.name = 'AngularJS';

      $http.get('phones/phones.json').then(function(response){
        self.phones = response.data;
      });
    }
  ]
});