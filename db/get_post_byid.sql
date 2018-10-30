SELECT *
FROM posts_helo
JOIN users_helo ON author_id=users_helo.id
WHERE post_id = $1;