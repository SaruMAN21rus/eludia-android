function get_clients_report_pie_model () {
	return {
    	title: "Продажи по брендам за 2013 год",
    	ds: new kendo.data.DataSource({
			transport: {
            	read: {
					url: config.host + "/?type=clients_report&__only_json=1&wihtout_sum=1&id=1&sid=" + config.id_session,
					dataType: "json"
				}
			}
    	})
    };
}