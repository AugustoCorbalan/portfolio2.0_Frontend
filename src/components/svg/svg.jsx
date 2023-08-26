import styles from './svg.module.css';

export const Svg = ()=>{
    return(
        <div className={styles.container}>
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 512 512">
                <polygon class="st16" points="359,77.6 153,77.6 50,256 153,434.4 359,434.4 462,256 "/>
            </svg>
        </div>
    )
}