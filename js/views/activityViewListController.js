function ActivityViewListController(view, thisDay, agenda) {
  // Initialize the jquery-ui sortable.
  view.$el.sortable({
    connectWith: ".sortable",
    start: function(e, ui) {
      // Take out the element item being moved.
      var $item = ui.item;
      // Store old information on the element.
      $item.data({
        oldPosition: $item.index(),
        oldDay: thisDay
      });
    },
    update: function(e, ui) {
      // Take out the element item being moved.
      var $item = ui.item;
      // If the item is inside this list, we will handle it.
      if (view.$el.has($item).length) {
        // Take out the old attributes.
        var oldDay = $item.data('oldDay');
        var oldPosition = $item.data('oldPosition');
        // Get the new index.
        var newPosition = $item.index();
        // Move it.
        agenda.moveActivity(oldDay, oldPosition, thisDay, newPosition);
      }
    }
  }).disableSelection();
}

