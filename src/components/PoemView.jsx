import { useParams, Link } from 'react-router-dom';
import { poems } from '../data/poems';
import { Helmet } from 'react-helmet-async';
import { useEffect } from 'react';

export default function PoemView() {
  const { id } = useParams();
  const poem = poems.find(p => p.id === id);

  useEffect(() => {
    if (poem) document.title = poem.title + ' | Bleeding Eyes';
    return () => { document.title = "Bleeding Eyes"; }
  }, [poem]);

  if (!poem) return <p>Poem not found.</p>;

  const siteUrl = `https://bleeding-eyes.vercel.app/poem/${poem.id}`;
  const previewImage = "spiderpng.png"; 

  return (
    <div>
      <Helmet>
        <title>{poem.title} | Bleeding Eyes</title>
        <meta name="description" content={poem.content.slice(0,150)} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${poem.title} | Bleeding Eyes`} />
        <meta property="og:description" content={poem.content.slice(0,150)} />
        <meta property="og:image" content={previewImage} />
        <meta property="og:url" content={siteUrl} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={`${poem.title} | Bleeding Eyes`} />
        <meta property="twitter:description" content={poem.content.slice(0,150)} />
        <meta property="twitter:image" content={previewImage} />
      </Helmet>

      <Link to="/" className="back-link">← Back</Link>
      <h2>{poem.title}</h2>
      <div className="poem-content" dangerouslySetInnerHTML={{ __html: poem.content }} />
    </div>
  );
}
