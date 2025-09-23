import * as reviewsServices from "../services/reviewsServices.js";

// TODO: lister les critiques d'un film
export const listReviews = async (req, res) => {
  try {
    const reviews = await reviewsServices.listReviewsByFilmId(req.params.id);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// TODO: créer une critique liée à un film
export const createReview = async (req, res) => {
  try {
    const review = await reviewsServices.createReview(req.params.id, req.body);
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// TODO: supprimer une critique
export const deleteReview = async (req, res) => {
  try {
    const review = await reviewsServices.deleteReview(req.params.id);
    res.status(200).json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
