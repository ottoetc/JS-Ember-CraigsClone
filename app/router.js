import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('cat', {path: '/cat/:cat_id'});
  this.route('listing', {path: '/listing/:listing_id'});
});

export default Router;
