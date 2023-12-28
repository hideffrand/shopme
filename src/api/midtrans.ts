import axios from 'axios';

export const getToken = async () => {
  try {
    const res = await axios.post('http://127.0.0.1:5000/transaction', {}, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log(res.data);
  } catch (error) {
    console.error('Error:', error);
  }
};
