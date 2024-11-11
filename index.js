TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      text: 'Custom Field Settings',  // Button label
      callback: function(t) {
        // Open the settings popup where users can select fields to hide
        return t.popup({
          title: "Select Fields to Hide",
          url: './settings.html',  // Path to your settings popup
          height: 300
        });
      }
    }];
  },
  'card-detail-badges': async function(t, options) {
    const customFields = await t.get('card', 'shared', 'customFields') || [];
    const hiddenFields = await t.get('board', 'shared', 'hiddenFields') || [];

    // Filter out hidden fields
    const badges = customFields
      .filter(field => !hiddenFields.includes(field.name))
      .map(field => ({
        text: field.value,
        color: 'blue'
      }));

    return badges;
  }
});
