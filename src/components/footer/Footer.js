import classes from './footer.module.css'

function Footer () {
    return (
        <div>
            <ul className={classes.ul}>
                <li>About site</li>
                <li>About company</li>
                <li>Soc. networks</li>
                <li>News</li>
            </ul>
        </div>
    )
}
export default Footer;