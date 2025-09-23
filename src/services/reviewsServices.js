import { pool } from "../db.js";
export async function listReviewsByFilmId(
  filmId,
  { limit = 50, offset = 0 } = {}
) {
  const { rows } = await pool.query(
    "SELECT * FROM reviews WHERE film_id = $1 LIMIT $2 OFFSET $3",
    [filmId, limit, offset]
  );
  return rows;
}
export async function createReview(filmId, { author, rating, comment }) {
  const { rows } = await pool.query(
    "INSERT INTO reviews (film_id, author, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *",
    [filmId, author, rating, comment]
  );
  return rows[0];
}
export async function deleteReview(id) {
  const { rows } = await pool.query(
    "DELETE FROM reviews WHERE id = $1 RETURNING *",
    [id]
  );
  return rows[0];
}
