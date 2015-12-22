import Ember from 'ember';

export default Ember.Controller.extend({

  actions:{
    focusHide: function(id, animation, speed){
      id = '#' + id;
      this.Animate.goAndHide(id, animation, speed);
    }
  }

});
