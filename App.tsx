import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import TeacherTraining from './pages/TeacherTraining';
import Verify from './pages/Verify';
import Contact from './pages/Contact';
import { StudentLayout } from './components/layout/StudentLayout';
import StudentDashboard from './pages/student/Dashboard';
import MyCourses from './pages/student/MyCourses';
import MyCertificates from './pages/student/MyCertificates';
import Profile from './pages/student/Profile';
import { TeacherLayout } from './components/layout/TeacherLayout';
import TeacherDashboard from './pages/teacher/Dashboard';
import TrainingModules from './pages/teacher/TrainingModules';
import ClassManagement from './pages/teacher/ClassManagement';
import Earnings from './pages/teacher/Earnings';
import { AdminLayout } from './components/layout/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import UserManagement from './pages/admin/UserManagement';
import CertificateRegistry from './pages/admin/CertificateRegistry';
import CertificateView from './pages/CertificateView';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-white flex flex-col font-sans text-charcoal antialiased selection:bg-mint selection:text-white">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/teacher-training" element={<TeacherTraining />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/contact" element={<Contact />} />

            {/* Student Dashboard Routes */}
            <Route path="/student" element={<StudentLayout />}>
              <Route index element={<StudentDashboard />} />
              <Route path="courses" element={<MyCourses />} />
              <Route path="certificates" element={<MyCertificates />} />
              <Route path="profile" element={<Profile />} />
            </Route>

            {/* Teacher Dashboard Routes */}
            <Route path="/teacher" element={<TeacherLayout />}>
              <Route index element={<TeacherDashboard />} />
              <Route path="training" element={<TrainingModules />} />
              <Route path="classes" element={<ClassManagement />} />
              <Route path="earnings" element={<Earnings />} />
              <Route path="certificates" element={<MyCertificates />} />
            </Route>

            {/* Admin Dashboard Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="users" element={<UserManagement />} />
              <Route path="certificates" element={<CertificateRegistry />} />
            </Route>

            {/* Public Certificate View */}
            <Route path="/certificate/:id" element={<CertificateView />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;