function ActivityDetailViewController(view, model) {
  // Set up the form handlers.
  view.$form.submit(function(e) {
    e.preventDefault();
    // Input's element value -> Object
    var obj = {};
    view.$form.find("[name]").each(function(idx, e) {
      e = $(e);
      obj[e.attr("name")] = e.val();
    });
    obj.typeid = parseInt(obj.typeid); obj.length = parseInt(obj.length);
    // Check nonempty values.
    if (!obj.name.trim()) {
      view.showError("name", "Please fill in a name for the activity.");
      return;
    } else {
      view.showError("name");
    }
    if (isNaN(obj.length)) {
      view.showError("length", "Please fill in the length of the activity in minutes.");
      return;
    } else {
      view.showError("length");
    }
    // Add a new model if we're creating one.
    if (model == null) {
	    model = new Activity(obj.name, obj.length, obj.typeid, obj.description);
      _g_model.addActivity(model);
    }
    // Object -> Model
    if (model.getName() != obj.name) model.setName(obj.name);
    if (model.getLength() != obj.length) model.setLength(obj.length);
    if (model.getTypeId() != obj.typeid) model.setTypeId(obj.typeid);
    if (model.getDescription() != obj.description) model.setDescription(obj.description);
    // Remove view.
    view.$el.remove();
  });
  // Set up the click handlers.
  view.$cancelButton.click(function(e) {
    e.preventDefault();
    // Remove view.
    view.$el.remove();
  });
}

