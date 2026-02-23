import Link from 'next/link';
import { FiMapPin, FiMail, FiPhone, FiClock, FiChevronRight } from 'react-icons/fi';
import styles from './page.module.css';

export const metadata = {
    title: 'Contact - Sports Panorama',
    description: 'Get in touch with our team for premium sports branding solutions.',
};

export default function Contact() {
    return (
        <main className={styles.contactPage}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContent}>
                    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
                        <Link href="/">Home</Link>
                        <FiChevronRight />
                        <span>Contact</span>
                    </nav>
                    <h1 className={styles.title}>
                        Get in <span className={styles.highlight}>Touch</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Ready to elevate your sports brand? Let's talk strategy.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className={styles.mainContent}>
                {/* Left Column: Contact Form */}
                <section className={styles.card}>
                    <form className={styles.form}>
                        <div className={styles.formGroup}>
                            <label htmlFor="full-name" className={styles.label}>Full Name</label>
                            <input type="text" id="full-name" name="full-name" placeholder="John Doe" className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email" className={styles.label}>Email Address</label>
                            <input type="email" id="email" name="email" placeholder="john@example.com" className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="phone" className={styles.label}>Phone Number</label>
                            <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" className={styles.input} />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="subject" className={styles.label}>Subject Line</label>
                            <select id="subject" name="subject" className={styles.select}>
                                <option value="">Select a category</option>
                                <option value="marketing">Marketing Strategy</option>
                                <option value="sponsorship">Sponsorship Inquiry</option>
                                <option value="branding">Brand Design</option>
                                <option value="other">General Question</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message" className={styles.label}>Message</label>
                            <textarea id="message" name="message" rows="4" placeholder="How can we help you win?" className={styles.textarea}></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn}>
                            Send Message
                        </button>
                    </form>
                </section>

                {/* Right Column: Info Cards Stack */}
                <section className={styles.infoGrid}>
                    <div className={styles.infoCard}>
                        <div className={styles.iconWrapper}>
                            <FiMapPin />
                        </div>
                        <div className={styles.infoContent}>
                            <h3>London HQ</h3>
                            <p>22 Bishopsgate, London EC2N 4BQ<br />United Kingdom</p>
                        </div>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.iconWrapper}>
                            <FiMail />
                        </div>
                        <div className={styles.infoContent}>
                            <h3>Email</h3>
                            <p className={styles.primaryText}>hello@sportspanorama.com</p>
                        </div>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.iconWrapper}>
                            <FiPhone />
                        </div>
                        <div className={styles.infoContent}>
                            <h3>Phone</h3>
                            <p>+44 20 7946 0123</p>
                        </div>
                    </div>

                    <div className={styles.infoCard}>
                        <div className={styles.iconWrapper}>
                            <FiClock />
                        </div>
                        <div className={styles.infoContent}>
                            <h3>Office Hours</h3>
                            <p>Mon-Fri 9AM - 6PM GMT</p>
                        </div>
                    </div>

                    {/* Map Placeholder */}
                    <div className={styles.mapPlaceholder}>
                        <img
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwVobXAz_-AKdHrZEq-P8aJ95MvLm-gvDiVognYBtcM00QP8qJVzzciItqeYQ7Q_xgsKfvd1mzSwpwsJZEu6qAiFp-zV8xlnxXfYxxkWWivtB5zLfk3_h0906snczuPJONcuT6PibDP-q1BJeLmThm77CqT5Xfqrtt9KgksxKeujQl5NDUKRwwkPHDtmzZrpNy4sK9SxzJenS6VTgDRNDeQgAYq2fUgQo4vbIM_zMAmSTnSlaNLQIa8vkf-1DjtNkDqkWLkyK1XyaE"
                            alt="Map of London"
                            className={styles.mapImg}
                        />
                        <div className={styles.mapOverlay}></div>
                        <div className={styles.mapPin}>
                            <FiMapPin />
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
