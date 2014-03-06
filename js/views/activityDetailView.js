function ActivityDetailView($target, model) {
  // Serialize the model to an object for the template.
  var obj = model ? {
      name: model.getName(),
      length: model.getLength(),
      type: ActivityType[model.getTypeId()],
      typeid: model.getTypeId(),
      description: model.getDescription()
  } : { name: '', length: '', type: '', typeid: '', description: '' };
  this.$el = $(tmpl('activityDetailViewTmpl', obj)).appendTo($target);
  this.$form = this.$el.find('.js-form');
  this.$cancelButton = this.$el.find('.js-cancel');
}

