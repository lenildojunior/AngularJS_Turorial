angular.
module('phoneList').
component('phoneList', {
  // Note: The URL is relative to our `index.html` file
  templateUrl: 'phone-list/phone-list.template.html',

  controller: [
    'Phone',
    function PhoneListController(Phone){
      this.phones = Phone.query();
      this.orderProp = 'age';
    }
  ]
});