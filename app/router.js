import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('unknown', { path: "*path"});
  this.route('login');
  this.route('admin');

  this.route('v1', function() {
    this.route('es', function() {
      this.route('review');
      this.route('primeros-pasos');
      this.route('servicios');
      this.route('ruta-base');
      this.route('seg-y-auth');
      this.route('herramientas');
      this.route('proyecto');
      this.route('setup');
      this.route('mock-data');
      this.route('css');
    });
  });
  this.route('en');
});

export default Router;
