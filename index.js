console.log("Initializing Trello Power-Up...");

TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    console.log("Adding board button...");
    return [{
      text: 'Custom Field Settings',
      callback: function(t) {
        console.log("Custom Field Settings button clicked.");
        return t.popup({
          title: "Select Fields to Hide",
          url: './settings.html',
          height: 300
        });
      }
    }];
  }
});

console.log("Power-Up initialization complete.");
