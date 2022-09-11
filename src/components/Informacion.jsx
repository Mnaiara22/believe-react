import React from 'react'

const Informacion = ({img}) => {

    return (

        <div className='info'>
            <ul>
                <h2>TIPS</h2>
                <li>Ubicar el envase sobre una superficie no inflamable.</li>
                <li>Encender el fósforo o palillo.</li>
                <li>No apagar sin que la primer capa de cera este derretida.</li>
                <li>No dejar encendida por mas de 3 o 4hs.</li>
                <li>Apagar tapando el recipiente o con apagavelas.</li>
                <li>Antes de volver a encender siempre cortar la punta del pabilo para evitar que la cera se manche.</li>
                <li>No dejar al alcance de niños o mascotas.</li>
                <li>No dejar la vela encendida sin supervisión.</li>
            </ul>

            <ul>
                <h2>Sabías que...</h2>
                <li>La cera de soja produce una combustión limpia. </li>
                <li>No emite sustancias tóxicas.</li>
                <li>La combustión se produce de forma mas lenta, aporta una mayor duración de quemado.</li>
                <li>Es un recurso agrícola renovable totalmente ecológico.</li>
                <li>Se limpia con agua y jabón, es biodegradable. </li>
            </ul>

        </div>

    )
}

export default Informacion