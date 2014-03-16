function DistributionView($target, model, $breaksText) {
  this.$el = $target;

  // Re-render the activity list.
  this.render = function() {
    var totalLength = model.getTotalLength();

    // Clear and render divider.
    var $divider = $('<div class="distributionViewItem divider">')
      .appendTo($target.empty())
      .hide();

    // Create a distribution element for each type.
    $.each(ActivityType, function(idx, type) {
      var length = model.getLengthByType(idx);
      // Calculate the distribution.
      var percentage = (length / totalLength) * 100;
      // Append the element.
      $('<div class="distributionViewItem '+type.replace(' ', '-')+'" style="height: '+percentage+'px">').appendTo($target);
      // Helpful display of the breaks situation.
      if (type == "Break") {
        var text;
        if (isNaN(percentage)) {
          text = "";
        }
        else if (percentage < 30) {
          text = "Add more breaks!";
          $breaksText.css("color", "red");
          $divider.show();
        } else {
          text = "Enough breaks. :)";
          $breaksText.css("color", "green");
        }
        $breaksText.html(text);
      }
    });
  }
}

