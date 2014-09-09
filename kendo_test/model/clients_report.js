function get_clients_report_model () {
	var model = {
    	title: "ДИНАМИКА ПРОДАЖ ПО БРЕНДАМ",
    	ds: new kendo.data.DataSource({
			transport: {
            	read: {
					url: config.host + "/?type=clients_report&__only_json=1&id=1&voc_sales_year_dinamic=1&sid=" + config.id_session,
					dataType: "json",
                    cache: false
				}
			}
    	}),
    	voc_groups: new kendo.data.DataSource({
			transport: {
            	read: {
					url: config.host + "/?type=clients_report&__only_json=1&id=1&voc_groups=1&sid=" + config.id_session,
					dataType: "json",
                    cache: false
				}
			}
    	})
    };
    
    model.ds.read();
    model.voc_groups.read();
    
    return model;
}