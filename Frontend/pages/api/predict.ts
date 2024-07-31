import type { NextApiRequest, NextApiResponse } from 'next';

const dummyData = [
  {
    business: 'General Store',
    location: 'Dwarahat',
    incrementPossible: true
  },
  {
    business: 'Bakery',
    location: 'Dwarahat',
    incrementPossible: true
  },
  {
    business: 'Cosmetics',
    location: 'Bhagalpur',
    incrementPossible: false
  },
  {
    business: 'Stationary Shop',
    location: 'Bhowali',
    incrementPossible: true
  },
  {
    business: 'Dhaba',
    location: 'Noida',
    incrementPossible: false
  },
  {
    business: 'Cosmetics',
    location: 'Bhagalpur',
    incrementPossible: false
  },
  {
    business: 'Mobile Accessories',
    location: 'Dwarahat',
    incrementPossible: true
  },
  {
    business: 'Icecream Vendor',
    location: 'Nainital',
    incrementPossible: true
  },
  {
    business: 'Cosmetics',
    location: 'Moradabad',
    incrementPossible: false
  },
  {
    business: 'Cosmetics',
    location: 'Raniganj',
    incrementPossible: true
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { business, location } = req.body;
    console.log('Received data:', { business, location }); // Add this line to debug

    const match = dummyData.find(data => data.business === business && data.location === location);
    if (match) {
      res.status(200).json({ message: match.incrementPossible ? 'Yes, you can increase your income! Please subscribe for the detailed explanation' : 'No, it may be difficult to increase your income.' });
    } else {
      res.status(200).json({ message: 'No data available for your business or location.' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
