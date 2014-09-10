function get_list_model () {
	return {
    	title: "Добро пожаловать" + (config.user_name !== undefined ? (",<br>" + config.user_name) : ""),
    };
    
}