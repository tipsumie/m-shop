// pages/api/getData.js
import axios from 'axios';
const API_URL = process.env.API_URL;

export default async function getProducts(req, res) {
  let { page } = req.query;
  try {
    const response = await axios.get(`${API_URL}/?page=${page}&limit=20`);
    res.status(200).json(response.data.results);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong.' });
  }
}
