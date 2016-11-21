import Ember from 'ember';

export default Ember.Route.extend({
  selectedPerson: 'Selected',
  model() {
    return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
  },

  actions: {
    setState : function(person) {
      this.set('selectedPerson', person);
    },
    getState : function() {
      alert(this.get('selectedPerson'));
    }
  }
});
