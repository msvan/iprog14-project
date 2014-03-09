function ActivityView($target, agenda) {
  // Render it to the DOM.
  this.$el = $(tmpl('activityViewTmpl', {})).appendTo($target);
  // Take out elements.
  this.$addActivityButton = this.$el.find('.activityViewHeaderButton');
  this.$activityList = this.$el.find('.activityViewList');

  // Create a new 'collection' of activies view list (shared with day view).
  this.activitiesView = new ActivityViewList(this.$activityList, agenda.getParkedActivities());
  this.activitiesViewController = new ActivityViewListController(this.activitiesView, null, agenda);

  // Update view elements when model change.
  this.update = function(arg) {
    this.activitiesView.render(agenda.getParkedActivities());
  }
  this.update();

  // This view is observing the model.
  agenda.addObserver(this);
}

