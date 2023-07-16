import { useDispatch, useSelector } from "react-redux";
import { countUp, deleteCart, countDown } from "../store";

function Cart() {
  let stock = useSelector((state) => {
    return state.stock;
  });
  let dispatch = useDispatch();
  let totprice=0;
  
  

  return (
    <div>
      <div className="CartTable">
        <div className="CartHeader">
          <h2 style={{marginTop:'20px'}}>장바구니</h2>
        </div>
        <table className="Cart">
          <thead>
            <tr>
              <th>#</th>
              <th style={{ width: "500px" }}>상품정보</th>
              <th>수량</th>
              <th>금액</th>
            </tr>
          </thead>
          <tbody>
            {stock.map((a, i) => {
              totprice+=a.price*a.count
              return (
                
                <tr key={i}>
                  <td>{a.id}</td>
                  <td>
                    <img
                      src={`https://raw.githubusercontent.com/roby4657/db/main/shoes${
                        a.id + 1
                      }.jpg`}
                      height={120}
                    ></img>
                    {a.name}
                  </td>
                  <td>
                    <button 
                      className="CartPlusBtn"
                      onClick={() => {
                        dispatch(countDown(a.id));
                      }}
                    >
                      -
                    </button>
                    <input type="text" style={{width:'30px',textAlign:'center'}} value={a.count} />
                    <button
                      className="CartMinusBtn"
                      onClick={() => {
                        dispatch(countUp(a.id));
                      }}
                    >
                      +
                    </button>
                    &nbsp;
                    <button className="CartDeleteBtn"
                      onClick={() => {
                        dispatch(deleteCart(a.id));
                      }}
                    >
                      X
                    </button>
                  </td>
                  <td>
                    <span>{(a.price*a.count).toLocaleString()}원</span>
                  </td>
            
                </tr>
              );
            })}
          </tbody>
        </table>

        <table className="CartBill">
          <thead>
            <th>
              <div className="CartPrice">
                <span>주문금액</span>
                <span>{(totprice).toLocaleString()}원</span>
              </div>
            </th>
            <th className="icon-minus">
              <div className="CartPrice">
                <span>할인금액</span>
                <span>{(totprice*0.1).toLocaleString()}원</span>
              </div>
            </th>
            <th className="icon-equal">
              <div className="CartPrice">
                <span>총 결제금액</span>
                <span>{(totprice*0.9).toLocaleString()}원</span>
              </div>
            </th>
          </thead>
          <tbody>
            <td>
              <div className="CartPrice">
                <span>상품금액</span>
                <span>{(totprice).toLocaleString()}원</span>
              </div>
            </td>
            <td>
              <div className="CartPrice">
                <span>프로모션 10%</span>
                <span>{(totprice*0.1).toLocaleString()}원</span>
              </div>
            </td>
            <td>
              <div className="CartPrice">
                <span>결제예정금액</span>
                <span>{(totprice*0.9).toLocaleString()}원</span>
              </div>
            </td>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cart;
