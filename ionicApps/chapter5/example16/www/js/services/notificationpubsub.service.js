(function() {
  'use strict';

  /* jshint latedef: nofunc */
  /** @ngdoc service
   * @name app.core.service:NotificationPubSub
   *
   * @propertyOf app.core
   * @requires
   * $rootScope
   *
   * @description
   * Service for app wide event notification.
   *
   *
   * data{
   *    type:'name of notification',
   *    value:{}
   * }
   *
   *
   ?*
   *  use Example
   *  $scope.notifications
   *
     $scope.notify = function() {
      NotifyingService.publish( {
                                     type:notifyTypes().AUTH_STATE
                                     data:{loggedIn:false};
                                });
      };
   *
   * NotificationPubSub.subscribe($scope, function pubEvent() {
   *     $scope.notifications++;
   *});
   *
   *
   */

  angular
   .module('starter.service', []);

  angular.module('starter.service').factory('NotificationPubSub',  ['$rootScope',
          function($rootScope) {

              return {
                  notifyTypes: function(){
                      return {
                          BACK_BUTTON:'back_button'
                      }
                  },
                  subscribe: function(scope, callback) {
                      var handler = $rootScope.$on('notifying-service-event', callback);
                      scope.$on('$destroy', handler);
                  },

                  publish: function(notifyData) {
                      $rootScope.$emit('notifying-service-event', notifyData);
                  }
              }
          }
      ])

})();
