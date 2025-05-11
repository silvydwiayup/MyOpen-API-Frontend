import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './List_Notification.css';

const List_Notification = () => {
  const [notifications] = useState([
    { message: 'Project A has been updated successfully.', time: '2 minutes ago' },
    { message: 'You received a new message from admin.', time: '10 minutes ago' },
    { message: 'Project B deadline is tomorrow.', time: '1 hour ago' },
  ]);

  return (
    <div className="section-list-notification">
      <div className="container-title-and-path-list-notification">
        <div className="container-title-list-notification">
          <h2>List-Notification</h2>
        </div>
        <div className="container-path-list-notification">
          <ul className="unordered-list-list-notification">
            <li className="list-list-notification">Users</li>
            <li className="list-list-notification"><span>/</span> project</li>
            <li className="list-list-notification"><span>/</span> list-notification</li>
          </ul>
        </div>
      </div>

      <div className="container-list-notification">
        <div className="list-notification-header">
          <button className="btn-view-all-list-notification">View All</button>
        </div>

        <div className="notification-list">
          <AnimatePresence>
            {notifications.map((notif, index) => (
              <motion.div
                key={index}
                className="list-notification-wrapper"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
              >
                <div className="list-notification-item">
                  <div className="list-notification-text">
                    <p className="list-notification-message">{notif.message}</p>
                    <span className="list-notification-time">{notif.time}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default List_Notification;
