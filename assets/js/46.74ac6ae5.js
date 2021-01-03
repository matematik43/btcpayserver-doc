(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{460:function(e,t,i){e.exports=i.p+"assets/img/PaidInvoice.82c470c8.png"},652:function(e,t,i){"use strict";i.r(t);var o=i(26),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"btcpay-stores-frequently-asked-questions"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#btcpay-stores-frequently-asked-questions"}},[e._v("#")]),e._v(" BTCPay Stores Frequently Asked Questions.")]),e._v(" "),o("p",[e._v("This page shows common issues and frequently asked questions about Stores in BTCPay.")]),e._v(" "),o("ul",[o("li",[o("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores/#how-to-create-a-store-in-btcpay"}},[e._v("How to create a store in BTCPay?")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores/#how-many-stores-can-i-create"}},[e._v("How many stores can I create?")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores/#why-are-invoices-without-payment-showing-as-complete"}},[e._v("Why are invoices without payment showing as complete?")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores/#add-network-fee-to-invoice-vary-with-mining-fees"}},[e._v("Add network fee to invoice (vary with mining fees)?")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores/#allow-anyone-to-create-invoice"}},[e._v("Allow anyone to create invoice?")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores/#invoice-expires-if-the-full-amount-has-not-been-paid-after-minutes"}},[e._v("Invoice expires if the full amount has not been paid after ... minutes?")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores/#payment-invalid-if-transactions-fails-to-confirm-minutes-after-invoice-expiration"}},[e._v("Payment invalid if transactions fails to confirm ... minutes after invoice expiration?")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores/#consider-the-invoice-confirmed-when-the-payment-transaction"}},[e._v("Consider the invoice confirmed when the payment transaction?")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores/#consider-the-invoice-paid-even-if-the-paid-amount-is-less-than-expected"}},[e._v("Consider the invoice paid even if the paid amount is ... % less than expected?")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores/#how-to-disable-email-on-invoices"}},[e._v("How to disable email on invoices?")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores/#how-to-collect-additional-buyer-information"}},[e._v("How to collect additional buyer information?")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores/#how-to-redirect-store-invoices-after-payment"}},[e._v("How to redirect store invoices after payment?")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores/#can-i-delete-invoices-from-btcpay"}},[e._v("Can I delete invoices from BTCPay?")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores/#how-to-change-the-exchange-rate-provider-for-invoices"}},[e._v("How to change the exchange rate provider for invoices?")])],1),e._v(" "),o("li",[o("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores/#getting-getratesasync-was-called-on-coinaverage-error"}},[e._v("Getting GetRatesAsync was called on coinaverage error")])],1)]),e._v(" "),o("h2",{attrs:{id:"how-to-create-a-store-in-btcpay"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-create-a-store-in-btcpay"}},[e._v("#")]),e._v(" How to create a store in BTCPay?")]),e._v(" "),o("p",[e._v('To create your first store, go to > Stores from the header menu and click "create a new store."')]),e._v(" "),o("h2",{attrs:{id:"how-many-stores-can-i-create"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-many-stores-can-i-create"}},[e._v("#")]),e._v(" How many stores can I create?")]),e._v(" "),o("p",[e._v("There's no limit on a number of stores you can create in BTCPay.")]),e._v(" "),o("h2",{attrs:{id:"why-are-invoices-without-payment-showing-as-complete"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#why-are-invoices-without-payment-showing-as-complete"}},[e._v("#")]),e._v(" Why are invoices without payment showing as complete?")]),e._v(" "),o("p",[e._v("When an invoice is created to receive a payment value of 0 (zero amount due) the invoice by definition, is already paid. The invoice will appear as complete as soon as it's created.")]),e._v(" "),o("p",[e._v("The purpose of this type of invoice is typically for when a merchant would like to observe user interest in an event or giveaway using BTCPay Server invoices without requiring the user to provide funds. Another use case is for developers who are testing the invoice process allowing them to bypass providing actual funds to verify the software is working properly.")]),e._v(" "),o("h2",{attrs:{id:"add-network-fee-to-invoice-vary-with-mining-fees"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-network-fee-to-invoice-vary-with-mining-fees"}},[e._v("#")]),e._v(" Add network fee to invoice (vary with mining fees)?")]),e._v(" "),o("p",[e._v("Network fee (cost) is a feature in BTCPay which protects merchants from customers who pay the invoice partially. When an invoice is paid from many outputs, the fee for a merchant who needs to move those funds later will be higher.")]),e._v(" "),o("p",[e._v("For example, the customer created an invoice for 20$ and paid it partially, paying 1$ 20 times until the invoice is paid fully. Merchant now has a larger transaction which increases the mining cost in case the merchant decides to move those funds later. By default, BTCPay applies an "),o("strong",[e._v("additional network cost")]),e._v(" to the total invoice amount to cover that expense for the merchant.")]),e._v(" "),o("p",[e._v("BTCPay offers several options to customize this protection feature. You can apply a network fee :")]),e._v(" "),o("ul",[o("li",[e._v("Only if the customer makes more than one payment for the invoice (In the above example, if the customer created an invoice for 20$ and paid 1$, total invoice due is now 19$ + the network fee. The network fee is applied "),o("strong",[e._v("after the first payment")]),e._v(")")]),e._v(" "),o("li",[e._v("On every payment (including the first payment, in our example, the total  will be 20$ + network fee right away, even on the first payment)")]),e._v(" "),o("li",[e._v("Never add network fee (disables the network fee entirely)")])]),e._v(" "),o("p",[e._v("The network fee in BTCPay is "),o("strong",[e._v("not the mining fee")]),e._v(". The customers still need to pay for the miner's fee.")]),e._v(" "),o("p",[e._v("The network cost is an optional feature. It's enabled by default, but it's entirely up to a merchant to enable or disable it. The customer sees the \"network cost\" at the checkout when they expand the invoice information.")]),e._v(" "),o("p",[e._v("While it protects from dust transactions, it can also reflect negatively on businesses if not communicated properly. Your customers may have additional questions and may think you're overcharging them.")]),e._v(" "),o("p",[e._v("Please think twice about how this may affect your business and make sure to communicate it to your customers properly inside your store Terms of Service or through other means.")]),e._v(" "),o("h2",{attrs:{id:"allow-anyone-to-create-invoice"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#allow-anyone-to-create-invoice"}},[e._v("#")]),e._v(" Allow anyone to create invoice")]),e._v(" "),o("p",[e._v("You should enable this option if you want to allow the outside world to create invoices in your store. This option is only useful if you're using the payment button or if you are issuing invoices via API or 3rd party HTML website. POS app is pre-authorised and does not need this enabled for a random visitor to open your POS store and create an invoice. If in doubt, don't enable it as you can always enable it if needed.")]),e._v(" "),o("h2",{attrs:{id:"invoice-expires-if-the-full-amount-has-not-been-paid-after-minutes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#invoice-expires-if-the-full-amount-has-not-been-paid-after-minutes"}},[e._v("#")]),e._v(" Invoice expires if the full amount has not been paid after ... minutes")]),e._v(" "),o("p",[e._v('The invoice timer is set to 15 minutes by default. The timer is a protection mechanism against the volatility since it locks the cryptocurrency amount according to the crypto to fiat rates. If the customer does not pay the invoice within the defined period, the invoice is considered expired. The invoice is considered "paid" as soon as the transaction is visible on the blockchain (o-confirmations) but considered "complete" when it reaches the number of confirmations the merchant defined (usually, 1-6). The timer is customizable.')]),e._v(" "),o("h2",{attrs:{id:"payment-invalid-if-transactions-fails-to-confirm-minutes-after-invoice-expiration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#payment-invalid-if-transactions-fails-to-confirm-minutes-after-invoice-expiration"}},[e._v("#")]),e._v(" Payment invalid if transactions fails to confirm ... minutes after invoice expiration")]),e._v(" "),o("p",[e._v('If the customer pays the invoice, but it fails to get the defined number of confirmations within the set period, it is marked as "invalid." The merchant can then decide whether to accept the invoice afterward manually or decline it and require additional payment from the customer. This is an additional protection mechanism against the volatility.')]),e._v(" "),o("h2",{attrs:{id:"consider-the-invoice-confirmed-when-the-payment-transaction"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consider-the-invoice-confirmed-when-the-payment-transaction"}},[e._v("#")]),e._v(" Consider the invoice confirmed when the payment transaction")]),e._v(" "),o("p",[e._v('The invoice is considered "paid," as soon as it\'s visible on the blockchain. When the invoice reaches the defined number of confirmations, it is considered "confirmed." Here you set the minimum amount of confirmations after which the invoice gets the "confirmed" status. The "completed" status is given when the invoice has at least 6 confirmations. Note this only applies to on-chain payments. Invoices paid via the Lightning Network immediately go to a completed state, as their confirmation is instant. In practice, as a merchant, you ship your product as soon as you see the invoice marked as completed or confirmed.')]),e._v(" "),o("h2",{attrs:{id:"consider-the-invoice-paid-even-if-the-paid-amount-is-less-than-expected"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#consider-the-invoice-paid-even-if-the-paid-amount-is-less-than-expected"}},[e._v("#")]),e._v(" Consider the invoice paid even if the paid amount is ... % less than expected")]),e._v(" "),o("p",[e._v('In a situation where a customer uses an exchange wallet to pay directly for an invoice, the exchange takes a small amount of fee. This means that such invoice is not considered fully completed. The invoice gets status "paid partially." If a merchant wants to accept underpaid invoices, you can set the percentage rate here.')]),e._v(" "),o("h2",{attrs:{id:"how-to-disable-email-on-invoices"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-disable-email-on-invoices"}},[e._v("#")]),e._v(" How to disable email on invoices")]),e._v(" "),o("p",[e._v("To disable the email requirement for your store's invoices, go to Stores > Settings > Checkout Experience > uncheck 'Requires a refund email' box.")]),e._v(" "),o("h2",{attrs:{id:"how-to-redirect-store-invoices-after-payment"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-redirect-store-invoices-after-payment"}},[e._v("#")]),e._v(" How to redirect store invoices after payment?")]),e._v(" "),o("p",[e._v("To automatically redirect paid invoices for a store, enable the setting in: Stores > Settings > Checkout experience > check 'Redirect invoice to redirect url automatically after paid' box.")]),e._v(" "),o("p",[e._v("This setting is typically used for redirecting invoices made directly to the store, such as with a "),o("RouterLink",{attrs:{to:"/Apps/#payment-button"}},[e._v("Payment Button")]),e._v(". After payment, the invoice would return to the original page where the payment button was embedded or to the redirect URL provided on the Edit Payment Button page.")],1),e._v(" "),o("p",[e._v("When this feature is not enabled, the customer will be prompted in the invoice to return to the original payment page.")]),e._v(" "),o("figure",[o("img",{attrs:{src:i(460),alt:"Redirect Paid Store Invoices"}})]),e._v(" "),o("p",[e._v("To redirect to a specific URL in the Point of Sale app, use the "),o("RouterLink",{attrs:{to:"/FAQ/FAQ-Apps/#how-to-redirect-to-another-site-after-payment"}},[e._v("PoS Redirect")]),e._v(" instead.")],1),e._v(" "),o("h2",{attrs:{id:"can-i-delete-invoices-from-btcpay"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#can-i-delete-invoices-from-btcpay"}},[e._v("#")]),e._v(" Can I delete invoices from BTCPay?")]),e._v(" "),o("p",[e._v("Invoices in BTCPay Server can't be deleted, but can be archived.\nTo archive an invoice, select the one you would like to archive, click the "),o("code",[e._v("Archive")]),e._v(" button in top right corner.\nThis action removes it from the "),o("code",[e._v("Invoices")]),e._v(" page.")]),e._v(" "),o("p",[e._v("An invoice can be restored by clicking the "),o("code",[e._v("Archived")]),e._v(" button.")]),e._v(" "),o("h2",{attrs:{id:"how-to-collect-additional-buyer-information"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-collect-additional-buyer-information"}},[e._v("#")]),e._v(" How to collect additional buyer information?")]),e._v(" "),o("p",[e._v("The Buyer information section of the invoice details page is only used for custom solutions such as integrations, like WooCommerce or API invoice creation. Currently there is no way to collect Buyer Information using the BTCPayServer interface.")]),e._v(" "),o("h2",{attrs:{id:"how-to-change-the-exchange-rate-provider-for-invoices"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to-change-the-exchange-rate-provider-for-invoices"}},[e._v("#")]),e._v(" How to change the exchange rate provider for invoices?")]),e._v(" "),o("p",[e._v("The default fiat to cryptocurreny exchange rate provider used in your BTCPay invoices can be modified by navigating to your Store Settings > Rates > Preferred price source. There are several exchange rate provider options available. Each store may use different settings.")]),e._v(" "),o("h2",{attrs:{id:"getting-getratesasync-was-called-on-coinaverage-error"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#getting-getratesasync-was-called-on-coinaverage-error"}},[e._v("#")]),e._v(" Getting GetRatesAsync was called on coinaverage error")]),e._v(" "),o("p",[e._v("Coinaverage discontinued their free tier API. As a result the following error may appear:")]),e._v(" "),o("div",{staticClass:"language- extra-class"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("GetRatesAsync was called on coinaverage when the rate is outdated. It should never happen, let BTCPayServer developers know about this.\n")])])]),o("p",[e._v("The issue can be fixed by "),o("RouterLink",{attrs:{to:"/FAQ/FAQ-Stores/#how-to-change-the-exchange-rate-provider-for-invoices"}},[e._v("selecting a different rate source provider")]),e._v(" in Stores > Settings > Rates, or by "),o("RouterLink",{attrs:{to:"/FAQ/FAQ-ServerSettings/#how-to-update-btcpay-server"}},[e._v("updating your BTCPay Server")]),e._v(" if you're running verison 1.0.3.146 or older. The update will automatically replace Coinaverage with CoinGecko.")],1)])}),[],!1,null,null,null);t.default=a.exports}}]);