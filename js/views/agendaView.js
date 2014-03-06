function AgendaView($target, model) {
  this.$el = $(tmpl('agendaViewTmpl', {})).appendTo($target);
  this.$addDayButton = this.$el.find('.agendaViewHeaderButton');
  this.$activityViewListTarget = this.$el.find('.activityViewListTarget');
}

