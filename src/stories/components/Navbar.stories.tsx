
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
    logo:'',
    alt:"alt text",
    backgroundColor: '',
    color:'',
    hoverColor:'',
    maxWidth:1480,
    options:[
        {id:1, title:'Home', url:'#!', target:false},
        {id:2, title:'About', url:'#!' , target:false},
        {id:3, title:'Google', url:'https://google.com' , target:true},
    ]
}