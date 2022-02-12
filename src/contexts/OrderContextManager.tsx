import React, {useEffect} from 'react';

type OrderContext = {
    
};

export const OrderContext = React.createContext<OrderContext>({});

const OrderContextManager: React.FC<{}> = ({children}) => {

  useEffect(() => {}, []);

  return (
    <OrderContext.Provider
      value={{
        
      }}>
      {children}
    </OrderContext.Provider>
  );
};

export default OrderContextManager;
