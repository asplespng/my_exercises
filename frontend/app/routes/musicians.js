import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Bono', 'Elton John', 'Slash'];
  }
});
