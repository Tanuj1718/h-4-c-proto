import BusinessForm from '@/components/BusinessForm';
import { useState } from 'react';

const Home = () => {
  const [result, setResult] = useState<string | null>(null);

  const handleSubmit = async (formData: any) => {
    console.log('Form submitted:', formData); // Add this line to debug
    const response = await fetch('api/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    console.log('API response:', data); // Add this line to debug
    setResult(data.message);
  };

  return (
    <div>
      <BusinessForm onSubmit={handleSubmit} />
      {result && <p className=''>{result}</p>}
    </div>
  );
};

export default Home;
