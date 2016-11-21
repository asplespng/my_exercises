import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    selectPerson: function(person) {
      this.sendAction('stateSetter', person);
    }
  }
});
