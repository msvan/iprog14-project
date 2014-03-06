// Shared between ActivityView and DayView.
function ActivityViewList($target, models) {
  this.$el = $target;
  // Re-render the activity list.
  this.render = function() {
    // Clear the old html.
    $target.html('');
    // Create a new activity view item for each activity.
    $.each(models, function(idx, activity) {
      var activityViewItem = new ActivityViewItem($target, activity);
      var activityViewItemController = new ActivityViewItemController(activityViewItem, activity);
    });
  }
  this.render();
}

