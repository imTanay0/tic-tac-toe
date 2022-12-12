const line1 = (
  <div
    style={{
      position: 'absolute',
      left: '0',
      right: '0',
      margin: 'auto',
      zIindex: '10',

      height: '3px',
      width: '260px',
      backgroundColor: '#000',
      top: '110px',
    }}
  />
)
const line2 = (
  <div
    style={{
      position: 'absolute',
      left: '0',
      right: '0',
      margin: 'auto',
      zIindex: '10',

      height: '3px',
      width: '260px',
      backgroundColor: '#000',
      top: '210px',
    }}
  />
)
const line3 = (
  <div
    style={{
      position: 'absolute',
      left: '0',
      right: '0',
      margin: 'auto',
      zIindex: '10',

      height: '3px',
      width: '260px',
      backgroundColor: '#000',
      top: '309.5px',
    }}
  />
)

const WinnerStyle = () => {
  return (
    <div>
      {line1}
      {line2}
      {line3}
    </div>
  )
}

export default WinnerStyle