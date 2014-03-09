function DayView($target, model, agenda) {
  // Render it to the DOM.
  this.$el = $(tmpl('dayViewTmpl', {})).appendTo($target);

  // Save the model on the element for drag & drop interaction.
  this.$el.data('model', model);

  // Take out elements.
  this.$activityList = this.$el.find('.activityViewList');
  this.$endTime = this.$el.find('.js-end-time');
  this.$totalLength = this.$el.find('.js-total-length');
  this.$startTime = this.$el.find('.js-start-time');
  this.$distribution = this.$el.find('.js-distribution');

  // Create a new 'collection' of activies view list (shared with the activity view).
  this.activitiesView = new ActivityViewList(this.$activityList, model.getActivities(), model.getStart());
  this.activitiesViewController = new ActivityViewListController(this.activitiesView, this.$el.index() - 1, agenda);
  this.distributionView = new DistributionView(this.$distribution, model);

  // Update time information.
  this.updateTime = function() {
    this.$endTime.html(model.getEnd().format("HH:mm"));
    this.$totalLength.html(model.getTotalLength());
  }
  this.$startTime.val(model.getStart().format("HH:mm"));

  // Update view elements when model change.
  this.update = function(arg) {
    this.activitiesView.render(model.getActivities(), model.getStart());
    this.distributionView.render();
    this.updateTime();
  }
  // Render it initially.
  this.update();

  // This view is observing the model.
  agenda.addObserver(this);
}

