import { FaHeart } from "../icons";
import { profile } from "../../data/profile";
import { useISTClock } from "../../hooks/useISTClock";

export function Footer() {
  const time = useISTClock();
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="footer-quote">“Keep learning. Keep building.”</p>
        <p className="footer-made">
          Built with care <FaHeart className="footer-heart" aria-label="love" />
        </p>
        <div className="footer-bottom">
          <span className="footer-copyright">
            {new Date().getFullYear()}. {profile.displayName}
          </span>
          <span className="footer-visitors">{time} IST</span>
        </div>
      </div>
    </footer>
  );
}
