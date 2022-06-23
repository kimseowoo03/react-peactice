import data from '../data.json'
import './Table.css'

function Table() {
  return(
    <div className='table'>
    <ul>
      <li>Size</li>
      <li>Shoulder</li>
      <li>Bust</li>
      <li>Sleeves</li>
      <li>Wrist</li>
      <li>Armhole</li>
      <li>Length</li>
    </ul>
    <ul>
    <li>{data[0].size}</li>
    {data[0].value === 0 ?<li>-</li> :<li>{data[0].value}</li>}
    {data[1].value === 0 ?<li>-</li> :<li>{data[1].value}</li>}
    {data[2].value === 0 ?<li>-</li> :<li>{data[2].value}</li>}
    {data[3].value === 0 ?<li>-</li> :<li>{data[3].value}</li>}
    {data[4].value === 0 ?<li>-</li> :<li>{data[4].value}</li>}
    {data[5].value === 0 ?<li>-</li> :<li>{data[5].value}</li>}
  </ul>
  </div>
  )
}

export default Table;