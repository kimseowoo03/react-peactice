import data from '../data.json'
import './Table.css'

function Table() {
  return(
    <div className='table'>
    <ul className='table-ul'>
      <li className='table-li'>Size</li>
      {data.map(data => <li className='table-li'>{data.sizeInfoMaster.title}</li>)}
    </ul>
    <ul className='table-ul'>
    <li className='table-li'>{data[0].size}</li>
    {data.map(data => data.value === 0 ? <li className='table-li'>-</li>: <li className='table-li'>{data.value}</li>)}
  </ul>
  </div>
  )
}

export default Table;