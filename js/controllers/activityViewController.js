function ActivityViewController(view, model) {
  // When the add activity button is clicked, create the activitity detail popup (shared with edit activity).
  view.$addActivityButton.click(function(e) {
    var activityDetailView = new ActivityDetailView($('body'), null);
    var activityDetailViewController = new ActivityDetailViewController(activityDetailView, null);
  });
}

