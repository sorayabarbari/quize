import React,{component},from 'React';
var cost='100toman'
class kala  extends React.Component{
    state= {
    name:'bag'
    color:'black'
    size:'small'
    codetakhfif:'20%'
}; 
handlesubmit= (e)=>{
    e.preventdefault();

}
handlechange= e=>{
   this.setstate{
       name:e.target.value
       color:e.target.value
       size:e.target.value
       codetakhfif:e.target.value
   }
}

handle

render(){
    return(
        <div>
            <h1>
                "testkala"
            </h1>
            <form onsubmit={this.handlesubmit}>
            <lable htmlfor="name">name</lable>
            <input type="text" id="name" onchange={this.handlechange}/>
            <lable htmlfor="color">color</lable>
            <input type="text" id="color" onchange={this.handlechange}/>
            <lable htmlfor="size">size</lable>
            <input type="text" id="size" onchange={this.handlechange}/>
            <lable htmlfor="codetakhfif">codetakhfif</lable>
            <input type="text" id="size" onchange={this.handlechange}/>

        </div>
    );
}
export default
