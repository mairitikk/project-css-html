import styles from './Button.module.css'

function Button() {

    const handeleClick = () => console.log("OuCH!");
    const handeleClick2 = (name) => console.log(`${name}LOL`);
    return (
        <button onClick={() => handeleClick2("Martin")} className={styles.button}>Click me</button>
    )
 }
export default Button