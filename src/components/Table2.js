import data2 from '../data2.json'
import "./Table2.css"

const Table2 = () => {
  const data2TitleMap = data2.map(v => v.sizeInfoMaster.title)
  let data2Title = [...new Set(data2TitleMap)];

  const data2SizeMap = data2.map(v => v.size)
  let data2Size = [...new Set(data2SizeMap)]

  return(
    <>
    <div className='table-gap'></div> 
    <div className='table-two'>
    <ul className='table-two-ul'>
      <li className='table-two-li'>Size</li>
      {data2Title.map(title => <li className='table-two-li'>{title}</li>)}
    </ul>
    {data2Size.map((size) => {
      return(
        <ul className='table-two-ul'>
          <li className='table-two-li'>{size}</li>
          {data2.map((v) => {
            return v.size === size ? v.value !== 0 ?<li className='table-two-li'>{v.value}</li> : <li className='table-two-li'>-</li> : false
          })}
        </ul>
      )
    })}
  </div>
  </>
  )
}
export default Table2;