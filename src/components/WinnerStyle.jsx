const line1 = (
  <div className="line-div"
    style={{
      position: 'absolute',
      left: '0',
      right: '0',
      margin: 'auto',
      zIindex: '10',

      height: '3px',
      width: '260px',
      backgroundColor: '#fff',
      top: '111px',

      
    }}
  />
)
const line2 = (
  <div className="line-div"
    style={{
      position: 'absolute',
      left: '0',
      right: '0',
      margin: 'auto',
      zIindex: '10',

      height: '3px',
      width: '260px',
      backgroundColor: '#fff',
      top: '210px',

      // transition: '1s ease-in-out'
    }}
  />
)
const line3 = (
  <div className="line-div"
    style={{
      position: 'absolute',
      left: '0',
      right: '0',
      margin: 'auto',
      zIindex: '10',

      height: '3px',
      width: '260px',
      backgroundColor: '#fff',
      top: '309px',

      // transition: '1s ease-in-out'
    }}
  />
)

const line4 = (
  <div className="line-div"
    style={{
      position: 'absolute',
      left: '-197px',
      right: '0',
      margin: 'auto',
      zIindex: '10',

      height: '260px',
      width: '3px',
      backgroundColor: '#fff',
      top: '84px',

      // transition: '1s ease-in-out'
    }}
  />
)
const line5 = (
  <div className="line-div"
    style={{
      position: 'absolute',
      left: '2px',
      right: '0',
      margin: 'auto',
      zIindex: '10',

      height: '260px',
      width: '3px',
      backgroundColor: '#fff',
      top: '84px',

      // transition: '1s ease-in-out'
    }}
  />
)
const line6 = (
  <div className="line-div"
    style={{
      position: 'absolute',
      left: '199px',
      right: '0',
      margin: 'auto',
      zIindex: '10',

      height: '260px',
      width: '3px',
      backgroundColor: '#fff',
      top: '84px',

      // transition: '1s ease-in-out'
    }}
  />
)
const line7 = (
  <div className="line-div"
    style={{
      position: 'absolute',
      left: '0',
      right: '0',
      margin: 'auto',
      zIindex: '10',

      height: '320px',
      width: '3px',
      backgroundColor: '#fff',
      top: '51px',
      rotate: '-45deg',

      // transition: '1s ease-in-out'
    }}
  />
)
const line8 = (
  <div className="line-div"
    style={{
      position: 'absolute',
      left: '0',
      right: '0',
      margin: 'auto',
      zIindex: '10',

      height: '320px',
      width: '3px',
      backgroundColor: '#fff',
      top: '51px',
      rotate: '45deg',

      // transition: '1s ease-in-out'
    }}
  />
)
const lineDivs = document.getElementsByClassName('line-div')

const mediaQuery = window.matchMedia('(max-width: 700px)')

if (mediaQuery.matches) {
  // lineDivs[0].style.backgroundColor = 'red'
  console.log("media query reached")
}

// if (matchMedia("(max-width: 620px)").matches) {
//   lineDiv[0].style.backgroundColor = 'red'
// }

const LINES = [line1, line2, line3, line4, line5, line6, line7, line8]

export default LINES;