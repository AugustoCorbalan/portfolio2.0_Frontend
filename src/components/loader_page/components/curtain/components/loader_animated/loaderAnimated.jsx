import styles from './loaderAnimated.module.css';
export const LoaderAnimated = ()=>{
    return(
        <div className={styles.container}>
            <svg className={styles.hexagon1_color} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
            viewBox="0 0 512 512">
                <polygon class="st16" points="359,77.6 153,77.6 50,256 153,434.4 359,434.4 462,256 "/>
            </svg>
            <svg className={styles.hexagon2_color} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 512 512">
                <polygon class="st16" points="359,77.6 153,77.6 50,256 153,434.4 359,434.4 462,256 ">
                </polygon>
            </svg>
            <div className={styles.text}>
                <h1>A</h1>
                <h1 className={styles.textSecondLetter}>C</h1>
            </div>
        </div>
    )
}