import logo from './logo.svg';
import './App.css';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import { useEffect, useState } from 'react';
import { Drawer } from '@mui/material';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import ContrastOutlinedIcon from '@mui/icons-material/ContrastOutlined';

function App() {

  const colors = ['#006FB4' , '#89399C' , '#E00034' , '#E26721' , '#009F9F' , '#2B8230' , '#FFFFFF' , '#000000']
  
  const [open , setOpen] = useState(false)
  const [data , setData] = useState([-1 , -1 , -1 , -1])

  useEffect(()=>{
    let r = document.querySelector(':root')
    if(data[0]===-1)  r.style.setProperty('--textColor' , 'rgb(92, 90, 90)')
    else  r.style.setProperty('--textColor' , colors[data[0]])

    if(data[1]===-1)  r.style.setProperty('--titleColor' , 'black')
    else  r.style.setProperty('--titleColor' , colors[data[1]])

    if(data[2]===-1)  r.style.setProperty('--backColor' , '#dfdcdc')
    else  r.style.setProperty('--backColor' , colors[data[2]])

    if(data[3]===-1)  r.style.setProperty('--contra' , 'contrast(1)')
    else if(data[3]===0)  r.style.setProperty('--contra' , 'contrast(0.5)')
    else if(data[3]===1)  r.style.setProperty('--contra' , 'contrast(1)')
    else  r.style.setProperty('--contra' , 'contrast(2)')

  },[data])
  console.log(data[3])

  const changeData = (ind , cind , isSelect)=>{
    if(isSelect){
      data[ind] = -1
    }
    else{
      data[ind] = cind;
    }
    setData([...data])
  }


  return (
    <div className="App">
      <div className="main-div">
        <h1 className="title">
          What is Lorem Ipsum?
        </h1>
        <div className="text">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
      <div className='fixed'>
        <i onClick={()=>setOpen(true)}><AccessibilityNewIcon sx={{fontSize: '40px'}} /></i>
      </div>

      <Drawer
        open={open}
        onClose={()=>setOpen(false)}
        anchor='right'
      >
        <div className='access'>
          <div className='adj-col'>
            <h4>Adjust Colors</h4>
            <hr />
            <div className='text-color'>
              <p>Text Color</p>
              <div className='colors'>
                {
                  colors.map((item , i)=>
                    data[0]!==-1 && colors[data[0]] === item ? 
                    <span key={i} onClick={()=>changeData(0, i , 1)} style={{backgroundColor : item , border:'4px solid black'}}></span>
                    :
                    <span key={i} onClick={()=>changeData(0, i , 0)} style={{backgroundColor : item}}></span>
                  )
                }
              </div>
            </div>
            <div className='text-color'>
              <p>Tittle Color</p>
              <div className='colors'>
                {
                  colors.map((item , i)=>
                    data[1]!==-1 && colors[data[1]] === item ? 
                    <span key={i} onClick={()=>changeData(1, i , 1)} style={{backgroundColor : item , border:'4px solid black'}}></span>
                    :
                    <span key={i} onClick={()=>changeData(1, i , 0)} style={{backgroundColor : item}}></span>
                  )
                }
              </div>
            </div>
            <div className='text-color'>
              <p>Background Color</p>
              <div className='colors'>
                {
                  colors.map((item , i)=>
                    data[2]!==-1 && colors[data[2]] === item ? 
                    <span key={i} onClick={()=>changeData(2, i , 1)} style={{backgroundColor : item , border:'4px solid black'}}></span>
                    :
                    <span key={i} onClick={()=>changeData(2, i , 0)} style={{backgroundColor : item}}></span>
                  )
                }
              </div>
            </div>
          </div>
          <div className='adj-col'>
            <h4>Adjust Contrast</h4>
            <hr />
            {
              data[3]===0 ? 
              <p onClick={()=>{data[3]=-1;setData([...data])}} style={{backgroundColor : '#136FFA' , color : 'white'}} className='text-color contra'>
                <i><DarkModeOutlinedIcon /></i>
                <p>Dark Contrast</p>
              </p>
              :
              <p onClick={()=>{data[3]=0;setData([...data])}} className='text-color contra'>
                  <i><DarkModeOutlinedIcon /></i>
                  <p>Dark Contrast</p>
              </p>
            }

            {
              data[3]===1 ? 
              <p onClick={()=>{data[3]=-1;setData([...data])}} style={{backgroundColor : '#136FFA' , color : 'white'}} className='text-color contra'>
                <i><LightModeOutlinedIcon /></i>
                <p>Light Contrast</p>
              </p>
              :
              <p onClick={()=>{data[3]=1;setData([...data])}} className='text-color contra'>
                  <i><LightModeOutlinedIcon /></i>
                  <p>Light Contrast</p>
              </p>
            }
            
            {
              data[3]===2 ?
              <p onClick={()=>{data[3]=-1;setData([...data])}} style={{backgroundColor : '#136FFA' , color : 'white'}}  className='text-color contra'>
                <i><ContrastOutlinedIcon /></i>
                <p>High Contrast</p>
              </p>
            :
              <p onClick={()=>{data[3]=2;setData([...data])}} className='text-color contra'>
                <i><ContrastOutlinedIcon /></i>
                <p>High Contrast</p>
              </p>
            }
            
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default App;
