CREATE TABLE galleryItems (
	ID SERIAL PRIMARY KEY,
	path varchar(200) NOT NULL,
	description varchar(120) NOT NULL,
	likes integer default 0
);
INSERT INTO galleryItems ("path", "description")
VALUES 
('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.'),
('images/Millie.png', 'Millie the dog, My parents yorkie. She''s got some dachshund in her so I like to call her a yorkie-limo'),
('images/LadyTheDog.png', 'This is a baby photo of the late Lady the dog. She passed away in march of 2020, but is still the best doggo');
