function ActivityView($target, model) {
  this.$el = $(tmpl('activityViewTmpl', {})).appendTo($target);
  this.$addActivityButton = this.$el.find('.activityViewHeaderButton');
  this.$activityList = this.$el.find('.activityViewList');

  // Create a new 'collection' of activies view list (shared with day view).
  this.activitiesView = new ActivityViewList(this.$activityList, model.getParkedActivities())
  this.activitiesViewController = new ActivityViewListController(this.activitiesView, null, model);

  // This view is observing the model.
  model.addObserver(this);
  // Update view elements when model change.
  this.update = function(arg) {
    this.activitiesView.render(model.getParkedActivities());
  }
}

