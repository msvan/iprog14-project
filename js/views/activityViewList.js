// Shared between ActivityView and DayView.
function ActivityViewList($target, models, startTime) {
  this.$el = $target;

  // Re-render the activity list (for updates).
  this.render = function(models, startTime) {
    var activityTime = null;

    // Clone the start time (so we don't modify it).
    if (startTime)
      activityTime = startTime.clone();

    // Clear the old html.
    this.$el.html('');

    // Create a new activity view item for each activity.
    $.each(models, function(idx, activity) {
      var activityViewItem = new ActivityViewItem($target, activity, activityTime);
      var activityViewItemController = new ActivityViewItemController(activityViewItem, activity);

      // If we're displaying the dayview, we need to increase the time.
      if (activityTime)
        activityTime.add('minutes', activity.getLength());
    });
  }
}

