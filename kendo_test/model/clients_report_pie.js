function get_clients_report_pie_model () {
	var model = {
    	title: "ПРОДАЖИ ПО БРЕНДАМ ЗА 2013 ГОД",
    	ds: new kendo.data.DataSource({
			transport: {
            	read: {
					url: config.host + "/?type=clients_report&__only_json=1&voc_sales_brand_dinamic=1&wihtout_sum=1&id=1&sid=" + config.id_session,
					dataType: "json"
				}
			}
    	})
    };
    
    model.ds.read();
    
    return model;
}