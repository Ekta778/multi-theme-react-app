
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then(res => setProducts(res.data));
  }, []);

  return (
    <div>
      <h1>Home</h1>
      <p>Sample product list:</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map(product => (
          <div key={product.id} className="p-4 border rounded shadow">
            <img src={product.image} alt={product.title} className="h-20 mx-auto" />
            <h2 className="text-sm font-semibold">{product.title}</h2>
            <p>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
