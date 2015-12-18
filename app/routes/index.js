import Base from './base';

export default Base.extend({

  auth: false,

  actions: {

    focus: function(id, animation, speed){
      id = '#' + id;
      this.Animate.go(id,animation,speed);
    },
    didTransition: function() {
      this.Animate.entryPage('.page', 'fadeIn');
    },

    willTransition: function(transition){
      this.Animate.exitPage('.page','fadeOut', transition, 'fast');
    }

  }

});
