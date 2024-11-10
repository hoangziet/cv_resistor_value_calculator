
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
    // Kiểm tra xem phần tử có tồn tại không
    if ($(".pnl-Calculate-Resistor").length > 0) {
        // Khởi tạo các tùy chọn cho các băng màu
        var e = function(e) {
            var t, e = e || {};
            e.multiplier ? this.options = multiplierOptions : e.tolerance ? this.options = toleranceOptions : e.ppm ? this.options = ppmOptions : this.options = digitOptions,
            t = _.find(this.options, function(t) {
                return t.index == e.value
            }),
            this.value = ko.observable(t || this.options[0])
        };

        // Khởi tạo ViewModel
        var n = function() {
            var n = this;
            this.numberBand1 = ko.observable(new e({ value: -1 }));
            this.numberBand2 = ko.observable(new e({ value: -1 }));
            this.numberBand3 = ko.observable(new e({ value: -1 }));
            this.multiplierBand = ko.observable(new e({ value: -1, multiplier: true }));
            this.toleranceBand = ko.observable(new e({ value: -1, tolerance: true }));
            this.ppmBand = ko.observable(new e({ value: -1, ppm: true }));
            this.bandCount = ko.observable("4");

            // Tính toán giá trị điện trở
            this.calculateResistance = ko.computed(function() {
                var resistanceValue = 0;
                var toleranceValue = n.toleranceBand().value().value * 100;

                if (n.bandCount() == "4" && n.numberBand1().value().value > -1 && n.numberBand2().value().value > -1 && n.multiplierBand().value().value > -1 && n.toleranceBand().value().value > -1) {
                    resistanceValue = (n.numberBand1().value().value * 10 + n.numberBand2().value().value) * n.multiplierBand().value().value;
                }
                if (n.bandCount() == "5" && n.numberBand1().value().value > -1 && n.numberBand2().value().value > -1 && n.numberBand3().value().value > -1 && n.multiplierBand().value().value > -1 && n.toleranceBand().value().value > -1) {
                    resistanceValue = (n.numberBand1().value().value * 100 + n.numberBand2().value().value * 10 + n.numberBand3().value().value) * n.multiplierBand().value().value;
                }
                if (n.bandCount() == "6" && n.numberBand1().value().value > -1 && n.numberBand2().value().value > -1 && n.numberBand3().value().value > -1 && n.multiplierBand().value().value > -1 && n.toleranceBand().value().value > -1 && n.ppmBand().value().value > -1) {
                    resistanceValue = (n.numberBand1().value().value * 100 + n.numberBand2().value().value * 10 + n.numberBand3().value().value) * n.multiplierBand().value().value;
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

            // Hàm reset giá trị
            this.resetValues = function() {
                this.numberBand1(new e({ value: -1 }));
                this.numberBand2(new e({ value: -1 }));
                this.numberBand3(new e({ value: -1 }));
                this.multiplierBand(new e({ value: -1, multiplier: true }));
                this.toleranceBand(new e({ value: -1, tolerance: true }));
                this.ppmBand(new e({ value: -1, ppm: true }));
            };
        };

        
// Áp dụng Knockout.js bindings
        ko.applyBindings(new n(), document.getElementById("pnl-Calculate"));

        // Xử lý sự kiện tải ảnh
        $("#process-image").click(function() {
            var fileInput = document.getElementById("upload-image");
            if (fileInput.files.length === 0) {
                alert("Please upload an image.");
                return;
            }

            var formData = new FormData();
            formData.append("file", fileInput.files[0]);

            // Gửi yêu cầu đến server Flask
            $.ajax({
                url: "/", // URL của route upload_image
                type: "POST",
                data: formData,
                processData: false,
                contentType: false,
                success: function(response) {
                    // Cập nhật giá trị điện trở và dải màu từ phản hồi
                    updateResistorValues(response);
                },
                error: function(jqXHR, textStatus, errorThrown) {
                    console.error("Error processing image: ", textStatus, errorThrown);
                    alert("An error occurred while processing the image.");
                }
            });
        });

        // Hàm cập nhật giá trị điện trở và dải màu
        function updateResistorValues(data) {
            // Cập nhật các giá trị cho các băng màu
            var band1Value = parseInt(data.band_1);
            var band2Value = parseInt(data.band_2);
            var multiplierValue = parseInt(data.multiplier);
            var toleranceValue = parseInt(data.tolerance);

            // Cập nhật các observable trong Knockout.js
            var viewModel = ko.dataFor(document.getElementById("pnl-Calculate"));
            viewModel.numberBand1(new e({ value: band1Value }));
            viewModel.numberBand2(new e({ value: band2Value }));
            viewModel.multiplierBand(new e({ value: multiplierValue, multiplier: true }));
            viewModel.toleranceBand(new e({ value: toleranceValue, tolerance: true }));

            // Tính toán lại giá trị điện trở
            viewModel.calculateResistance(); // Gọi lại để cập nhật giá trị điện trở
        }
    }
});