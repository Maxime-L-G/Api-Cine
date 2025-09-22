import * as filmsServices from "../services/filmsServices.js";

// TODO: lister les films
export const listFilms = async (req, res) => {
  try {
    const films = await filmsServices.listFilms();
    res.status(200).json(films);
  } catch (error) {
    res.status(500).json({ error: error.message });
  
  }
}

// TODO: récupérer un film par id

export const getFilm = async (req, res) => {
  try {
    const  films = await filmsServices.getFilmById(req.params.id)
    res.status(200).json(films);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// TODO: créer un film
export const createFilm = async (req, res) => {
  try {
    const films = await filmsServices.createFilm(req.body);
    res.status(201).json(films);  
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}

// TODO: mettre à jour un film
export const updateFilm = async (req, res) => {
  try {
    const films = await filmsServices.updateFilm(req.params.id, req.body);
    res.status(200).json(films);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }

}

// TODO: supprimer un film
export const deleteFilm = async (req, res) => {
  try {
    const films = await filmsServices.deleteFilm(req.params.id);
    res.status(200).json(films);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
