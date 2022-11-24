import './App.css'
import { useEffect } from 'react'

function App () {
  let touchstartX = 0
  let touchendX = 0

  function checkDirection () {
    if (touchendX < touchstartX) window.confirm('swiped left!')
    if (touchendX > touchstartX) window.confirm('swiped right!')
  }
  function touchStart (e) {
    touchstartX = e.changedTouches[0].screenX
  }
  function touchEnd (e) {
    touchendX = e.changedTouches[0].screenX
    checkDirection()
  }

  useEffect(() => {
  window.addEventListener('touchstart',touchStart);
  window.addEventListener('touchend',touchEnd);

  // window.addEventListener('swiped-left',(e)=>{
  //   window.alert('Swiped-left')
  // })
  // window.addEventListener('swiped-right',e=>{
  //   window.alert('swiped-right')
  // })
  },[])
  return <>This is the page</>
}

export default App
