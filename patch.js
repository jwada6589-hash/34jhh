const fs = require('fs');
const file = 'user-app/src/App.tsx';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('import FavoritesView')) {
  content = content.replace(
    "import AuthModal from './components/AuthModal';",
    "import AuthModal from './components/AuthModal';\nimport FavoritesView from './components/FavoritesView';"
  );
}

const target = ") : currentView === 'offers' ? (";
const replacement = `) : currentView === 'favorites' ? (
            <FavoritesView 
              favorites={favorites} 
              onProductClick={openProduct}
              onAddToCart={addToCart}
              toggleFavorite={toggleFavorite}
            />
          ) : currentView === 'offers' ? (`

if (!content.includes("currentView === 'favorites'")) {
  content = content.replace(target, replacement);
}

fs.writeFileSync(file, content, 'utf8');
