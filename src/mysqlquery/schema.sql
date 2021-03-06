/* IMPORTANT:
Turns out that it is not good practice to use a database with client-side
Javascript, so I am scrapping the idea of maintaining a database to
store a cipher history and will resort to a traditional data structure
instead. However, I will be keeping this code to demo some of my efforts
of learning mysql while creating this project. There is not a lot of code 
since I have not taken any formal courses (as of FALL 2018) on databases, but
practicing based on tutorials have helped gain a firm grasp on how to
manage a database such the one below. So enjoy what little there is to see and
I hope you appreciate my effort in learning databases :)
*/

CREATE TABLE messages (
	id INT PRIMARY KEY AUTO_INCREMENT,
	technique VARCHAR(20) NOT NULL,
	encrypting TINYINT(1) NOT NULL,
	settings VARCHAR(100) NOT NULL,
	time TIMESTAMP NOT NULL,
	message VARCHAR(100)
);