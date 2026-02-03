import { useState } from 'react'
import './App.css'

function App() {
  const [deger, setDeger] = useState("");

  const tikla = (butonDegeri) => {
    setDeger(deger + butonDegeri);
  }

  const temizle = () => setDeger("");
  const sil = () => setDeger(deger.slice(0, -1));

  const hesapla = () => {
    try {
      // eval() kullanımı basit projeler için uygundur
      setDeger(eval(deger).toString());
    } catch {
      setDeger("Hata!");
    }
  }

  return (
    <>
      {/* Hareketli Arka Plan Baloncukları */}
      <div className="background-animate">
        <div className="circle" style={{width: '200px', height: '200px', top: '10%', left: '10%'}}></div>
        <div className="circle" style={{width: '150px', height: '150px', bottom: '20%', right: '15%', animationDuration: '15s'}}></div>
        <div className="circle" style={{width: '100px', height: '100px', top: '40%', right: '30%', animationDuration: '7s'}}></div>
        <div className="circle" style={{width: '250px', height: '250px', bottom: '5%', left: '20%', animationDuration: '20s'}}></div>
      </div>
      
      {/* Hesap Makinesi Kasası */}
      <div className="hesap-makinesi">
        <div className="ekran">{deger || "0"}</div>
        <div className="butonlar">
          <button className="btn ac" onClick={temizle}>AC</button>
          <button className="btn c" onClick={sil}>C</button>
          <button className="btn opt" onClick={() => tikla('%')}>%</button>
          <button className="btn esittir" onClick={hesapla}>=</button>

          <button className="btn" onClick={() => tikla('7')}>7</button>
          <button className="btn" onClick={() => tikla('8')}>8</button>
          <button className="btn" onClick={() => tikla('9')}>9</button>
          <button className="btn opt" onClick={() => tikla('+')}>+</button>

          <button className="btn" onClick={() => tikla('4')}>4</button>
          <button className="btn" onClick={() => tikla('5')}>5</button>
          <button className="btn" onClick={() => tikla('6')}>6</button>
          <button className="btn opt" onClick={() => tikla('-')}>-</button>

          <button className="btn" onClick={() => tikla('1')}>1</button>
          <button className="btn" onClick={() => tikla('2')}>2</button>
          <button className="btn" onClick={() => tikla('3')}>3</button>
          <button className="btn opt" onClick={() => tikla('*')}>×</button>

          <button className="btn sifir" onClick={() => tikla('0')}>0</button>
          <button className="btn" onClick={() => tikla('.')}>.</button>
          <button className="btn opt" onClick={() => tikla('/')}>÷</button>
        </div>
      </div>
    </>
  )
}

export default App