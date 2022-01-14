
import { PropsNavbarComponent } from './interfaces.navbar'
import { A, Container, Content, Nav, Options } from './styles.navbar'


export const Navbar = ( props:PropsNavbarComponent ) => {
    const {backgroundColor, maxWidth, logo, color, alt, options = [], hoverColor } = props
    return (
        <>
            <Container backgroundColor={backgroundColor} color={color} maxWidth={maxWidth} >
                <Content>
                    <img src={ logo } alt={alt} />
                    <Nav>
                        <Options>
                            {
                                options.map(option=>(
                                    option.target
                                    ?  <li> <A href={option.url} key={option.id} target="_blank" rel="noreferrer" color={color} hoverColor={hoverColor}> {option.title} </A> </li>
                                    :  <li> <A href={option.url} key={option.id} color={color} hoverColor={hoverColor}> {option.title} </A> </li>
                                ))
                            }
                        </Options>
                    </Nav>
                </Content>
            </Container>
        </>
    )
}

export default Navbar
