describe('function getInformation', function(){
	it('Find billy bob', function(){
		var person = getInformation("Billy","Bob");
		expect(person[0].id).toEqual("272822514");
	})
})