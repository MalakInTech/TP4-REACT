import { useState } from 'react';

function EditArticle({ article, onUpdate }) {
  const [titre, setTitre] = useState(article.titre);
  const [contenu, setContenu] = useState(article.contenu);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate({ ...article, titre, contenu });
    if (titre.trim() === '' || contenu.trim() === '') {
  alert('Tous les champs sont obligatoires');
  return;
}
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={titre}
        onChange={(e) => setTitre(e.target.value)}
      />
      <textarea
        value={contenu}
        onChange={(e) => setContenu(e.target.value)}
      />
      <button type="submit">Modifier</button>
    </form>
  );
}

export default EditArticle;