import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3" 
    style={{
      position: 'fixed',
      // position: 'relative',
      bottom: 0,
      width: '100%'
    }}>
      <div className="container">
        <span>E-comm Dashboard</span>
      </div>
    </footer>
  );
};

export default Footer;
