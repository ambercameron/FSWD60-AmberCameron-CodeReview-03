var teamMembers = [{
		"name": "Fran",
		"email": "fran@index.com",
		"image": "https://cdn2.iconfinder.com/data/icons/female-users/512/11-512.png",
	}, {
		"name": "Bill",
		"email": "bill@index.com",
		"image": "https://cdn2.iconfinder.com/data/icons/male-users-2/512/2-512.png",
	}, {
		"name": "Fritz",
		"email": "fritz@index.com",
		"image": "https://cdn2.iconfinder.com/data/icons/female-users/512/1-512.png",
	}]

var i = 0
	for (i = 0; i < teamMembers.length; i++) 
	{ 
		document.getElementById("team").innerHTML += "<table><tr><th><b>Name</b></th><td>" + teamMembers[i].name + 
		"</td></tr><tr><th><b>Email Address</b></th><td>" + teamMembers[i].email + 
		"</td></tr><tr><td colspan=\"2\"><img src=\"" + teamMembers[i].image + "\"></td></tr></table>"}