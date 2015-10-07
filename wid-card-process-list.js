'use strict';

(function () {

  Polymer({

    is: 'wid-card-process-list',

    behaviors: [Polymer.WidCardStandardBehavior, Polymer.WidCardWeightBehavior, Polymer.WidCardSubscriptionsBehavior],

    properties: {
      /**
       * processes
       * @type {Object}
       */
      processes: {
        type: Object
      }

    },

    _rowClass: function _rowClass(index) {
      var odd = '';
      if (index % 2 === 0) {
        odd = 'odd';
      }
      return odd + ' flex layout horizontal center-center';
    }

  });
})();