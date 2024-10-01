import Link from 'next/link';
import { FC, ReactNode } from 'react';

const Introduction: FC = () => {

  return (
    <>
    <h1>Juan Carlos Lacruz Lacruz</h1>
    <p>He descubierto una cosa que me reta,<strong> la programación</strong>. No sabía que podia gustarme algo tanto que me estuviera rompiendo tanto la cabeza una y otra vez.</p>
    <p>Pero creo que ahí está la esencia.</p>
    <p>Después de haber trabajado en producción para diferentes industrias a nivel de peón, bueno, en Berlin alguna mejor oportunidad tuve, necesitaba de nuevo retarme a mi mismo para cambiar mi rumbo.</p>
    <p>De ahí que me aventurara a estudiar programación. Después de tantos cambios en mi vida, uno más no me asustaba, me asuta más encontrar la primera oportunidad para ponner en valor lo estudiado.</p>
    <p>No sin eso, no he parado de programar desde que empecé y no lo digo solo yo, <strong>SOY ADICTO AL CÓDIGO.</strong></p>
    <p>Tanto, que este proyecto está hecho con NextJS por el simple hecho de aprender algo nuevo. Bueno, y que decir de haber aprendido TypeScript en muy poco tiempo y por mi cuenta, considerándolo para mi uso propio z en mis próximos proyectos como la mejor opción.</p>
    <p><strong>Explicarse se tiene que explicar</strong>, menudo subtítulo he elegido para mi portfolio. Palabras latinas que rompen con el inglés para hacer un juego de palabras.</p>
    <p><strong>Devious</strong>, como astuto. Así me veo solucionando los problemas que enfrento, de manera astuta y observando la situación de manera global para solucionarlos de tal manea.</p>
    <p><strong>Meticulous</strong>, como meticuluso. Soy un desarrolladodor que persigue el orden en el código para hacerlo simple y límpio.</p>
    <p><strong>Not obvious</strong>, cono no obvio. Esto ya me define de una manera más personal. Creo que siempre sorprendo en casi todos los ámbitos de mi vida</p>
    <p>Os invito a que navegueis por mi portfolio para descubrir mis proyectos y si teneis alguna duda os pongais en <Link href={'/contact'}><strong>contacto</strong></Link> conmigo a traves de LinkedIn o a través del formulario de contacto habilitado para tal uso.</p>
    </>
  );
};

export default Introduction;
