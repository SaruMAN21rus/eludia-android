function get_docs_model () {
	var model = {
    	title: "ДОГОВОРА",
    	ds: new kendo.data.DataSource({
			transport: {
            	read: {
                    url: config.host + "/?type=docs&json=docs&sid=" + config.id_session,
					dataType: "json"
				}
			}
    	})
    };
    
    model.ds.read();
    
    return model;
}