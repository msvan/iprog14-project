function DistributionView($target, model) {
  this.$el = $target;
  // Re-render the activity list.
  this.render = function() {
    var totalLength = model.getTotalLength();
    // Clear the old html.
    $target.html('');
    $target.append('<div class="distributionViewItem divider">');
    // Create a distribution element for each type.
    $.each(ActivityType, function(idx, type) {
      var length = model.getLengthByType(idx);
      // Calculate the distribution.
      var percentage = (length / totalLength) * 100;
      // Append the element.
      $target.append('<div class="distributionViewItem '+type.replace(' ', '-')+'" style="height: '+percentage+'px">');
    });
  }
  this.render();
}

