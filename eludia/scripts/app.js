(function () {

    // store a reference to the application object that will be created
    // later on so that we can use it if need be
    var app;

    window.APP = load_models ();
    // create an object to store the models for each view
    // this function is called by Cordova when the application is loaded by the device
    document.addEventListener('deviceready', function () {
      
      // hide the splash screen as soon as the app is ready. otherwise
      // Cordova will wait 5 very long seconds to do it for you.
      navigator.splashscreen.hide();

      app = new kendo.mobile.Application(document.body, {
        
        // you can change the default transition (slide, zoom or fade)
        transition: 'slide',
        
        // comment out the following line to get a UI which matches the look
        // and feel of the operating system
        skin: 'flat',

        // the application needs to know which view to load first
        initial: config.id_session ? 'menu.html' : 'login.html'

      });

    }, false);

    window.addEventListener("orientationchange", function() {

    }, false);

}());

function load_models () {

	var model_types = ['users_activity', 'clients_report', 'clients_report_pie', 'list', 'docs', 'tasks'];

    var models = {
        models: {}
    };

    model_types.forEach(function (value) {
    	eval ("models.models." + value + " = get_" + value + "_model ()")
    });
    
    return models;
};

function swipe_menu (e) {
	if (e.direction === 'right') {
        window.location.hash = "#menu.html"
    }
}

function swipe_docs_menu (e) {
	if (e.direction === 'right') {
        window.location.hash = "#view/docs_menu.html"
    }    
}

 function swipe_users_activity (e) {
	if (e.direction === 'right' && window.location.hash === "#view/reports/users_activity_chart.html") {
    	window.location.hash = "#view/reports_menu.html"
	} else {
        window.location.hash = "#view/reports/users_activity_chart.html"
	}
	if (e.direction === 'left') {
        window.location.hash = "#view/reports/users_activity_data.html"
    }
 };

 function swipe_clients_report_pie (e) {
	if (e.direction === 'right' && window.location.hash === "#view/reports/clients_report_pie_chart.html") {
    	window.location.hash = "#view/reports_menu.html"
	} else {
        window.location.hash = "#view/reports/clients_report_pie_chart.html"
	}         
	if (e.direction === 'left') {
        window.location.hash = "#view/reports/clients_report_pie_data.html"
    }
 };

 function swipe_clients_report (e) {
	if (e.direction === 'right' && window.location.hash === "#view/reports/clients_report_chart.html") {
    	window.location.hash = "#view/reports_menu.html"
	} else {
        window.location.hash = "#view/reports/clients_report_chart.html"
	}         
	if (e.direction === 'left') {
        window.location.hash = "#view/reports/clients_report_data.html"
    }
 };
