const BillingSidebar = ({ label, handleNext }) => {
  return (
    <div className="col-span-12 md:col-span-4 p-4 max-h-[480px] border border-[#EBEBEB] rounded-lg mb-4">
      <p className="font-Playfair font-bold text-xl leading-[30px] text-primary border-b border-[#EBEBEB] pb-3 mb-4">
        Cart Total
      </p>
      <div className="flex justify-between mb-2">
        <p className="font-Raleway font-bold text-sm leading-[21px] text-primary">
          Subtotal
        </p>
        <p className="font-Raleway font-semibold text-base leading-6 text-success">
          $ 1,750
        </p>
      </div>
      <div className="flex justify-between mb-2">
        <p className="font-Raleway font-bold text-sm leading-[21px] text-primary">
          Shipping
        </p>
        <p className="font-Raleway font-semibold text-base leading-6 text-success">
          $ 16
        </p>
      </div>
      <div className="flex justify-between mb-2">
        <p className="font-Raleway font-bold text-sm leading-[21px] text-primary">
          Discount (15%)
        </p>
        <p className="font-Raleway font-semibold text-base leading-6 text-success">
          $ 56
        </p>
      </div>
      <div className="flex justify-between mb-2">
        <p className="font-Raleway font-bold text-sm leading-[21px] text-primary">
          VAT
        </p>
        <p className="font-Raleway font-semibold text-base leading-6 text-success">
          7%
        </p>
      </div>
      <div className="flex justify-between bg-[#F8F8F8] px-3 py-6 rounded-md">
        <p className="font-Raleway font-bold text-sm leading-[21px] text-primary">
          Total
        </p>
        <p className="font-Raleway font-semibold text-base leading-6 text-success">
          $ 1,750
        </p>
      </div>

      <div className="pt-4 mb-4">
        <p className="font-Raleway font-bold text-xs leading-[18px] text-success mb-3">
          Order Comment
        </p>
        <input
          className="h-[70px] w-full px-3 border border-[#B2BCCA] rounded outline-none"
          type=""
          name=""
          
          placeholder="Type here..."
        />
      </div>
      <button
        onClick={handleNext}
        className="next-button h-10 lg:h-[52px] w-full bg-[#248C80] shadow-[0_20px_24px_-4px_rgba(0,0,0,0.08),0_8px_8px_-4px_rgba(0,0,0,0.03)] rounded font-Raleway font-bold text-base leading-6 text-white"
        type=""
      >
        {label ? <span>Proceed to {label}</span> : <span>Pay $ 1,750 </span>}
      </button>
    </div>
  );
};

export default BillingSidebar;
