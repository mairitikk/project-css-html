function ProfilePicture() {
    const imageUrl = './src/assets/logo2.png';
    const handeleClick = (e) => e.target.style.display = "none";
    return (<img onClick={(e) => handeleClick(e) } src={imageUrl}></img>)
}
export default ProfilePicture