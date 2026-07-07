import './Hero.css'
const user ={
    name: "Emmanuel Wisdom",
    imageUrl:"./pic.jpeg",
    about:"Frontend Web Developer & Computer Engineering Student, I build responsive, modern, and user-friendly websites. ",
    nextimageUrl:"./next.png",
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
                        <img src={user.nextimageUrl} alt="Next" className="hero-button-icon" />
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