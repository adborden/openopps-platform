/*---------------------
	:: Task 
	-> controller
---------------------*/
var TaskController = {

	findAllByProject: function (req, res) {
		Task.findByProjectId(req.params.id, function(err, tasks) {
			if (err) return res.send(err, 500);
			res.send({ tasks: tasks });
		});
	}

};
module.exports = TaskController;