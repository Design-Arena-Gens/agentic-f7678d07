import { useState } from 'react'
import Head from 'next/head'

export default function Home() {
  const [category, setCategory] = useState('electronics')
  const [minPrice, setMinPrice] = useState(5000)
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const categories = {
    electronics: 'Electronics',
    jewelry: 'Jewelry & Watches',
    appliances: 'Home Appliances',
    furniture: 'Furniture',
    watches: 'Luxury Watches',
    cameras: 'Cameras & Photography',
    computers: 'Computers & Laptops',
    audio: 'Audio Equipment'
  }

  const handleSearch = async () => {
    setLoading(true)

    // Simulate API call with mock expensive items
    setTimeout(() => {
      const mockResults = generateMockResults(category, minPrice)
      setResults(mockResults)
      setLoading(false)
    }, 1500)
  }

  const generateMockResults = (cat, price) => {
    const items = {
      electronics: [
        { name: 'Samsung 98" QLED 8K Smart TV', price: 19999, rating: 4.7, reviews: 234, image: '📺' },
        { name: 'Sony A7R V Mirrorless Camera Bundle', price: 8499, rating: 4.9, reviews: 187, image: '📷' },
        { name: 'LG OLED 88" 8K TV', price: 24999, rating: 4.8, reviews: 156, image: '📺' },
        { name: 'Canon EOS R3 Professional Kit', price: 12999, rating: 4.9, reviews: 203, image: '📷' }
      ],
      jewelry: [
        { name: '3.5 Carat Diamond Engagement Ring', price: 45000, rating: 4.9, reviews: 89, image: '💍' },
        { name: 'Platinum Tennis Bracelet 10ct', price: 28500, rating: 4.8, reviews: 67, image: '💎' },
        { name: 'Emerald Cut Diamond Necklace', price: 38900, rating: 4.9, reviews: 54, image: '💎' },
        { name: 'Ruby & Diamond Ring Set', price: 15600, rating: 4.7, reviews: 112, image: '💍' }
      ],
      appliances: [
        { name: 'Sub-Zero 48" Built-In Refrigerator', price: 14999, rating: 4.8, reviews: 145, image: '🧊' },
        { name: 'Wolf 48" Dual Fuel Range', price: 12899, rating: 4.9, reviews: 198, image: '🔥' },
        { name: 'Miele Complete C3 Vacuum System', price: 5499, rating: 4.7, reviews: 267, image: '🌀' },
        { name: 'Viking Professional Dishwasher', price: 6799, rating: 4.6, reviews: 134, image: '💧' }
      ],
      furniture: [
        { name: 'Herman Miller Eames Lounge Chair', price: 7995, rating: 4.9, reviews: 432, image: '🪑' },
        { name: 'Restoration Hardware Cloud Sofa', price: 9500, rating: 4.8, reviews: 289, image: '🛋️' },
        { name: 'Handcrafted Italian Leather Sectional', price: 15999, rating: 4.7, reviews: 167, image: '🛋️' },
        { name: 'Custom Walnut Dining Table Set', price: 8900, rating: 4.8, reviews: 203, image: '🪵' }
      ],
      watches: [
        { name: 'Rolex Submariner Date', price: 14950, rating: 4.9, reviews: 423, image: '⌚' },
        { name: 'Omega Seamaster Planet Ocean', price: 9800, rating: 4.8, reviews: 356, image: '⌚' },
        { name: 'TAG Heuer Carrera Calibre', price: 7200, rating: 4.7, reviews: 289, image: '⌚' },
        { name: 'Breitling Navitimer Chronograph', price: 11500, rating: 4.8, reviews: 267, image: '⌚' }
      ],
      cameras: [
        { name: 'RED Komodo 6K Cinema Camera', price: 9995, rating: 4.9, reviews: 87, image: '🎥' },
        { name: 'Hasselblad H6D-400c MS', price: 47995, rating: 4.9, reviews: 34, image: '📸' },
        { name: 'Phase One XF IQ4 150MP', price: 51990, rating: 4.9, reviews: 28, image: '📸' },
        { name: 'Leica M11 with Lenses Bundle', price: 14999, rating: 4.8, reviews: 156, image: '📷' }
      ],
      computers: [
        { name: 'Apple Mac Pro with Pro Display XDR', price: 22999, rating: 4.8, reviews: 234, image: '💻' },
        { name: 'Dell Precision 7920 Tower Workstation', price: 15499, rating: 4.7, reviews: 189, image: '🖥️' },
        { name: 'HP Z8 G4 Workstation Maxed Config', price: 18900, rating: 4.8, reviews: 167, image: '🖥️' },
        { name: 'Lenovo ThinkStation P920', price: 12599, rating: 4.7, reviews: 201, image: '💻' }
      ],
      audio: [
        { name: 'McIntosh MC901 Dual Mono Amplifier', price: 25000, rating: 4.9, reviews: 67, image: '🔊' },
        { name: 'Bowers & Wilkins 800 D4 Speakers', price: 35000, rating: 4.9, reviews: 89, image: '🔊' },
        { name: 'Sennheiser HE 1 Headphone System', price: 59950, rating: 5.0, reviews: 23, image: '🎧' },
        { name: 'KEF Blade Two Meta Floor Speakers', price: 28000, rating: 4.8, reviews: 54, image: '🔊' }
      ]
    }

    return items[cat].filter(item => item.price >= price)
  }

  return (
    <>
      <Head>
        <title>Amazon Expensive Items Search</title>
        <meta name="description" content="Search for expensive items on Amazon" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="container">
        <header>
          <h1>🔍 Amazon Luxury Search</h1>
          <p>Discover premium and expensive items</p>
        </header>

        <div className="search-panel">
          <div className="input-group">
            <label>Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              {Object.entries(categories).map(([key, label]) => (
                <option key={key} value={key}>{label}</option>
              ))}
            </select>
          </div>

          <div className="input-group">
            <label>Minimum Price: ${minPrice.toLocaleString()}</label>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
            />
          </div>

          <button onClick={handleSearch} disabled={loading}>
            {loading ? 'Searching...' : 'Search Expensive Items'}
          </button>
        </div>

        {loading && (
          <div className="loading">
            <div className="spinner"></div>
            <p>Finding luxury items...</p>
          </div>
        )}

        {!loading && results.length > 0 && (
          <div className="results">
            <h2>Found {results.length} Premium Items</h2>
            <div className="grid">
              {results.map((item, index) => (
                <div key={index} className="card">
                  <div className="item-image">{item.image}</div>
                  <div className="item-details">
                    <h3>{item.name}</h3>
                    <div className="price">${item.price.toLocaleString()}</div>
                    <div className="rating">
                      <span className="stars">{'⭐'.repeat(Math.floor(item.rating))}</span>
                      <span className="rating-text">{item.rating} ({item.reviews} reviews)</span>
                    </div>
                    <a
                      href={`https://www.amazon.com/s?k=${encodeURIComponent(item.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-button"
                    >
                      View on Amazon →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {!loading && results.length === 0 && category && (
          <div className="no-results">
            <p>Click "Search Expensive Items" to see premium products</p>
          </div>
        )}
      </div>
    </>
  )
}
