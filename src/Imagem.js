import lobo from './img/lobo.jpg'; //a imagem precisa ser importada

function Imagem() {
    return(
        <div>
            <img className="lobo" src={ lobo } alt="#"/>
        </div>
    )
}

export default Imagem; //não precisa de parênteses pois está exportando o arquivo, não a função