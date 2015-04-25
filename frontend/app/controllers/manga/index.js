import Ember from 'ember';
import HasCurrentUser from '../../mixins/has-current-user';

export default Ember.ObjectController.extend(HasCurrentUser, {
  showFullCharacters: false,
  fullCharacters: null,

  displayCast: function() {
    if (this.get('showFullCharacters') && this.get('fullCharacters')) {
      return this.get('fullCharacters');
    } else {
      return this.get('model.featuredCastings');
    }
  }.property('model.featuredCastings', 'fullCharacters', 'showFullCharacters'),

  mangaLibraryEntryExists: function() {
    return (!Ember.isNone(this.get('model.mangaLibraryEntry'))) && (!this.get('model.mangaLibraryEntry.isDeleted'));
  }.property('model.mangaLibraryEntry', 'model.mangaLibraryEntry.isDeleted'),

  actions: {
    showMoreCharacters: function() {
      this.set('showFullCharacters', true);
      this.send('loadFullCharacters');
    },

    showFewerCharacters: function() {
      this.set('showFullCharacters', false);
    }
  }
});
