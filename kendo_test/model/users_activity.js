function get_users_activity_model () {
	var model = {
    	title: "ВЫПОЛНЕНИЕ ПЛАНА ПРОДАЖ",
    	ds: new kendo.data.DataSource({
			transport: {
            	read: {
					url: config.host + "/?type=users_activity&__only_json=1&id=1&wihtout_sum=1&sid=" + config.id_session,
					dataType: "json"
				}
			}
    	})
    };

    model.ds.read();

    return model;
}