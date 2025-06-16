'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Item {
  _id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export default function ItemsPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [newItemName, setNewItemName] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch('http://localhost:3001/items', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      setItems(data);
    } catch (err) {
      console.error('Error fetching items:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch items');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newItemName.trim()) return;

    try {
      setIsSubmitting(true);
      setError(null);
      const response = await fetch('http://localhost:3001/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newItemName }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const newItem = await response.json();
      setItems([...items, newItem]);
      setNewItemName('');
    } catch (err) {
      console.error('Error creating item:', err);
      setError(err instanceof Error ? err.message : 'Failed to create item');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading items...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Items</h1>
        <Link 
          href="/"
          className="text-blue-500 hover:text-blue-600"
        >
          Back to Home
        </Link>
      </div>

      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg text-red-600">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="mb-8">
        <div className="flex gap-2">
          <input
            type="text"
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            placeholder="Enter item name"
            className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            disabled={isSubmitting}
          />
          <button
            type="submit"
            className={`px-4 py-2 rounded-lg transition-colors ${
              isSubmitting
                ? 'bg-blue-300 cursor-not-allowed'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Adding...' : 'Add Item'}
          </button>
        </div>
      </form>

      <div className="space-y-4">
        {items.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No items found. Add your first item above!
          </div>
        ) : (
          items.map((item) => (
            <div
              key={item._id}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow"
            >
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p className="text-sm text-gray-500">
                Created: {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
} 