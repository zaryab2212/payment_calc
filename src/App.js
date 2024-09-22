import React, { useState } from "react";

const App = () => {
  const [interstRate, setInterstRate] = useState(null);
  const [processingFee, setProcessingFee] = useState(null);
  const [totalCost, setTotalCost] = useState(null);
  const [downPayment, setDownPayment] = useState(null);
  const [totalPayment, setTotalPayment] = useState(0);

  let processingFeePercentage =
    totalCost - downPayment + (totalCost / 100) * processingFee;

  let totalIntrest = (totalCost * interstRate) / 100;

  let totalDownPayment =
    downPayment + ((totalCost - downPayment) * processingFee) / 100;

  // let totaloanAmount =
  //   +inputVal.totalCost + +processingFeePercentage - +totalDownPayment;

  // const [totalLoanAmount, SetTotalLoanAmount] = useState();
  // const handleChange = (e) => {
  //   setInputVal({ ...inputVal, [e.target.name]: e.target.value });
  // };

  // const handleTotalLoan = (e) => {
  //   SetTotalLoanAmount(+e.target.value);
  //   let totaloanAmount =
  //     +inputVal.totalCost + +processingFeePercentage - +totalDownPayment;
  //   setInputVal({
  //     ...inputVal,
  //     downPayment:
  //       +inputVal.totalCost +
  //       +processingFeePercentage +
  //       totalIntrest -
  //       +e.target.value,
  //   });
  // };

  // function handleDownPayment(e) {
  //   setDownPayment(e.target.value);
  //   setTotalDownPayment(+processingFeePercentage + +(+e.target.value));
  // }

  return (
    <>
      <div>
        <input
          type="number"
          name="totalCost"
          value={totalCost}
          onChange={(e) => setTotalCost(+e.target.value)}
          placeholder="tottal cost"
        />
        <input
          type="number"
          name="processingFee"
          value={processingFee}
          onChange={(e) => setProcessingFee(+e.target.value)}
          placeholder="Processig Fee"
        />
        <input
          type="number"
          name="interstRate"
          value={interstRate}
          onChange={(e) => setInterstRate(+e.target.value)}
          placeholder="interst rate"
        />
      </div>
      <h2>
        Total Down payment <p>{downPayment}</p>
      </h2>
      <input
        type="range"
        name="downPayment"
        min={0}
        max={totalCost}
        value={downPayment}
      />
      <h2>total down payment is {totalDownPayment}</h2>
      {/* <div>
        <h2>
          Total Loan Amout "{" "}
          {totaloanAmount + (+inputVal?.interstRate * totaloanAmount) / 100} "
        </h2>

        {totalLoanAmount}
        <input
          type="range"
          min={0}
          max={+inputVal.totalCost + +processingFeePercentage}
          value={totalLoanAmount}
          onChange={handleTotalLoan}
        />
      </div> */}
    </>
  );
};

export default App;
