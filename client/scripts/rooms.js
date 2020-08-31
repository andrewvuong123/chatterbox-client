var Rooms = {
  // holds all roomnames in a set
  _storage: new Set,

  // property to indicate the current room selected, default to lobby
  selected: 'lobby',

  // convert the set of roomnames to an array and chain to perform multiple fcns
  items: function() {
    return _.chain([...Rooms._storage]);
  },

  // takes in a room and adds it into storage and calls the cb fcn
  add: function(room, callback = ()=>{}) {
    Rooms._storage.add(room);
    Rooms.selected = room;
    callback();
  },

  // on each fetch will get the rooms and call the cb fcn
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

  // checks if the room of a message matches the current room selected
  isSelected: function(roomname) {
    // true if room matches current room or if rooms selected is lobby
    return roomname === Rooms.selected || !roomname && Rooms.selected === 'lobby';
  }
};