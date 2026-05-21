import './Hero.css'
const user ={
    name: "Emmanuel Wisdom",
    imageUrl:"./pic.jpeg",
    about:"A Web Developer Passionate about turning ideas into reality  thrugh lines of codes ",
}

export default function Hero(){
    return(
        <div className="hero">
            <div className="hero-text">
                <h1>{user.name}</h1>
                <p>{user.about}</p>
                <div className="hero-buttons">
                    <button className="hero-button hero-button-primary" onClick={() => { window.location.href = "#projects"; }}>
                        View projects 
                        <i className="fa-light fa-angles-right "  className="hero-button-icon"/>
                    </button>
                    <button className="hero-button hero-button-secondary" onClick={() => { window.location.href = "#contact"; }}>
                        Contact me   
                    </button>
                </div>
            </div>
            <img 
                className="hero-image"
                src={user.imageUrl}
                alt="Hero Image"
            />
        </div>
    )
}