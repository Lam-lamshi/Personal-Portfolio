import './Hero.css'
const user ={
    name: "Emmanuel Wisdom",
    imageUrl:"https://www.bing.com/th/id/OIP.XbhIGO49XCjhHxsWmFBtrAHaEK?w=193&h=135&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    about:"A Web Developer Passionate about turning ideas into reality  thrugh lines of codes ",
}

export default function Hero(){
    return(
        <div className="hero">
            <div className="hero-text">
                <h1>{user.name}</h1>
                <img 
                className="hero-image"
                src={user.imageUrl}
                alt="Hero Image"
            />
                <p>{user.about}</p>
            </div>
            <div className="hero-buttons">
                <button className="hero-button hero-button-primary" onClick={() => { window.location.href = "#projects"; }}>
                    View projects 
                    <img src="/arrow.png"  className="hero-button-icon"/>
                </button>
                <button className="hero-button hero-button-secondary" onClick={() => { window.location.href = "#contact"; }}>
                    Contact me   
                </button>
            </div>
        </div>
    )
}