import React from "react";
import TitleAromas from "./TitleAromas";
import Aromas from "./Aromas";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";

const AromasContainer = ({listaAromas}) => {

  //Aromas
  let aroma1 = {id:1, title:"Coco Vainilla" ,description: "La esencia de coco es ideal para aquellas personas que sufren de ataques de ansiedad, ya que consigue nivelar las fuerzas positivas y negativas con su suave aroma.También atrae los buenos amigos y endulza los ambientes. La esencia de vainilla, se considera un aroma espiritualmente tranquilo. Ideal para las personas muy nerviosas, produce un efecto balsámico contra la ansiedad.La vainilla es aromatizante, antidepresiva y calmante."};
  let aroma2 = {id:2, title:"Gardenia" ,description: "La esencia de coco es ideal para aquellas personas que sufren de ataques de ansiedad, ya que consigue nivelar las fuerzas positivas y negativas con su suave aroma.También atrae los buenos amigos y endulza los ambientes. La esencia de vainilla, se considera un aroma espiritualmente tranquilo. Ideal para las personas muy nerviosas, produce un efecto balsámico contra la ansiedad.La vainilla es aromatizante, antidepresiva y calmante."};
  let aroma3 = {id:3, title:"Lima Limón" ,description: "La Lima refresca y renueva la mente, por lo q permite tomar decisiones acertada... ya que serena y anima una mente cansada. Estimula la determinación y aporta energía para seguir adelante, porque activa y estimula, sobre todo en estados de apatía, ansiedad y depresión. La esencia de limón, es ideal para relajarse y realizar actividades en las que necesites mucha concentración. Sus propiedades son geniales para mejorar la claridad mental y potenciar la atención plena."};
  let aroma4 = {id:4, title:"Rosa Miel" ,description: "La esencia de rosas, produce paz y armonía. Al tener propiedades relajantes y calmantes nos ayuda a gestionar los episodios de ansiedad, el cansancio nervioso y el estrés. El delicado, suave y dulce olor de las rosas, nos ayuda no sólo a conciliar el sueño, sino además, nos lleva a un agradable estado de tranquilidad, a combatir el cansancio en nuestro día a día y aliviar la depresión. El aroma de rosas, también nos ayudará a crear una agradable sensación de bienestar. El extracto de miel tiene una gran variedad de usos que ayudan a que tengamos una mejor calidad de vida, más sana y llenos de vitalidad. Este aroma tienen la capacidad de mover energías positivas, atraer el amor, la bondad y la prosperidad."};
  let aroma5 = {id:5, title:"Lavanda" ,description: "La esencia de lavanda tiene propiedades calmantes que controlan el estrés emocional y la ansiedad y al tener un efecto reconfortante en los nervios ayuda a aliviar la tensión y la depresión."};
  let aroma6 = {id:6, title:"Tilo Jazmín" ,description: "La esencia de Tilo además de tranquilizar, al equilibrar el sistema nervioso central, nos permite recuperar la alegría y el optimismo. Por eso, ayuda a dormir, elimina la fatiga crónica, calma el dolor de cabeza y refresca la mente cuando se embota y no permite tomar buenas decisiones. La esencia de jazmín se usa para calmar los nervios, pero este aceite también sirve para combatir la depresión debido a que tiene capacidades revitalizantes que producen una sensación de confianza, optimismo y energía."};
  let aroma7 = {id:7, title:"Fresias" ,description: "La esencia de Fresias tiene un aroma floral de verano, delicado y dulce,que da una sensación de que todo está bien con el mundo (un pensamiento muy liberador). Transmite inocencia, amistad, felicidad, calma, equilibra las emociones y reduce la fatiga"};

  return(

    <div>
      <TitleAromas img={'images/aromas.png'}/>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container justifyContent="center" spacing={1}>
            <Grid item xs={12} sm={4}>
              <Aromas item={aroma1} img={'images/coco-vainilla.png'}/> 
            </Grid>
            <Grid item xs={12} sm={4}>
              <Aromas item={aroma2} img={'/images/gardenia.png'}/>
            </Grid>
            <Grid item xs={12} sm={4}>        
              <Aromas item={aroma3} img={'/images/lima-limon.png'}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Aromas item={aroma4} img={'/images/rosa-miel.png'}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Aromas item={aroma5} img={'/images/lavanda.png'}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Aromas item={aroma6} img={'/images/jazmin.png'}/>      
            </Grid>
            <Grid item xs={12} sm={4}>
              <Aromas item={aroma7} img={'/images/fresia.png'}/>
            </Grid>
          </Grid>
        </Box>
    </div>
  )
}

export default AromasContainer