	names = ['SnappingTurtle Inc.', 'FutureTech', 'The Junkyard', 'A Really Nice Place to Work']
	phones = ['(801)555-1234', '(678)912-3456', '(234)345-4567']
	websites = ['www.snappingturtle.com', 'www.futuretech.com', 'www.thejunkyard.com', 'www.areallyniceplacetowork.com']
	logo_links = [
		'http://vectorlogofree.com/wp-content/uploads/2013/03/mercedes-benz-automotive-vector-logo.png',
		'http://vectorlogofree.com/wp-content/uploads/2012/12/girl-scouts-logo-vector.png',
		'http://vectorlogofree.com/wp-content/uploads/2013/01/caterpillar-.eps-logo-vector.png',
		'http://vectorlogofree.com/wp-content/uploads/2012/10/vivo-logo-vector-01.png',
		'http://vectorlogofree.com/wp-content/uploads/2012/11/roche-logo-vector.png'
	]
	logo_links.shuffle!

Company.create(name: 'Ryan Horlacher Technologies', website: 'www.ryanhorlachertechnologies.com', 
	front_desk_phone: phones[0], image_link: logo_links.last)

names.each_with_index do |name, index|
Company.create(name: name, website: websites[index], front_desk_phone: phones.sample, image_link: logo_links[index])

end
