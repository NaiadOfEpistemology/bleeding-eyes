import { Link } from 'react-router-dom';
import { poems } from '../data/poems';
import { useState } from 'react';

export default function PoemsList() {
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = poems.filter(p =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search poems..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-box"
      />
      <div className="card-grid">
        {filtered.map(poem => (
          <Link to={`/poem/${poem.id}`} key={poem.id} className="card">
            <h2>{poem.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}
