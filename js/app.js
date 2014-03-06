$(function() {
	// Instantiate the model.
  var model = window._g_model = new Model();
  createTestData(model);
  // Create the main application view and controllers.
  var agendaView = new AgendaView($('body'), model)
    , agendaViewController = new AgendaViewController(agendaView, model);
});

function createTestData(model){
	model.addDay();
	model.addActivity(new Activity("Introduction",10,0,""),0);
	model.addActivity(new Activity("Idea 1",30,0,""),0);
	model.addActivity(new Activity("Working in groups",35,1,""),0);
	model.addActivity(new Activity("Idea 1 discussion",15,2,""),0);
	model.addActivity(new Activity("Coffee break",20,3,""),0);
	model.addActivity(new Activity("Coffee break",20,3,""),null);
}

