import styles from '../Button/styles.module.css'

export const Button = ({children}) => {
    return (
        <button className={styles.button}>{children}</button>
    )
}