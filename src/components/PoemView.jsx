import { useParams, Link } from 'react-router-dom';
import { poems } from '../data/poems';
import { useEffect } from 'react';

export default function PoemView() {
  const { id } = useParams();
  const poem = poems.find(p => p.id === id);

  useEffect(() => {
    if (poem) document.title = poem.title + ' | Bleeding Eyes';
    return () => { document.title = "Bleeding Eyes"; }
  }, [poem]);

  if (!poem) return <p>Poem not found.</p>;

  return (
    <div>
      <Link to="/" className="back-link">← Back</Link>
      <h2>{poem.title}</h2>
      <div className="poem-content" dangerouslySetInnerHTML={{ __html: poem.content }}></div>
    </div>
  );
}
