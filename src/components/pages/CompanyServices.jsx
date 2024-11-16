import React from 'react';
import BuyerGuide from '../../app/company-services/buyerGuide';
import ContentSplit from '../../app/company-services/contentSplitSection';
import SellersGuide from '../../app/company-services/sellersGuideSection';
import SellingSteps from '../../app/company-services/SellingStepsSection';
import MarketingSection from '../../app/company-services/marketingSection';

const CompanyServices = () => {
    return (
        <div className="relative space-y-5 lg:space-y-20 bg-gradient-to-b from-[#3e1d2e] to-[#2d0f1e]">
            {/* Hero Section for Buyer’s Guide with Parallax */}
            <BuyerGuide />

            {/* Content Split Section */}
            <ContentSplit />

            {/* Seller’s Guide Section with Parallax */}
            <SellersGuide />

            {/* Selling Steps Section */}
            <SellingSteps />

            {/* Marketing Section */}
            <MarketingSection />
        </div>
    );
};

export default CompanyServices;
