function AgendaView($target, model) {
  // Render it to the DOM:
  this.$el = $(tmpl('agendaViewTmpl', {})).appendTo($target);

  // Take out elements.
  this.$addDayButton = this.$el.find('.agendaViewHeaderButton');
  this.$activityViewListTarget = this.$el.find('.activityViewListTarget');

  // Add the group type color info.
  $(tmpl('infoActivityTypeTmpl', {})).appendTo($target);
}
