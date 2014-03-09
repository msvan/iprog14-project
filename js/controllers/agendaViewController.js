function AgendaViewController(view, model) {
  // Instantiate the activity view.
  var activityView = new ActivityView(view.$activityViewListTarget, model)
    , activityViewController = new ActivityViewController(activityView, model);
  // Instantiate the day views.
  var cache = [];
  this.renderDays = function() {
    $.each(model.getDays(), function(idx, day) {
      // Ensure we don't re-create old day views, for performance.
      if (cache.length > idx)
        return;
      cache.push(1);
      // Create a new day view.
      var dayView = new DayView(view.$activityViewListTarget, day, model);
      var dayViewController = new DayViewController(dayView, day, model);
    });
  }
  //
  view.$addDayButton.click(function(e) {
    model.addDay();
  });

  // This view is observing the model.
  model.addObserver(this);
  // Update view elements when model change.
  this.update = function(arg) {
    this.renderDays();
  }

  this.renderDays();
}

