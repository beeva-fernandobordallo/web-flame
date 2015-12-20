import Base from './../../base';

export default Base.extend({

  actions: {
    launchToast: function () {
      this.Toast.addToast('¡Has lanzado una notificación! (3 segundos)', 3000, 'rounded');
    }
  }
});
