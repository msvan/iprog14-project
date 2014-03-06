function DayView($target, model, agenda) {
  this.$el = $(tmpl('dayViewTmpl', {})).appendTo($target);
  this.$el.data('model', model);
  this.$activityList = this.$el.find('.activityViewList');
  this.$endTime = this.$el.find('.js-end-time');
  this.$totalLength = this.$el.find('.js-total-length');
  this.$startTime = this.$el.find('.js-start-time');
  this.$distribution = this.$el.find('.js-distribution');

  // Create a new 'collection' of activies view list (shared with the activity view).
  this.activitiesView = new ActivityViewList(this.$activityList, model.getActivities());
  this.activitiesViewController = new ActivityViewListController(this.activitiesView, this.$el.index() - 1, agenda);
  this.distributionView = new DistributionView(this.$distribution, model);

  // Update time information.
  this.updateTime = function() {
    this.$endTime.html(model.getEnd());
    this.$totalLength.html(model.getTotalLength());
  }
  this.$startTime.val(model.getStart());
  this.updateTime();

  // This view is observing the model.
  agenda.addObserver(this);
  // Update view elements when model change.
  this.update = function(arg) {
    this.activitiesView.render(model.getActivities());
    this.distributionView.render();
    this.updateTime();
  }
}

