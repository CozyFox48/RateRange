import React, { createContext, useState } from 'react';

export const QueryContext = createContext();

export const QueryProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState({
    fee_ongoing: null,
    fee_upfront: null,
    age_restriction: null,
    loanPurpose: "undefined",
    rateType: "undefined",
    repaymentType: "undefined",
    total_amount: 9000000,
    borrow_amount: 8000000,
    fixed_term: 0,
    period: 30,
    feature_offset: null,
    feature_redraw: null,
    feature_extra: null,
    feature_cashback: null
  });

  return (
    <QueryContext.Provider
      value={{
        searchQuery, setSearchQuery
      }}>
      {children}
    </QueryContext.Provider>
  );
};