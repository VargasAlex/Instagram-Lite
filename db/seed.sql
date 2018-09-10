-- \c instagramlite

DELETE FROM posts;
DELETE FROM users;

INSERT INTO users (name, img_url)
VALUES ('AlexTrebek', 'https://cdn.vox-cdn.com/thumbor/lyT5R-zBSQYmbEU3VuNMReGBYjg=/139x0:2360x1666/1820x1213/filters:focal(139x0:2360x1666):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/55901233/1_DjIgGy5umBkyltPq77WFdg.0.jpeg');

INSERT INTO users (name, img_url)
VALUES ('JimHalpert', 'https://fandomitis.files.wordpress.com/2016/09/img_3440.png');

INSERT INTO users (name, img_url)
VALUES ('Drake', 'https://foreignpolicyi.org/wp-content/uploads/2018/06/Drake-Scorpion.jpg');

INSERT INTO users (name, img_url)
VALUES ('KevinHart', 'http://apps.startribune.com/blogs/user_images/nealjustin_1517677371_hart3.jpg');

INSERT INTO users (name, img_url)
VALUES ('AmyPoehler', 'https://m.media-amazon.com/images/M/MV5BNDZlNmRhNjQtOTZjZC00YzkwLWFlMDMtNTNiMmVhN2UxMzliXkEyXkFqcGdeQXVyNzcwODE0OTk@._V1_UX214_CR0,0,214,317_AL_.jpg');
