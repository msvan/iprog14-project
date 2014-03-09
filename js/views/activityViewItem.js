function ActivityViewItem($target, model, time) {
  // Serialize the model to an object for the template.
  var obj = model ? {
      name: model.getName(),
      length: ((time) ? time.format("HH:mm") : model.getLength() +" min"),
      type: ActivityType[model.getTypeId()],
      typeid: model.getTypeId(),
      description: model.getDescription()
  } : { name: '', length: '', typeid: '', description: '' };

  // Render it to the DOM.
  this.$el = $(tmpl('activityItemViewTmpl', obj)).appendTo($target);

  // Save the model on the element for drag & drop interactivity.
  this.$el.data('model', model);
}

