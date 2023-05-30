const Footer = ({length})=>{
    return(
       <footer>
        <h2>{length} List {length===1?"Item":"Items"}</h2>
       </footer>
    )
}


export default Footer;
