import './Top_Navbar.css';
import { FiBell, FiUser, FiSettings, FiLogOut } from 'react-icons/fi';
import { useState, useEffect, useRef } from 'react';

const Top_Navbar = ({ user }) => {
    return <Container_Top_Navbar user={user} />;
  };

const Container_Top_Navbar = () => {
  const [showNotif, setShowNotif] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const notifRef = useRef(null);
  const iconRef = useRef(null);
  const profileRef = useRef(null);

  const notifList = [
    'Kamu punya 2 pesan baru',
    'Sistem akan maintenance malam ini',
    'Proses berhasil dijalankan',
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        notifRef.current &&
        !notifRef.current.contains(event.target) &&
        iconRef.current &&
        !iconRef.current.contains(event.target)
      ) {
        setShowNotif(false);
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setShowProfileMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="top-navbar">
      <div
        className="container-icon"
        onClick={() => setShowNotif(!showNotif)}
        ref={iconRef}
      >
        {notifList.length > 0 && (
          <span className="dot-badge">{notifList.length}</span>
        )}
        <FiBell className="icon" />
      </div>

      {showNotif && (
        <div className="notif-container" ref={notifRef}>
          <p className="notif-header">Notifikasi</p>
          <ul className="notif-list">
            {notifList.map((item, index) => (
              <li key={index} className="notif-item">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div
        className="container-profile"
        onClick={() => setShowProfileMenu(!showProfileMenu)}
        ref={profileRef}
      >
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="profile-img"
        />

        {showProfileMenu && (
          <div className="profile-dropdown">
            <div className="profile-header">
                <img src="https://i.pravatar.cc/60" alt="user" className="dropdown-avatar" />
                <div>
                    <p className="dropdown-email">adamjoe@email.com</p>
                </div>
            </div>

            <ul className="dropdown-menu">
                <li>
                    <FiUser className="menu-icon" />
                    Lihat Profil
                </li>
                <li>
                    <FiSettings className="menu-icon" />
                    Pengaturan
                </li>
                <li>
                    <FiLogOut className="menu-icon" />
                    Logout
                </li>
            </ul>

          </div>
        )}
      </div>
    </div>
  );
};

export default Top_Navbar;
