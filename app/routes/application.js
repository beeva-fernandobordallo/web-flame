import Ember from 'ember';


export default Ember.Route.extend({

  beforeModel: function(transition) {

    this.set('i18n.locale', 'es');
    // this.set('i18n.locale', navigator.language || navigator.userLanguage || 'es');

    // Initialize the datapoint
    return this.Data.initialize(transition).then(function(){
      console.log('Your are ready to rock & roll!');
      console.log('-------------------------------');
      console.log('-------------------------------');
      console.log('"self" is defined but never used xD');
      console.log('-------------------------------');
      console.log('-------------------------------');
    }, function(){
        // Abstract: catch error on datapoint intialization
    });

  },

  actions: {

    signIn: function(provider) {
      this.Data.signIn(provider);
    },

    signOut: function() {
      this.Data.signOut();
    },

    redirectHome: function(){

      // Hide sideNav
      $('.button-collapse').sideNav('hide');

      if (this.get('i18n.locale') === 'es') {
        this.transitionTo('index');
      } else {
        this.transitionTo('en');
      }
    },

    goReview: function(){
      if (this.get('i18n.locale') === 'es') {
        this.transitionTo('v1.es.review');
      } else {
        this.transitionTo('v1.en.review');
      }
    },

    goSetup: function(){
      if (this.get('i18n.locale') === 'es') {
        this.transitionTo('v1.es.setup');
      } else {
        this.transitionTo('v1.en.setup');
      }
    },

    goFirstSteps: function(){
      if (this.get('i18n.locale') === 'es') {
        this.transitionTo('v1.es.primeros-pasos');
      } else {
        this.transitionTo('v1.en.primeros-pasos');
      }
    },

    goServices: function(){
      if (this.get('i18n.locale') === 'es') {
        this.transitionTo('v1.es.servicios');
      } else {
        this.transitionTo('v1.en.servicios');
      }
    },

    goRoutes: function(){
      if (this.get('i18n.locale') === 'es') {
        this.transitionTo('v1.es.ruta-base');
      } else {
        this.transitionTo('v1.en.ruta-base');
      }
    },

    goSecurity: function(){
      if (this.get('i18n.locale') === 'es') {
        this.transitionTo('v1.es.seg-y-auth');
      } else {
        this.transitionTo('v1.en.seg-y-auth');
      }
    },

    goCss: function(){
      if (this.get('i18n.locale') === 'es') {
        this.transitionTo('v1.es.css');
      } else {
        this.transitionTo('v1.en.css');
      }
    },

    goMock: function(){
      if (this.get('i18n.locale') === 'es') {
        this.transitionTo('v1.es.mock-data');
      } else {
        this.transitionTo('v1.en.mock-data');
      }
    },

    goTools: function(){
      if (this.get('i18n.locale') === 'es') {
        this.transitionTo('v1.es.herramientas');
      } else {
        this.transitionTo('v1.en.herramientas');
      }
    },

    goMoreProject: function(){
      if (this.get('i18n.locale') === 'es') {
        this.transitionTo('v1.es.proyecto');
      } else {
        this.transitionTo('v1.en.proyecto');
      }
    },

    setLocale: function (locale) {
      this.set('i18n.locale', locale);
      this.Toast.addToast(this.get('i18n').t('label.languageChange'), 2000);
    },

    focus: function(id, animation, speed, infinite){
      id = '#' + id;
      this.Animate.go(id,animation,speed, infinite);
    },

    focusHide: function(id, animation, speed){
      id = '#' + id;
      this.Animate.goAndHide(id,animation,speed);
    }
  }
});
