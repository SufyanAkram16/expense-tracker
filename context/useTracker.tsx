import { useState, useEffect } from "react";

const useTracker = () => {
  type transactionType = {
    text: string;
    amount: number;
  };
  const [textInput, setTextInput] = useState<string>("");
  const [numInput, setNumInput] = useState<number>(0);
  const [transaction, setTransaction] = useState<transactionType[]>([]);
  const [expense, setExpense] = useState<number>(0);
  const [income, setIncome] = useState<number>(0);
  const [balance, setBalance] = useState<number>(0);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      transaction;
      income;
      expense;
    }

    setIsOpen(false)
  }, [isOpen, setIsOpen, setIncome,transaction,setExpense, expense,income]);

  const addTransaction = () => {
    const newTrx: transactionType = {
      text: textInput,
      amount: numInput,
    };

    setTransaction([...transaction, newTrx]);
    setIncome(getIncome());
    setExpense(getExpense());

    setIsOpen(true);

    console.log(transaction)
    console.log("income", income)
    console.log("expense", expense)
  };

  

  const getIncome = () => {
    let totalIncome = 0;
    for (let index = 0; index < transaction.length; index++) {
      const element = transaction[index];
      if (numInput > 0) {
        totalIncome += element.amount;
      }
    }
    return totalIncome;
  };

  const getExpense = () => {
    let totalExpense = 0;
    for (let index = 0; index < transaction.length; index++) {
      const element = transaction[index];
      if (numInput < 0) {
        totalExpense += element.amount;
      }
    }
    return totalExpense;
  };

  return {
    textInput,
    setTextInput,
    numInput,
    setNumInput,
    expense,
    setExpense,
    balance,
    setBalance,
    income,
    setIncome,
    transaction,
    setTransaction,
    addTransaction,
    getExpense,
    getIncome,
  };
};

export default useTracker;

// i want to create a custom hook in which the logic
