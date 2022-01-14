
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Navbar from "../../components/Navbar";


export default{
    title:'UI/Navbar',
    component: Navbar
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> =(args)=><Navbar {...args}/>

export const Basic = Template.bind({});
Basic.args = {
    // title:'No title',
    logo:'../assets/logo_rcm.jpg',
    alt:"Logo de ...",
    backgroundColor: 'blue',
    color:'white',
    hoverColor:'black',
    maxWidth:1460,
    options:[
        {id:1, title:'Home', url:'face', target:false},
        {id:2, title:'About', url:'face2' , target:false},
        {id:3, title:'Google', url:'https://google.com' , target:true},
    ]
}