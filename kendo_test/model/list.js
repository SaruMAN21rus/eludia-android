function get_list_model () {
	return {
    	title: "Добро пожаловать" + (config.user_name !== undefined ? (", " + config.user_name) : ""),
    };
    
}