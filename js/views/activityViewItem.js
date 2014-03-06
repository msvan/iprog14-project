function ActivityViewItem($target, model) {
  // Serialize the model to an object for the template.
  var obj = model ? {
      name: model.getName(),
      length: model.getLength(),
      type: ActivityType[model.getTypeId()],
      typeid: model.getTypeId(),
      description: model.getDescription()
  } : { name: '', length: '', typeid: '', description: '' };
  this.$el = $(tmpl('activityItemViewTmpl', obj)).appendTo($target);
  this.$el.data('model', model);
}

