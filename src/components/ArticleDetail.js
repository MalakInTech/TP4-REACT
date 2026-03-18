import { useParams, Link } from 'react-router-dom';
import EditArticle from './EditArticle';
import { useState } from 'react';

function ArticleDetail({ articles }) {
  const { id } = useParams();
  const [editMode, setEditMode] = useState(false);
  const article = articles.find((a) => a.id.toString() === id);

  if (!article) 
    return <p>Article non trouvé. </p>
;

  return (
  <div>
    {editMode ? (
      <EditArticle article={article} onUpdate={(updated) => {
        alert("Article modifié !");
        setEditMode(false);
      }} />
    ) : (
      <>
        <div className="card p-3 m-3">
  <h3>{article.titre}</h3>
  <p>{article.contenu}</p>
</div>
        <button className="btn btn-warning me-2" onClick={() => setEditMode(true)}>Modifier</button>
<Link to='/'><button className="btn btn-secondary">Retour</button></Link>
      </>
    )}
  </div>
);
}

export default ArticleDetail;