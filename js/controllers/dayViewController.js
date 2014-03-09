function DayViewController(view, model, agenda) {
  // When the start time input changes, update the model.
  view.$startTime.change(function(e) {
    // Split the hour and minutes.
    var values = $(this).val().split(':');
    // Invalid input.
    if (values.length < 2)
      return;
    // Set the values.
    model.setStart(parseInt(values[0]), parseInt(values[1]));
  });
}

