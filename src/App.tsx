import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from './layouts/Layout';
import { HomePage } from './pages/HomePage';
import { HubPage } from './pages/HubPage';
import { HeroesPage } from './pages/HeroesPage';
import { LeaderboardPage } from './pages/LeaderboardPage';
import { StorePage } from './pages/StorePage';
import { SettingsPage } from './pages/SettingsPage';
import { GetStartedPage } from './pages/GetStartedPage';
import { ComponentsPage } from './pages/ComponentsPage';

// Use basename for GitHub Pages deployment
const basename = import.meta.env.BASE_URL;

function App() {
  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="hub" element={<HubPage />} />
          <Route path="heroes" element={<HeroesPage />} />
          <Route path="leaderboard" element={<LeaderboardPage />} />
          <Route path="store" element={<StorePage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="get-started" element={<GetStartedPage />} />
          <Route path="components" element={<ComponentsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
