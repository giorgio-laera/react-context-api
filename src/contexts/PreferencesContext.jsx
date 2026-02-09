import { createContext, useContext, useState } from "react";

const BudgetContext = createContext(null);

function BudgetProvider({ children }) {
    
    const [budget, setBudget] = useState(false)

function toggleBudget (){

const newDate = !budget;

setBudget(newDate)
console.log('toggle',toggleBudget)
}
function switchText () {
    console.log('switsh',switchText)
    return budget ? "Disattiva Modalita Budget" : "Attiva Modalita Budget";
}
const exportValue={budget, toggleBudget, switchText}
    return < BudgetContext.Provider value = {exportValue} >
   
             { children }
     </BudgetContext.Provider>
}
function useBudget() {
    const Context = useContext(BudgetContext);
    return Context;
}
export { BudgetProvider, useBudget };