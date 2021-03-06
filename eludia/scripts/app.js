var CLICK_TAP = false;

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
        CLICK_TAP = true;
	}
	if (e.direction === 'left') {
        window.location.hash = "#view/reports/users_activity_data.html"
        CLICK_TAP = true;
    }
 };

 function swipe_clients_report_pie (e) {
	if (e.direction === 'right' && window.location.hash === "#view/reports/clients_report_pie_chart.html") {
    	window.location.hash = "#view/reports_menu.html"
	} else {
        window.location.hash = "#view/reports/clients_report_pie_chart.html"
        CLICK_TAP = true;
	}         
	if (e.direction === 'left') {
        window.location.hash = "#view/reports/clients_report_pie_data.html"
        CLICK_TAP = true;
    }
 };

function swipe_clients_report (e) {
	if (e.direction === 'right' && window.location.hash === "#view/reports/clients_report_chart.html") {
    	window.location.hash = "#view/reports_menu.html"
	} else {
        window.location.hash = "#view/reports/clients_report_chart.html"
        CLICK_TAP = true;
	}         
	if (e.direction === 'left') {
        window.location.hash = "#view/reports/clients_report_data.html"
        CLICK_TAP = true;
    }
 };

function reloadBotMenu(title, descriprion) {
    $("#bottom-menu #fade-out-right-pnl #page-title #text").text(title);
    $("#title #fade-in-up-pnl .title").html(title + "<br><span class=\"description\">"+ descriprion + "</span>");
    $('#btn-show-menu').css("background-image", "url(styles/images/btn_show_bg.png)");
    showMenu=false;
    $("#bottom-menu").show();
}; 

function beforeHide() {
    $('.view-title').width('100%');
    $('.view-title').height('100%');
    $("#bottom-menu").hide();
}

function onFooterTapSelect(e) {
    CLICK_TAP = true;
}

function beforeHidePageWithTap() {
    if (CLICK_TAP) {
        $('.view-title').width('100%');
        $('.view-title').height('100%');
        $('#btn-show-menu').css("background-image", "url(styles/images/btn_show_bg.png)");
        showMenu=false;
        CLICK_TAP = false;
    } else {
        beforeHide();
    }
}