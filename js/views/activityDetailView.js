function ActivityDetailView($target, model) {
  // Serialize the model to an object for the template.
  var obj = model ? {
      name: model.getName(),
      length: model.getLength(),
      type: ActivityType[model.getTypeId()],
      typeid: model.getTypeId(),
      description: model.getDescription()
  } : { name: '', length: '', type: '', typeid: '', description: '' };

  // Render it to the DOM.
  this.$el = $(tmpl('activityDetailViewTmpl', obj)).appendTo($target);

  // Take out elements.
  this.$form = this.$el.find('.js-form');
  this.$cancelButton = this.$el.find('.js-cancel');
  this.$error = this.$el.find('.error');

  // Method for showing an error from an input element.
  this.showError = function(target, message) {
    // Remove old error element.
    this.$el.find('.error-'+target).remove();
    this.$el.find('[name='+target+']').css('border', '');
    // Show the new error if we have a message.
    if (message) {
      this.$el.find('[name='+target+']').css('border', '1px solid red');
      $('<div class="error-'+target+'">'+message+'</div>').appendTo(this.$error);
    }
  }
}

