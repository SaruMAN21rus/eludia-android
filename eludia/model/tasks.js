function get_tasks_model () {
	var model = {
    	title: "ЗАДАЧИ (На исполнение)",
    	ds: new kendo.data.DataSource({
			transport: {
            	read: {
                    url: config.host + "/?type=tasks&json=execute&sid=" + config.id_session,
					dataType: "json"
				}
			}
    	})
    };
    
    model.ds.read();
    
    return model;
}