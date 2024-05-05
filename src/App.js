
import { useState } from 'react';
import './App.css';

function App() {
  const [meyveList,setMeyveList]=useState(['muz', 'çilek', "elma", "armut", "portakal", "mandalina", "erik"])
  const [aramaTut, setAramaTut] = useState({
    search: '',
    sonucs: []
  })


  const meyveFiltrele = (e) => {
    const result = meyveList.filter(items => {
      if (e === '') { return meyveList }
      return items.toLowerCase().includes(e.toLowerCase())

    })

    setAramaTut({
      search: e,
      sonucs: result
    })
  }

  const [ekleKontrol, setEkleKontrol] = useState(false)
  const [ekle, setEkle] = useState('')

  const meyveEkle = (ekle) => {
    if(ekle===''){

    }else{  const varMi = meyveList?.includes(ekle)
    if (varMi === true) {
      setEkle('')
      return alert('zaten olan bir meyve eklediniz')
    } else { setMeyveList([...meyveList, ekle]) 
      
    }}    
    setEkle('')
}

const meyveSil=(ekle)=>{
  if(ekle===''){

  }else{
    const sil=meyveList.includes(ekle)
    if(sil===true){
      setMeyveList([...meyveList.filter(item=>item!==ekle)])
      setEkle('')
    }else{
      setEkle('')
      return alert('Böyle bir meyve kayıtlı değil')
      
    }
  }
  
}



  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", marginTop:"10px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <input onChange={(e) => meyveFiltrele(e.target.value)} type='search' />

        <button onClick={() => { setEkleKontrol(!ekleKontrol); meyveEkle(ekle); }}>Ekle</button>
        <button onClick={() => { setEkleKontrol(!ekleKontrol); meyveSil(ekle)}}>Sil</button>
        <input style={{ display: ekleKontrol ? "flex" : "none" }} onChange={(e) => { setEkle(e.target.value) }} type='text' value={ekle} />
        <span> </span>
        <span> </span>
      </div>

      <ul>
        {(aramaTut.search === '' ? meyveList?.map(item => { return <li>{item}</li> }) : aramaTut.sonucs.map(items => {
          return <li>{items}</li>
        }))}
      </ul>


    </div>
  );
}

export default App;
