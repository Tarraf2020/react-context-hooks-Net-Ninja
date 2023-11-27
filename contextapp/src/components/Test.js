import React from "react";

function Test() {
  const [data, setData] = React.useState([]);
 
  React.useEffect(() => {
    const ali = [
        {
          category: "cash",
          ammount: 200,
          type: "fixed",
          date: "12/12/1212",
          status: "+",
        },
        {
          category: "sfda",
          ammount: 466,
          type: "recursive",
          date: "12/12/1212",
          status: "-",
        },
        {
          category: "cash",
          ammount: 200,
          type: "fixed",
          date: "12/12/1212",
          status: "+",
        },
        {
          category: "cash",
          ammount: 200,
          type: "fixed",
          date: "12/12/1212",
          status: "-",
        },
        {
          category: "cash",
          ammount: 200,
          type: "fixed",
          date: "12/12/1212",
          status: "+",
        },
        {
          category: "cash",
          ammount: 200,
          type: "fixed",
          date: "12/12/1212",
          status: "-",
        },
        {
          category: "cash",
          ammount: 200,
          type: "fixed",
          date: "12/12/1212",
          status: "+",
        },
        {
          category: "cash",
          ammount: 200,
          type: "fixed",
          date: "12/12/1212",
          status: "-",
        },
        {
          category: "cash",
          ammount: 200,
          type: "fixed",
          date: "12/12/1212",
          status: "+",
        },
      ];
      
    setData(ali);
  }, []);

const deleteBtn = (e) => {
//axios.delete( blvadbfovueyg)
alert(`this is the id of the deleted history ${e}` )
}

  return (
    <div className="body">
      <div className="container">
        <h4>Your Balance</h4>
        <h1 id="balance">$0.00</h1>
        <div className="inc-exp-container">
          <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">
              +$0.00
            </p>
          </div>
          <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus">
              -$0.00
            </p>
          </div>
        </div>
        <h3>History</h3>
        <ul id="list" className="list">
          {data.map((e, index) => (
            <li className="minus" key={index}>
              {e.category}{" "}
              <span>
                {e.status}${e.ammount}
              </span>
              <button className="delete-btn" onClick={()=> deleteBtn(e.ammount)}>x</button>
            </li>
          ))}
        </ul>
        {/* <h3>Add new transaction</h3>
        <form id="form">
          <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" id="text" placeholder="Enter text..." />
          </div>
          <div className="form-control">
            <label htmlFor="amount">
              Amount <br />
              (negative - expense, positive - income)
            </label>
            <input type="number" id="amount" placeholder="Enter amount..." />
          </div>
          <button className="btn">Add transaction</button>
        </form> */}
        <button className="btn">Add transaction</button>
      </div>
    </div>
  );
}

export default Test;
