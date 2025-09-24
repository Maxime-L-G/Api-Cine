// TODO: écrire les requêtes SQL et la logique
import { pool } from "../db.js";
export async function listFilms({ limit = 50, offset = 0 } = {}) {
  const { rows } = await pool.query(
    "SELECT * FROM films ORDER BY id LIMIT $1 OFFSET $2", [limit, offset]
  );
  return rows;
}
export async function getFilmById(id) {
  const { rows } = await pool.query("SELECT * FROM films WHERE id = $1", [id]);
  return rows[0];
}
export async function createFilm({ title, director, year, genre }) {
  const { rows } = await pool.query(
    "INSERT INTO films (title, director, year, genre) VALUES ($1, $2, $3, $4) RETURNING *", [title, director, year, genre]
  );
  return rows[0];
}
export async function updateFilm(
  id,
  { title, director, year, genre }
) {
  const { rows } = await pool.query(
    "UPDATE films SET title=$1, director=$2, year=$3, genre=$4 WHERE id=$5 RETURNING *", [title, director, year, genre, id],
  );
  return rows[0];
}
export async function deleteFilm(id) {
  const { rows } = await pool.query(
    "DELETE FROM films WHERE id=$1 RETURNING *",[id],
  );
  return rows[0];
}
