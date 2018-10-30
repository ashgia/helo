SELECT *
FROM posts_helo
JOIN users_helo users ON users_helo.user_id = posts_helo.user_id
WHERE post_id = $1;