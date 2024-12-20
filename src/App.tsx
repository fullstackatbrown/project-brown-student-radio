import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import Navbar from './components/Navbar'; // Import the Navbar component
import Footer from './components/Footer'; // Import the Footer component
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import SchedulePage from './pages/Schedule';
import ContactPage from './pages/Contact';
import DJProfilesPage from './pages/DJProfiles';
import BlogPost from './pages/BlogPost';
import BlogPostList from './pages/BlogPostList';

const App: React.FC = () => {
  return (
    <Router>
      <div style={styles.appContainer}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/schedule" element={<SchedulePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/DJProfiles" element={<DJProfilesPage />} />
          <Route path="/blog" element={<BlogPostList />} />
          <Route path="/blog/:postID" element={<BlogPost />} />
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
};

const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    minHeight: '100vh',
    paddingBottom: '60px', // Add padding to avoid overlap with navbar
  },
  contentContainer: {
    flex: 1,
  },
};


export default App;