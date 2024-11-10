$(document).ready(function() {
    "use strict";
    ValidateCreditCardForm();
    var e = function() {
        this.defaultShowErrors();
        var n = $("div.error-summary");
        n.find(".field-validation-error").length == 0 && n.hide()
    };
    $.validator.setDefaults({
        errorContainer: "div.error-summary",
        showErrors: e
    })
});
function CreditCardFieldsRequired() {
    return $("#ddlCreditCards").length === 0 || $("#ddlCreditCards").val() === "-1" || $("#ddlCreditCards").val() === "-3"
}
function ValidateCreditCardForm() {
    if ($("form#ogPayForm").length > 0) {
        var e = $("form#ogPayForm")
          , t = {
            "paymentDetails.accountNumber": {
                required: function() {
                    return CreditCardFieldsRequired()
                }
            },
            "paymentDetails.cvvNumber": {
                required: !0
            },
            "paymentDetails.cardholderName": {
                required: function() {
                    return CreditCardFieldsRequired()
                }
            },
            "paymentDetails.cardExpirationMonth": {
                required: function() {
                    return CreditCardFieldsRequired()
                }
            },
            "paymentDetails.cardExpirationYear": {
                required: function() {
                    return CreditCardFieldsRequired()
                }
            }
        };
        e.validate().settings.errorClass = "error input-validation-error",
        $.extend(e.validate().settings.rules, t),
        $.extend($.validator.messages, {
            required: Resources.MyMouser.Required
        })
    }
}
