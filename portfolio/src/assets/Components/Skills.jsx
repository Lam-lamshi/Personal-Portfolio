import "./Skills.css";
import AOS from 'aos';
import { useEffect } from "react";
export default function Skills(){

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);
    return(
        <div>
        <section id="skills" data-aos="zoom-in-down" data-aos-duration="1000">
    <div className="skills-wrapper">
        <div className="skills-header">
           
    <h1>Skills And <span >Services</span></h1>
    </div>
    <div className="class">
        <div  data-aos="fade-up" data-aos-delay="0" data-aos-easing="ease-in-out" className="skill-box">
             <i className="fas fa-code skill-icon"></i>
            <h2>Web Design</h2>
            <p>Creating visually appealing and user-friendly website designs that align with your brand identity.</p>
        </div>

        <div className="skill-box" data-aos="fade-up" data-aos-delay="200" data-aos-easing="ease-in-out">
            <h2>Web Development</h2>
            <p>Building responsive and functional websites using the latest web technologies and best practices.</p>
        </div>

        <div className="skill-box" data-aos="fade-up" data-aos-delay="400" data-aos-easing="ease-in-out">
            <i className="fas fa-pencil-ruler skill-icon"></i>
            <h2>UI/UX Design</h2>
            <p>Designing intuitive user interfaces and enhancing user experiences to ensure seamless interactions.</p>
        </div>

        <div className="skill-box"  data-aos="fade-up" data-aos-delay="600" data-aos-easing="ease-in-out">
            <i className="fas fa-rocket skill-icon"></i>
            <h2>SEO Optimization</h2>
            <p>Improving website visibility on search engines through effective SEO strategies and techniques.</p>
        </div>
        <div  data-aos="fade-up" data-aos-delay="800" data-aos-easing="ease-in-out" className="skill-box">
            <i className="fas fa-cloud-upload-alt skill-icon"></i>
            <h2>Deployment</h2>
        <p>GitHub Pages, Netlify</p>
        </div>
        <div data-aos="fade-up" data-aos-delay="1000" data-aos-easing="ease-in-out" className="skill-box">
            <i className="fas fa-server skill-icon"></i>
              <h2>Backend Basics</h2>
        <p>Node.js, APIs, Authentication</p>
        </div>
    </div>
    </div>
     
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
        <script>
  AOS.init();
</script>
</section>


        </div>
    )
}