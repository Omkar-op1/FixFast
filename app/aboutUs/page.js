// about.js
export const AboutUs = () => {
    return `
        <div class="about-container" style="font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px;">
            <header style="background-color: #2ecc71; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
                <h1 style="margin: 0; font-size: 36px;">About FixFast</h1>
                <p style="font-size: 18px; margin-top: 10px;">Fast, reliable repair services since 2020</p>
            </header>

            <main style="padding: 30px 20px; background-color: #f9f9f9; border-radius: 0 0 8px 8px;">
                <section style="margin-bottom: 40px;">
                    <h2 style="color: #2ecc71; border-bottom: 2px solid #2ecc71; padding-bottom: 10px; display: inline-block;">Our Story</h2>
                    <p style="line-height: 1.6; font-size: 16px; color: #555;">
                        FixFast was founded with a simple mission: to make appliance and electronics repairs as convenient as ordering food delivery. 
                        Since our launch in 2020, we've grown to become the most trusted on-demand repair service, completing over 10,000 repairs 
                        with a 98% success rate and maintaining a 4.9 customer rating.
                    </p>
                </section>

                <section style="margin-bottom: 40px;">
                    <h2 style="color: #2ecc71; border-bottom: 2px solid #2ecc71; padding-bottom: 10px; display: inline-block;">Why Choose Us</h2>
                    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; margin-top: 20px;">
                        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                            <h3 style="color: #2ecc71;">⚡ Lightning Fast</h3>
                            <p>Average technician response time of just 10 minutes</p>
                        </div>
                        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                            <h3 style="color: #2ecc71;">🔧 Expert Technicians</h3>
                            <p>All our technicians are certified and background-checked</p>
                        </div>
                        <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1);">
                            <h3 style="color: #2ecc71;">🛡️ 90-Day Warranty</h3>
                            <p>All repairs come with our industry-leading warranty</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 style="color: #2ecc71; border-bottom: 2px solid #2ecc71; padding-bottom: 10px; display: inline-block;">Our Team</h2>
                    <p style="line-height: 1.6; font-size: 16px; color: #555;">
                        The FixFast team consists of passionate professionals dedicated to changing the repair industry. From our customer service 
                        representatives to our field technicians, every team member shares our commitment to quality, speed, and customer satisfaction.
                    </p>
                    <div style="display: flex; justify-content: center; margin-top: 30px;">
                        <button style="background-color: #2ecc71; color: white; border: none; padding: 12px 25px; font-size: 16px; border-radius: 4px; cursor: pointer; font-weight: bold;">
                            Meet Our Team
                        </button>
                    </div>
                </section>
            </main>

            <footer style="text-align: center; margin-top: 40px; padding: 20px; color: #777; font-size: 14px;">
                <p>© 2025 FixFast. All rights reserved.</p>
            </footer>
        </div>
    `;
};