var Rooms = {
  // holds all roomnames in a set
  _storage: new Set,

  selected: 'lobby',

  items: function() {
    // convert the set of roomnames to an array and chain to perform multiple fcns
    return _.chain([...Rooms._storage]);
  },

  add: function(room, callback = ()=>{}) {

  },

  update: function(messages, callback = ()=>{}) {
    // chain multiple fcns to the messages
    _.chain(messages)
      // pluck returns arr of roomnames property
      .pluck('roomname')
      // only unique vals from the arr
      .uniq()
      // for each unique room val add to storage
      .each((room) => Rooms._storage.add(room));

    callback();
  },

  isSelected: function() {

  },


};