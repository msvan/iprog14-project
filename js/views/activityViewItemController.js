function ActivityViewItemController(view, model) {
  // Set up the click handlers.
  view.$el.click(function(e) {
    // Create a new popup.
    var activityDetailView = new ActivityDetailView($('body'), model);
    var activityDetailViewController = new ActivityDetailViewController(activityDetailView, model);
  });
}

