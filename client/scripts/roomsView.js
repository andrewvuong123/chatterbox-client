var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  // call hanndleClick/handleChange when adding a room or selecting a room
  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('click', RoomsView.handleChange);
  },

  // calls renderRoom on each room
  render: function() {
    // initialize the select button to be empty
    RoomsView.$select.html('');
    // for each item in storage, render the room
    Rooms
      .items()
      .each(room => RoomsView.renderRoom(room));
    // update the selected room to be on the curr room
    RoomsView.$select.val(Rooms.selected);
  },

  // adds into select button
  renderRoom: function (roomName) {
    // add the room's html option tag to the select button
    RoomsView.$select.append(new Option(roomName, roomName));
  },

  // Will add a new room
  handleClick: function (event) {
    // open a prompt to submit a room name
    var roomname = prompt('Enter room name!');
    // add it to the rooms storage and cb on render room to add to select button and message render to reflect messages with that room
    Rooms.add(roomname, () => {
      RoomsView.render();
      MessagesView.render();
    });
  },

  // Will select the current room
  handleChange: function (event) {
    // update the curr room to be the one selected
    Rooms.selected = RoomsView.$select.val();
    // render the page to reflect messages only with that roomname property
    MessagesView.render();
  }

};
