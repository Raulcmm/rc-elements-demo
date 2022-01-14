
/**
 * Interface del componente Principal : Navbar
 * Comentarios para mostrar documentación en storybook
 */
export interface PropsNavbarComponent {
    /**
     * Tamaño maximo que puede tener el navbar
     */
    maxWidth? :number;
    /**
     *Color de fondo, acepta cualquier modelo cromatico
    */
    backgroundColor?:string;
    /**
     * Color de letra
     */
    color?:string;
    /**
     * Color de hover para los links
     */
    hoverColor:string;
    /**
     * imagen de cualquier formato para ser el logo
     */
    logo?:string;
    /**
     * Texto alternativo
     */
    alt?:string
    /**
     * Opciones del navbar
     */
    options?:Array<Link>
}

/**
 * Estructura de un link del navbar
 */
interface Link {
    id:number,
    title:string,
    url:string,
    target:boolean,
}

/**Interface de stylos de un link */
export interface PropsA{
    color?:string;
    hoverColor?:string;
}

/**
 * Interface de : Container
 */
export interface PropsContainer{
    backgroundColor?:string;
    color?:string;
    maxWidth?:number;
}