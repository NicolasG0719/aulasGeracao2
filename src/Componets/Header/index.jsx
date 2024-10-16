import styles from './Header.module.css'

function Header (){
    return(
        <header className= {styles.header}>
            <div className= {styles.headerTop}>
            <span > Loja </span>
            <nav>
                <a href="">Barra de busca</a>
                <a href="">Link Cadratro-se</a>
                <a href="">Botão</a>
                <a href="">Carrinho</a>
            </nav>
        </div>
            <div className= {styles.headerBottom}>
                <a href="">HOME</a>
                <a href="">PRODUTOS</a>
                <a href="">CATEGORIAS</a>
                <a href="">MEUS PEDIDOS</a>
            </div>

        </header>

    )
}

export default Header


// import Logo from "./img/fenix.PNG"
// function App() {
//     return(
//     <>
//         <img src="{logo}" alt="logo da loja" title='logo de loja' />
    
    
//     </>



//     )
// }