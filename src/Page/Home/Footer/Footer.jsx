import { CiInstagram, CiTwitter, CiYoutube } from "react-icons/ci";
import { FaFacebook, FaGoogle } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10">
                <nav>
                    <h6 className="footer-title">Hobbycue</h6>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Our Services</a>
                    <a className="link link-hover">Work With Us</a>
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">Contact Us</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover">Listing</a>
                    <a className="link link-hover">Blog Posts</a>
                    <a className="link link-hover">Shop/Store</a>
                    <a className="link link-hover">Community</a>
                </nav>

                <form>
                    <h6 className="footer-title">Social Media</h6>
                    <fieldset className="form-control w-80">
                        <div className="flex gap-2 mb-5">
                            <div><FaFacebook /></div>
                            <div><CiTwitter /></div>
                            <div><CiInstagram /></div>
                            <div><FaGoogle /></div>
                            <div><CiYoutube /></div>

                        </div>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn btn-primary join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
            {/* allart  */}
            <div>
                <footer className="footer footer-center bg-base-300 text-base-content p-4">
                    <aside>
                        <p>Copyright © Purple Cues Private Limited Ltd</p>
                    </aside>
                </footer>
            </div>
        </div>
    );
};

export default Footer;