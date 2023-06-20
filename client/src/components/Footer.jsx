import { FaRegCopyright } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <>
      <div className="footer-wrapper">
        <div className="footer-top">
          <h3 className="bottom-logo">PlantPower</h3>
          <div className="footer-right">
            <FaInstagram className="footer-icons" />
            <FaTwitter className="footer-icons" />
            <FaYoutube className="footer-icons" />
          </div>
        </div>
        <div className="footer-bottom">
          <ul className="footer-ul">
            <li className="footer-terms">Terms</li>
            <li className="footer-list">Privacy Policy</li>
            <li className="footer-list">About Us</li>
          </ul>
          <FaRegCopyright />
          <span>2023 PlantPower</span>
        </div>
      </div>
    </>
  );
}
