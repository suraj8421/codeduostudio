import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center gap-2">
          <p className="font-semibold text-white">CodeDuo Studio</p>
          <p className="text-xs text-white-50">Building digital products that matter.</p>
        </div>

        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <img src={socialImg.imgPath} alt={socialImg.name} />
            </div>
          ))}
        </div>

        <div className="flex flex-col justify-center gap-2 md:items-end items-center">
          <p className="text-center md:text-end text-white-50 text-sm">
            © {new Date().getFullYear()} CodeDuo Studio. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-white-50">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;