import "./Skills.css";
export default function Skills(){
    return(
        <div>
        <section id="skills">
    <div class="skills-wrapper">
        <div class="skills-header">
            <p>what i do </p>
    <h1>Skills And <span >Services</span></h1>
    </div>
    <div class="class">
        <div class="skill-box">
             <i class="fas fa-code skill-icon"></i>
            <h2>Web Design</h2>
            <p>Creating visually appealing and user-friendly website designs that align with your brand identity.</p>
        </div>

        <div class="skill-box">
            <h2>Web Development</h2>
            <p>Building responsive and functional websites using the latest web technologies and best practices.</p>
        </div>

        <div class="skill-box">
            <i class="fas fa-pencil-ruler skill-icon"></i>
            <h2>UI/UX Design</h2>
            <p>Designing intuitive user interfaces and enhancing user experiences to ensure seamless interactions.</p>
        </div>

        <div class="skill-box">
            <i class="fas fa-rocket skill-icon"></i>
            <h2>SEO Optimization</h2>
            <p>Improving website visibility on search engines through effective SEO strategies and techniques.</p>
        </div>
        <div class="skill-box">
            <i class="fas fa-cloud-upload-alt skill-icon"></i>
            <h2>Deployment</h2>
        <p>GitHub Pages, Netlify</p>
        </div>
        <div class="skill-box">
            <i class="fas fa-server skill-icon"></i>
              <h2>Backend Basics</h2>
        <p>Node.js, APIs, Authentication</p>
        </div>
    </div>
    </div>
</section>


        </div>
    )
}