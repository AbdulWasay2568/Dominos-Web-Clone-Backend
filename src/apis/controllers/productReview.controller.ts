import { Request, Response } from 'express';
import * as reviewService from '../services/productReview.service';

export const createProductReview = async (req: Request, res: Response) => {
  try {
    const review = await reviewService.createReview(req.body);
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create review' });
  }
};

export const getAllProductReviews = async (_req: Request, res: Response) => {
  try {
    const reviews = await reviewService.getAllReviews();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
};

export const getProductReviewById = async (req: Request, res: Response) => {
  try {
    const review = await reviewService.getReviewById(Number(req.params.id));
    if (!review) return res.status(404).json({ error: 'Review not found' });
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch review' });
  }
};

export const updateProductReview = async (req: Request, res: Response) => {
  try {
    const review = await reviewService.updateReview(Number(req.params.id), req.body);
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update review' });
  }
};

export const deleteProductReview = async (req: Request, res: Response) => {
  try {
    await reviewService.deleteReview(Number(req.params.id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete review' });
  }
};
