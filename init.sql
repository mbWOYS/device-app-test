-- DROP DATABASE IF EXISTS DEVICE_STORE_DB;
-- CREATE DATABASE DEVICE_STORE_DB;
-- USE db;

CREATE TABLE Devices (
 	deviceId INT,
   	deviceName VARCHAR(255),
   	description VARCHAR(255),
   	price FLOAT(2),
   	totalQty INT,
   	addedToCard INT,
   	PRIMARY KEY (deviceId)
   	);

INSERT INTO Devices (deviceId, deviceName, description, price, totalQty, addedToCard)
VALUES (1,
		'Galaxy S20 FE',
		 'Whether you arere a fan of photography, gaming, or filling your feed with all that inspires you,
		 we put together the ultimate combination of S20 innovation. This is the phone that gives you what you want, to do more of what you love.',
		 599,
		 15,
		 0
		),
		(2,
		 'Galaxy Z Fold2',
		 'Meet the phone that is changing the shape of the future. The world number one foldable,
		 this cutting-edge smartphone puts powerful performance, foldable glass, and an all-day battery all in the palm of your hand.',
		 1999,
		 7,
		 0
		),
		(
		 3,
		 'Q95T QLED Smart 4K TV',
		 'See every detail at any angle. Ultra Viewing Angle gives you the consistent picture,
		 even when sitting off to the side. So every seat is the best one in the house.',
		 2299,
		 5,
		 0
		),
		(
		 4,
		 'iPhone 12 Pro',
		 '5G goes Pro. A14 Bionic rockets past every other smartphone chip. The Pro camera system takes
		 low-light photography to the next level — with an even bigger jump on iPhone 12 Pro Max.
		 And Ceramic Shield delivers four times better drop performance.',
		 1399,
		 10,
		 0
		),
		(
		5,
		'MacBook Pro',
		'With an immersive Retina display, superfast processors, advanced graphics, the largest battery capacity ever
		in a 16-inch MacBook Pro, Magic Keyboard, and massive storage, it is the ultimate pro notebook for the ultimate user.',
		2399,
		13,
		0
		),
		(
		6,
		'Mi Electric Scooter1S',
		'New generation energy recovery system Convert kinetic energy into electrical energy for longer battery life',
		499,
		20,
		0
		),
		(
		7,
		'Redmi Note 9 Pro',
		'Redmi Note 9 Pros ultra high resolution cameras and AI optimizations make sure to keep you prepared to capture fleeting moments at all times.
			Fall in love with taking pictures. With the Redmi Note 9 Pro, the good life is worth remembering.',
		299,
		32,
		0
		),
		(
		8,
		'HUAWEI Freebuds Studio',
		'With a great amount of smart chipsets and sensors built-in, HUAWEI FreeBuds Studio builds up a superior
			noise cancelling system to provide a next-level experience of active noise cancellation (ANC),
			hear-through and call noise cancellation.',
		305,
		18,
		0
		),
		(
		9,
		'HUAWEI WATCH GT 2 Pro',
		'The wear-resistant sapphire watch dial pairs seamlessly with the titanium frame for a lightweight and solid design.
			HUAWEI WATCH GT 2 Pro reveals a refined taste with perfect balance of art and technology.',
		355,
		25,
		0
		);
