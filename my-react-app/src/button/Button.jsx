import styles from './Button.module.css'

function Button() {
   /* let count = 0;

    const handeleClick = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else {
            console.log(`${name} stop clicking me!`);
        }
    } ;
   // const handeleClick2 = (name) => console.log(`${name}LOL`);
    return (
        <button onClick={() => handeleClick("Martin")} className={styles.button}>Click me</button>
    ) */
    
    const handeleClick = (event) => event.target.textContent = "TERE :)";
    return (<button onClick={(e) => handeleClick(e)} className={styles.button}>VAJUTA SIIA</button>
    )  
}


export default Button