import { createContext, useContext, useState } from "react";

const BudgetContext = createContext(null);

function BudgetProvider({ children }) {
    
    const [budget, setBudget] = useState(false)

    return < BudgetContext.Provider value = { [budget, setBudget]} >
   
             { children }
     </BudgetContext.Provider>
}
function useBudget() {
    const Context = useContext(BudgetContext);
    return Context;
}
export { BudgetProvider, useBudget };