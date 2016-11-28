json.companies @companies do |company|
	json.id company.id
	json.name company.name
	json.frontDeskPhone company.front_desk_phone
	json.imageLink company.image_link
	json.website company.website
end