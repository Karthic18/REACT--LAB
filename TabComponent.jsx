import React,{useState} from 'react'
function TabComponent() {
    const [activeTab,setActiveTab]=useState("Home")
  return (
    <div style={Styles.container}>
        <h1>Hi Tab-Component</h1>
        <div style={Styles.tabContainer}>
        <button onClick={()=>setActiveTab("Home")}>Home</button>
        <button onClick={()=>setActiveTab("About")}>About</button>
        <button onClick={()=>setActiveTab("Contact")}>Contact</button>
        </div>
        <div style={Styles.ContentBox}>
            {activeTab ==="Home" && <p>B A T - M A N</p>}
            {activeTab ==="About" && <p>ReactJS lab</p>}
            {activeTab ==="Contact" && <p>@ViratKohli The King</p>}
        </div>

    </div>
  )
}
const Styles={
    container:{
        minHeight:"100PX",
        padding:"20px",
        border:"1px solid"
    },
    tabContainer:{
        padding:"20px",
        border:"none",
        margin:"20px",
    },
    ContentBox :{
        height:"100px",
        width:"300px",
        marginLeft:"80px",
        backgroundColor:"lightblue",
        paddingTop:"10px",
    }
}


export default TabComponent
