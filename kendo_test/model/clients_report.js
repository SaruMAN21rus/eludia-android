function get_clients_report_model () {
	return {
    	title: "Динамика продаж по брендам",
    	ds: new kendo.data.DataSource({
			transport: {
            	read: {
					url: config.host + "/?type=clients_report&__only_json=1&id=1&sid=" + config.id_session,
					dataType: "json"
				}
			}
    	})
    };
}