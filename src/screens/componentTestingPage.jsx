import React, { Component } from 'react';
import BalanceAddedModal from '../components/balanceAddedModal';
import PopupErrorMessage from '../components/popupErrorMessage';
import PopupStudentApprovalPage from '../components/popupStudentApprovalScreen';
import ProductCard from '../components/productCard';
import PurchaseHistroy from '../components/purchaseHistroy';
import SuccessfulPurchasePopup from '../components/successfulPurchasePopup';

function ComponentTesting() {
    return ( 
        <div className="componentTestingContainer" style={{backgroundColor: "white", width: "100vw", height: "100vh"}}>
            {/* <BalanceAddedModal></BalanceAddedModal> */}
            <PurchaseHistroy/>
        </div>
     );
}

export default ComponentTesting;