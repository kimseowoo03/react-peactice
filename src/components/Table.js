import data from '../data.json'
import './Table.css'

function Table() {
  return(
    <table>
        <thead>
          <tr className='table-first-tr'>
            <th>Size</th>
            <th>Shoulder</th>
            <th>Bust</th>
            <th>Sleeves</th>
            <th>Wrist</th>
            <th>Armhole</th>
            <th>Length</th>
          </tr>
        </thead>
        <tbody>
          <tr tr className='table-second-tr'>
            <th>{data[0].size}</th>
            {data[0].value === 0 ?<th> - </th>: <th>{data[0].value}</th>}
            {data[1].value === 0 ?<th> - </th>: <th>{data[1].value}</th>}
            {data[2].value === 0 ?<th> - </th>: <th>{data[2].value}</th>}
            {data[3].value === 0 ?<th> - </th>: <th>{data[3].value}</th>}
            {data[4].value === 0 ?<th> - </th>: <th>{data[4].value}</th>}
            {data[5].value === 0 ?<th> - </th>: <th> {data[5].value}</th>}
          </tr>
        </tbody>
      </table>
  )
}

export default Table;