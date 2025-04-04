// contact.js
export const ContactUs = () => {
    return `
        <div class="contact-container" style="font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px;">
            <header style="background-color: #2ecc71; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
                <h1 style="margin: 0; font-size: 36px;">Contact FixFast</h1>
                <p style="font-size: 18px; margin-top: 10px;">We're here to help 7 days a week</p>
            </header>

            <main style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px; padding: 30px 20px; background-color: #f9f9f9; border-radius: 0 0 8px 8px;">
                <section>
                    <h2 style="color: #2ecc71; border-bottom: 2px solid #2ecc71; padding-bottom: 10px; display: inline-block;">Get in Touch</h2>
                    <form style="margin-top: 20px; display: flex; flex-direction: column; gap: 15px;">
                        <div>
                            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #555;">Name</label>
                            <input type="text" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 4px; font-size: 16px;" required>
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #555;">Email</label>
                            <input type="email" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 4px; font-size: 16px;" required>
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #555;">Phone</label>
                            <input type="tel" style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 4px; font-size: 16px;">
                        </div>
                        <div>
                            <label style="display: block; margin-bottom: 5px; font-weight: bold; color: #555;">Message</label>
                            <textarea style="width: 100%; padding: 12px; border: 1px solid #ddd; border-radius: 4px; font-size: 16px; min-height: 150px;" required></textarea>
                        </div>
                        <button type="submit" style="background-color: #2ecc71; color: white; border: none; padding: 14px; font-size: 16px; border-radius: 4px; cursor: pointer; font-weight: bold; margin-top: 10px;">
                            Send Message
                        </button>
                    </form>
                </section>

                <section>
                    <h2 style="color: #2ecc71; border-bottom: 2px solid #2ecc71; padding-bottom: 10px; display: inline-block;">Contact Info</h2>
                    <div style="margin-top: 20px;">
                        <div style="display: flex; align-items: center; margin-bottom: 20px;">
                            <div style="background-color: #2ecc71; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0;">
                                📞
                            </div>
                            <div>
                                <h3 style="margin: 0; color: #555;">Phone</h3>
                                <p style="margin: 5px 0 0; color: #777;">+1 (800) 555-3499</p>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 20px;">
                            <div style="background-color: #2ecc71; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0;">
                                ✉️
                            </div>
                            <div>
                                <h3 style="margin: 0; color: #555;">Email</h3>
                                <p style="margin: 5px 0 0; color: #777;">support@fixfast.com</p>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; margin-bottom: 20px;">
                            <div style="background-color: #2ecc71; color: white; width: 40px; height: 40px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 15px; flex-shrink: 0;">
                                🏢
                            </div>
                            <div>
                                <h3 style="margin: 0; color: #555;">Headquarters</h3>
                                <p style="margin: 5px 0 0; color: #777;">123 Tech Street<br>San Francisco, CA 94107</p>
                            </div>
                        </div>
                    </div>

                    <h2 style="color: #2ecc71; border-bottom: 2px solid #2ecc71; padding-bottom: 10px; display: inline-block; margin-top: 30px;">Business Hours</h2>
                    <div style="margin-top: 20px; background: white; padding: 15px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                        <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee;">
                            <span>Monday - Friday</span>
                            <span style="font-weight: bold;">8:00 AM - 8:00 PM</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee;">
                            <span>Saturday</span>
                            <span style="font-weight: bold;">9:00 AM - 6:00 PM</span>
                        </div>
                        <div style="display: flex; justify-content: space-between; padding: 10px 0;">
                            <span>Sunday</span>
                            <span style="font-weight: bold;">10:00 AM - 4:00 PM</span>
                        </div>
                    </div>
                </section>
            </main>

            <footer style="text-align: center; margin-top: 40px; padding: 20px; color: #777; font-size: 14px;">
                <p>© 2025 FixFast. All rights reserved.</p>
            </footer>
        </div>
    `;
};