import data2 from "../data2.json";
import "./Table2.css";

const Table2 = () => {
  const data2TitleMap = data2.map((v) => v.sizeInfoMaster.title);
  let data2Title = [...new Set(data2TitleMap)];

  const data2SizeMap = data2.map((v) => v.size);
  let data2Size = [...new Set(data2SizeMap)];

  // sizeInfoMaster.id만 거르기
  const data2IdArr = data2.map((data) => data.sizeInfoMaster.id);
  let data2IdSet = [...new Set(data2IdArr)];

  return (
    <>
      <div className="table-gap"></div>
      {/* sizeInfoMaster.id로 규칙성 구별*/}
      {data2IdSet[0] + 1 === data2IdSet[1] ? (
        /* 연속 규칙성을 나타내는 Data ( O )*/
         /* 하나의 표로 보여짐*/
        <div className="table-two">
          <ul className="table-two-ul">
            <li>Size</li>
            {data2Title.map((title) => (
              <li>{title}</li>
            ))}
          </ul>
          {data2Size.map((size) => {
            return (
              <ul className="table-two-ul">
                <li>{size}</li>
                {data2.map((v) => {
                  return v.size === size ? (
                    v.value !== 0 ? (
                      <li>{v.value}</li>
                    ) : (
                      <li>-</li>
                    )
                  ) : (
                    false
                  );
                })}
              </ul>
            );
          })}
        </div>
      ) : (
         /* 연속 규칙성을 나타내는 Data ( X )*/
         /* 두개의 표로 보여짐*/
        <>
        {/* id가 짝수일 때 출력*/}
          <div className="table-two">
            <ul className="table-two-ul ">
              <li>Size</li>
              {data2.map(
                (data) =>
                  data.id % 2 !== 0 || <li>{data.sizeInfoMaster.title}</li>
              )}
            </ul>
            {data2Size.map((size) => {
              return (
                <ul className="table-two-ul">
                  <li>{size}</li>
                  {data2.map((data) => {
                    return data.size === size
                      ? data.id % 2 !== 0 || (
                          <li>{data.value !== 0 ? data.value : "-"}</li>
                        )
                      : false;
                  })}
                </ul>
              );
            })}
          </div>

          <div className="table-gap1"></div>
          {/*id가 홀수일 때 출력 */}
          <div className="table-two">
            <ul className="table-two-ul ">
              <li>Size</li>
              {data2.map(
                (data) =>
                  data.id % 2 === 0 || <li>{data.sizeInfoMaster.title}</li>
              )}
            </ul>
            {data2Size.map((size) => {
              return (
                <ul className="table-two-ul">
                  <li>{size}</li>
                  {data2.map((data) => {
                    return data.size === size
                      ? data.id % 2 === 0 || (
                          <li>{data.value !== 0 ? data.value : "-"}</li>
                        )
                      : false;
                  })}
                </ul>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};
export default Table2;
