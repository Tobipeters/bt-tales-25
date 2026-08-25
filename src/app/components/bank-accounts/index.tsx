import {
  Building,
  User,
  Hash,
  Copy,
  CheckCircle,
  CreditCard,
} from "lucide-react";
import { useState } from "react";

export const BankAccounttModal = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const copyToClipboard = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  const bankOptions = [
    {
      id: 1,
      bankName: "GT Bank",
      accountName: "Boluwatife Sowo",
      accountNumber: "0072795157",
      accountType: "Savings Account",
      recommended: false,
    },
    {
      id: 2,
      bankName: "Opay",
      accountName: "Oluwatobi Peter Taiwo",
      accountNumber: "0236375924",
      accountType: "Saving Account",
      recommended: false,
    },
  ];

  return (
    <div className="bank-container">
      {/* Page Header */}
      <div className="page-header !py-5 !px-4 lg:!px-5 text-center md:!py-7">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-4">
            <div className="p-4 bg-white/20 rounded-full">
              <CreditCard size={32} className="text-white" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Choose Payment Account
          </h1>
          <p className="text-white/80 text-sm max-w-md !mx-auto">
            Select any of the bank accounts below and copy the details for your
            payment
          </p>
        </div>
      </div>
      <div className="!w-full mx-auto !px-4 lg:!px-5 !py-5 lg:!py-7">
        <div className="w-full grid gap-6 md:grid-cols-2">
          {bankOptions.map((account) => (
            <div
              key={account.id}
              className={`account-card rounded-2xl overflow-hidden relative ${
                account.recommended ? "recommended-card" : ""
              }`}
            >
              {/* Recommended Badge */}
              {account.recommended && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="recommended-badge !px-3 py-1 rounded-full">
                    <span className="text-xs font-semibold text-white">
                      Recommended
                    </span>
                  </div>
                </div>
              )}

              {/* Account Header */}
              <div className="account-header !px-4 lg:!px-5 !py-4">
                <div className="flex items-center gap-3">
                  <div className="icon-container !p-2 rounded-lg">
                    <Building
                      size={20}
                      style={{ color: "var(--primary-burgundy)" }}
                    />
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-base"
                      style={{ color: "var(--text-primary)" }}
                    >
                      {account.bankName}
                    </h3>
                    <p
                      className="text-sm"
                      style={{ color: "var(--text-light)" }}
                    >
                      {account.accountType}
                    </p>
                  </div>
                </div>
              </div>

              {/* Account Details */}
              <div className="space-y-0">
                {/* Account Name */}
                <div className="detail-row !px-4 lg:!px-5 !py-4 rounded-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="icon-container !p-2 rounded-lg">
                        <User
                          size={16}
                          style={{ color: "var(--primary-burgundy)" }}
                        />
                      </div>
                      <div>
                        <p
                          className="text-xs font-medium"
                          style={{ color: "var(--text-light)" }}
                        >
                          Account Name
                        </p>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {account.accountName}
                        </p>
                      </div>
                    </div>
                    {/* <button
                      onClick={() =>
                        copyToClipboard(
                          account.accountName,
                          `name-${account.id}`
                        )
                      }
                      className={`copy-button !px-3 !py-2 rounded-lg text-xs font-medium flex items-center gap-1 ${
                        copiedField === `name-${account.id}`
                          ? "copy-success"
                          : ""
                      }`}
                    >
                      {copiedField === `name-${account.id}` ? (
                        <>
                          <CheckCircle size={14} />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Copy</span>
                        </>
                      )}
                    </button> */}
                  </div>
                </div>

                {/* Account Number */}
                <div className="detail-row !px-4 lg:!px-5 !py-4 rounded-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="icon-container !p-2 rounded-lg">
                        <Hash
                          size={16}
                          style={{ color: "var(--primary-burgundy)" }}
                        />
                      </div>
                      <div>
                        <p
                          className="text-xs font-medium"
                          style={{ color: "var(--text-light)" }}
                        >
                          Account Number
                        </p>
                        <p
                          className="text-sm font-semibold account-number"
                          style={{ color: "var(--text-primary)" }}
                        >
                          {account.accountNumber}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() =>
                        copyToClipboard(
                          account.accountNumber,
                          `number-${account.id}`
                        )
                      }
                      className={`copy-button !px-3 !py-2 rounded-lg text-xs font-medium flex items-center gap-1 ${
                        copiedField === `number-${account.id}`
                          ? "copy-success"
                          : ""
                      }`}
                    >
                      {copiedField === `number-${account.id}` ? (
                        <>
                          <CheckCircle size={14} />
                          <span>Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy size={14} />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Instructions */}
        <div className="!mt-5 text-center lg:!mt-8">
          <div
            className="inline-block !px-4 lg:!px-5 !py-4 rounded-xl"
            style={{
              background: "var(--bg-primary)",
              border: "1px solid var(--border-color)",
            }}
          >
            <p
              className="text-sm font-medium mb-2"
              style={{ color: "var(--text-primary)" }}
            >
              💡 How to use
            </p>
            <p className="text-xs" style={{ color: "var(--text-light)" }}>
              You may choose any account above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
