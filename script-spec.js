describe('function getInformation', function(){
	it('Find billy bob', function(){
		var person = getInformation("Billy","Bob");
		expect(person[0].id).toEqual("272822514");
	});
});

describe('function concatInfo', function(){
	it('concats, stringifies, and return the information results of an array', function(){
		var arr = [
			{   "id": "272822514",
				"firstName": "Billy",
				"lastName": "Bob",
				"gender": "male",
				"dob": "1/18/1949",
				"height": 71,
				"weight": 175,
				"eyeColor": "brown",
				"occupation": "programmer",
				"parents": [],
				"currentSpouse": 401222887
			}
		];
		var output = concatInfo(arr);
		expect(output).toEqual("<br>ID: 272822514<br> First Name: Billy Last Name: Bob<br> Gender: male<br> Date of Birth: 1/18/1949<br> Height: 71 <br>Weight: 175 <br>Eye Color: brown <br>Occupation: programmer <br>Parents:  <br>Current Spouse: 401222887");
	});
});


describe('function getChildren', function(){
	it('Iteratively finds the children of the people we are looking for', function(){
	
		var children = getChildren([{"id": "313997561"}]);
		expect(children[0].id).toEqual("313998000")

	});
});




