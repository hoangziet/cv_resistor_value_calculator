
function resistorBandSelect() {
    var t = $("#lbl-multiplier").text()
      , n = $("#lbl-tolerance").text()
      , e = $("#dropdown-bands").val();
    e == "4" ? ($("#select-number3").addClass("conversion-calculator-hide"),
    $("#band-number3").addClass("band-hide"),
    $("#select-ppm").addClass("conversion-calculator-hide"),
    $("#band-ppm").addClass("band-hide"),
    $("#lbl-multiplier").text(lblMultiplier3rd),
    $("#lbl-multiplier").prop("title", lblMultiplier3rd),
    $("#lbl-tolerance").text(lblTolerance4th),
    $("#lbl-tolerance").prop("title", lblTolerance4th)) : e == "5" ? ($("#select-number3").removeClass("conversion-calculator-hide"),
    $("#band-number3").removeClass("band-hide"),
    $("#select-ppm").addClass("conversion-calculator-hide"),
    $("#band-ppm").addClass("band-hide"),
    $("#lbl-multiplier").text(lblMultiplier4th),
    $("#lbl-multiplier").prop("title", lblMultiplier4th),
    $("#lbl-tolerance").text(lblTolerance55th),
    $("#lbl-tolerance").prop("title", lblTolerance55th)) : e == "6" && ($("#select-number3").removeClass("conversion-calculator-hide"),
    $("#band-number3").removeClass("band-hide"),
    $("#select-ppm").removeClass("conversion-calculator-hide"),
    $("#band-ppm").removeClass("band-hide"),
    $("#lbl-multiplier").text(lblMultiplier4th),
    $("#lbl-multiplier").prop("title", lblMultiplier4th),
    $("#lbl-tolerance").text(lblTolerance55th),
    $("#lbl-tolerance").prop("title", lblTolerance55th))
}


$(function() {
    if ($(".pnl-Calculate-Resistor").length > 0) {
        var e = function(e) {
            var t, e = e || {};
            e.multiplier ? this.options = multiplierOptions : e.tolerance ? this.options = toleranceOptions : e.ppm ? this.options = ppmOptions : this.options = digitOptions,
            t = _.find(this.options, function(t) {
                return t.index == e.value
            }),
            this.value = ko.observable(t || this.options[0])
        };

        var n = function() {
            var n = this;
            this.numberBand1 = ko.observable(new e({ value: -1 }));
            this.numberBand2 = ko.observable(new e({ value: -1 }));
            this.numberBand3 = ko.observable(new e({ value: -1 }));
            this.multiplierBand = ko.observable(new e({ value: -1, multiplier: true }));
            this.toleranceBand = ko.observable(new e({ value: -1, tolerance: true }));
            this.ppmBand = ko.observable(new e({ value: -1, ppm: true }));
            this.bandCount = ko.observable("4");


            this.calculateResistance = ko.computed(function() {
                var resistanceValue = 0;
                var toleranceValue = n.toleranceBand().value().value * 100;
                if (n.bandCount() == "4" && n.numberBand1().value().value > -1 && n.numberBand2().value().value > -1 && n.multiplierBand().value().value > -1 && n.toleranceBand().value().value > -1) {
                    resistanceValue = (n.numberBand1().value().value * 10 + n.numberBand2().value().value) * n.multiplierBand().value().value;
                    //return resistanceValue + " Ohms (" + n.toleranceBand().value().value * 100 + "%)";
                }
                // Tương tự cho bandCount == "5" và bandCount == "6"
                if (n.bandCount() == "5" && n.numberBand1().value().value > -1 && n.numberBand2().value().value > -1 && n.numberBand3().value().value > -1 && n.multiplierBand().value().value > -1 && n.toleranceBand().value().value > -1) {
                    resistanceValue = (n.numberBand1().value().value * 100 + n.numberBand2().value().value * 10 + n.numberBand3().value().value) * n.multiplierBand().value().value;
                    //return resistanceValue + " Ohms (" + toleranceValue + "%)";
                }
            
                if (n.bandCount() == "6" && n.numberBand1().value().value > -1 && n.numberBand2().value().value > -1 && n.numberBand3().value().value > -1 && n.multiplierBand().value().value > -1 && n.toleranceBand().value().value > -1 && n.ppmBand().value().value > -1) {
                    resistanceValue = (n.numberBand1().value().value * 100 + n.numberBand2().value().value * 10 + n.numberBand3().value().value) * n.multiplierBand().value().value;
                    //return resistanceValue + " Ohms (" + toleranceValue + "%, PPM: " + n.ppmBand().value().value + ")";
                }
                
                // Định dạng giá trị điện trở với đơn vị
                var unit = " Ohms";
                if (resistanceValue / 1e6 >= 1) {
                    unit = " MOhms";
                    resistanceValue = resistanceValue / 1e6;
                } else if (resistanceValue / 1e3 >= 1) {
                    unit = " kOhms";
                    resistanceValue = resistanceValue / 1e3;
                }

                return parseFloat(resistanceValue < 1 ? resistanceValue.toPrecision(3) : resistanceValue.toFixed(3)) + unit + " (" + toleranceValue + "%)";                
            });
 
            this.resetValues = function() {
                this.numberBand1(new e({ value: -1 }));
                this.numberBand2(new e({ value: -1 }));
                this.numberBand3(new e({ value: -1 }));
                this.multiplierBand(new e({ value: -1, multiplier: true }));
                this.toleranceBand(new e({ value: -1, tolerance: true }));
                this.ppmBand(new e({ value: -1, ppm: true }));
            };
        };

        ko.applyBindings(new n(), document.getElementById("pnl-Calculate"));

        // Lắng nghe sự kiện thay đổi cho các select
        $("#dropdown-bands").change(function() {
            // Cập nhật các giá trị khi thay đổi
            // Có thể gọi resetValues hoặc thực hiện các tính toán khác
        });
    }
});


function dataLayerFeatureFlagAvailable() {
    return dataLayer !== "undefined" && isGa4CalculatorEnabled
}

var lastEntered = "None"
  , secondToLastEntered = "";

function dataLayerPushCallCheck(e) {
    return dataLayerFeatureFlagAvailable() && e !== null && e.length !== 0 && typeof e != "undefined"
}