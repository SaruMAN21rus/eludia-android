function get_users_activity_model () {
	return {
    	title: "Выполнение плана продаж",
    	ds: new kendo.data.DataSource({
			transport: {
            	read: {
					url: config.host + "/?type=users_activity&__only_json=1&id=1&sid=" + config.id_session,
					dataType: "json"
				}
			}
    	})
    };
}