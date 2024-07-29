import logo from './assets/logo2.png' 

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={logo} alt="logo" />
            <h2 className="card-title">DriMT</h2>
            <p className="card-text">I make Websites and Back-End dvelopment</p>
      </div>  
    );
}
export default Card