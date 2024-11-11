TrelloPowerUp.initialize({
  'board-buttons': function(t, options) {
    return [{
      text: 'Custom Field Settings',
      callback: function(t) {
        return t.popup({
          title: "Select Fields to Hide",
          url: './settings.html',
          height: 300
        });
      }
    }];
  },
  'card-detail-badges': async function(t, options) {
    const customFields = await t.get('card', 'shared', 'customFields') || [];
    const hiddenFields = await t.get('board', 'shared', 'hiddenFields') || [];

    const badges = customFields
      .filter(field => !hiddenFields.includes(field.name))
      .map(field => ({
        text: field.value,
        color: 'blue'
      }));

    return badges;
  }
});
