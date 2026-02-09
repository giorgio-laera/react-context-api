import { createContext, useContext, useState } from "react";

const BudgetContext = createContext(null);

function BudgetProvider({ children }) {
    
    const [budget, setBudget] = useState(false)

function toggleBudget (){

const newDate = !budget;

setBudget(newDate)

}

const exportValue={budget, toggleBudget}
    return < BudgetContext.Provider value = {exportValue} >
   
             { children }
     </BudgetContext.Provider>
}
function useBudget() {
    const Context = useContext(BudgetContext);
    return Context;
}
export { BudgetProvider, useBudget };