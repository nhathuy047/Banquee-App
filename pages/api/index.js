import axios from 'axios';

export const getBlog =  async (req, res) => {
  try {
    const response = await axios.get('https://c2t-api.onrender.com/interior/news');
    const data = response.data;

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Lỗi khi gọi API từ Postman' });
  }
};
