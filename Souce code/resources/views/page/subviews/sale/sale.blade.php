<div class="view">
    <div id="sidebar" style="float: right;width: 26.5%;margin-left: 1%;margin-right: 0;">
        <div class="sidebar-item">
            <div>@lang('Thông tin bán hàng')</div>
            <div>
                <div>
                    <div style="position: relative;margin-top: 10px;margin-bottom: 5px;">
                        <i class="fa fa-search icon-customer-s"></i>
                        <div id="timkhachhang"
                             style="border: 1px solid #5cb85c;padding-left: 35px;"></div>
                        <i id="btn_hienthithemKH" class="fa fa-plus icon-customer-add ic-find"></i>
                    </div>
                </div>

                <div style="margin-top: 10px;" class="div-sale clearfix">
                    <label class="lable_sale" for="Stienhang">@lang('Tổng tiền hàng'):</label>
                    <input class="sale-input sale-input-green" id="Stienhang">
                </div>
                <div class="div-sale clearfix">
                    <label class="lable_sale" for="Skhuyenmai">@lang('Tiền khuyến mãi'):</label>
                    <input class="sale-input" style="border: 1px solid rgba(92, 184, 92,0.3);" id="Skhuyenmai">
                </div>
                <div class="div-sale clearfix">
                    <label class="lable_sale" for="Sthukhac">@lang('Tiền thu khác'):</label>
                    <input style="border: 1px solid rgba(92, 184, 92,0.3)" class="sale-input" id="Sthukhac">
                </div>
                <div class="div-sale clearfix">
                    <label class="lable_sale" for="Sthanhtoan">@lang('Tổng thanh toán'):</label>
                    <input class="sale-input" id="Sthanhtoan">
                </div>
                <div class="div-sale clearfix">
                    <label class="lable_sale" for="Skhachthanhtoan">@lang('Khách thanh toán'):</label>
                    <input style="border: 1px solid rgba(92, 184, 92,0.3)" class="sale-input sale-input-yellow" id="Skhachthanhtoan">
                </div>
                <div>
                    <label for="ghichu">@lang('Ghi chú bán hàng'):</label>
                    <textarea id="ghichu"></textarea>
                </div>
            </div>
        </div>
        <div style="margin-top: 15px;">
            <button style="font-size: 17px;border-radius: 0;" id="luuhoadon"><i class="fa fa-print"></i>
                @lang('Lưu và in hóa đơn')
            </button>
        </div>
    </div>
    <div id="content-table" style="float: left;width: 72%;">
        <div class="input-product-top">
            <h2>@lang('Bán hàng')</h2>
            <div class="container-xx">
                <i class="fa fa-search icon-product-s"></i>

                <div id="timsanpham" style=""></div>
            </div>
            <div class="container-xx" style="margin-left: 0;">
                <input id="soluong" style="">
            </div>
            <div class="container-xx" style="float: right;margin-left: 0;"></div>

            <div class="container-xx" style="margin-right: 0;float: right;">
                <button onclick="location.hash='';SaleApp.setup_custom(false);" id="btn_exit" style="">
                    <i class="fa fa-power-off"></i> @lang('Thoát')
                </button>
            </div>
            <div class="container-xx" style="margin-right: 0;float: right;">
                <button id="btn_clear" onclick="SaleApp.clear();" style="">
                    <i class="fa fa-refresh"></i> @lang('Làm sạch')
                </button>
            </div>
        </div>
        <div id="table"></div>

        <div class="grid-data-web">
            <div class="grid-data-web-title">
                <span id="btn-show-web"><i class="fa fa-chevron-down"></i> @lang('Thu hẹp')</span>
            </div>
            <div id="grid-data-web-content" class="scroollbar-c"></div>
        </div>
    </div>


    <div id="popthemkhachhang">
        <div>
            <span>@lang('Thông tin khách hàng')</span>
        </div>
        <div>
            <div class="clearfix">
                <div style="width: 47%;float: left;display: inline;">
                    <div>
                        <input type="hidden" id="ma_kh">
                    </div>
                    <div>
                        <label>Họ tên:</label>
                        <input id="hoten_kh">
                    </div>
                    <div>
                        <label>Số điện thoại:</label>
                        <div id="sdt_kh"></div>
                    </div>
                    <div>
                        <label>Địa chỉ:</label>
                        <input id="diachi_kh">
                    </div>
                    <div>
                        <label>Đối tượng:</label>
                        <div id="danhmuc_kh"></div>
                    </div>
                </div>
                <div style="width: 47%;float: right;display: inline;">
                    <div>
                        <label>Email:</label>
                        <input id="email_kh">
                    </div>
                    <div>
                        <label>Ngày sinh:</label>
                        <input id="ngaysinh_kh">
                    </div>
                    <div>
                        <label>Facebook:</label>
                        <input id="facebook_kh">
                    </div>
                    <div>
                        <label>Lượt mua:</label>
                        <input id="hit_kh">
                    </div>
                </div>
            </div>
            <div style="width: 100%;float: left;">
                <label>Ghi chú:</label>
                <textarea id="ghichu_kh"></textarea>
            </div>
            <div style="margin-top: 10px;text-align: right;width: 100%;float: left;">
                <button id="btn_themkhachhang">Lưu lại</button>
                <button id="btn_huythemkhachhang">Hủy bỏ</button>
            </div>
        </div>
    </div>

</div>


<script>
    var SaleApp = {};
    var table = $('#table');
    var products_list = null;
    var customers = null;
    var table_dataAdapter;
    var table_source;
    var template_bill = null;
    var customer_cats = null;
    var web_content = $('#grid-data-web-content');
    var txt_timsanpham = $('#timsanpham');
    var txt_soluong = $('#soluong');
    var txt_timkhachhang = $('#timkhachhang');
    var txt_tienhang = $('#Stienhang');
    var txt_khuyenmai = $('#Skhuyenmai');
    var txt_thukhac = $('#Sthukhac');
    var txt_thanhtoan = $('#Sthanhtoan');
    var txt_khachthanhtoan = $('#Skhachthanhtoan');
    var txt_ghichu = $('#ghichu');
    var txt_ma_kh = $('#ma_kh');
    var txt_hoten_kh = $('#hoten_kh');
    var txt_sdt_kh = $('#sdt_kh');
    var txt_diachi_kh = $('#diachi_kh');
    var txt_danhmuc_kh = $('#danhmuc_kh');
    var txt_email_kh = $('#email_kh');
    var txt_hit_kh = $('#hit_kh');
    var txt_ngaysinh_kh = $('#ngaysinh_kh');
    var txt_facebook_kh = $('#facebook_kh');
    var txt_ghichu_kh = $('#ghichu_kh');
    var btn_luuhoadon = $('#luuhoadon');
    var btn_show_web = $('#btn-show-web');
    var btn_clear = $('#btn_clear');
    var btn_exit = $('#btn_exit');
    var btn_themkhachhang = $('#btn_themkhachhang');
    var btn_huythemkhachhang = $('#btn_huythemkhachhang');
    var btn_hienthithemKH = $('#btn_hienthithemKH');
    var popthemkhachhang = $('#popthemkhachhang');
    var timkiem = false;

    SaleApp.createData = function () {
        app.loadding('open');
        var downloaded = 0;

        function download_completed() {
            downloaded++;
            if (downloaded >= 3) {
                app.loadding('close');
                txt_timsanpham.jqxComboBox({source: products_list});
                txt_timkhachhang.jqxComboBox({source: customers});
                txt_sdt_kh.jqxComboBox({source: customers});
                //Tải
                SaleApp.load_data_web();
            }
        }

        //local
        customer_cats = JSON.parse(localStorage.getItem(tables.customer_cat));
        txt_danhmuc_kh.jqxDropDownList({source: customer_cats});
        //data from server
        download_data_where(urls.url_apis.select, {
            table: "products_list",
            select: "WHERE branch LIKE '" + me.branch + "' ORDER BY id DESC",
            data: "code,name AS 'pname',price_main,number AS 'number_max'"
        }, null, function (result) {
            if (result['success']) {
                products_list = result['data'];
                var len_p = products_list.length;
                for (var i = 0; i < len_p; i++) {
                    products_list[i]['name_raw'] = products_list[i]['pname'] + " - " + products_list[i]['code'];
                }
            } else {
                app.notify('Tải dữ liệu bị lỗi!', 'error');
            }
            download_completed();
        });
        download_data(urls.url_apis.customers, function (result) {
            if (result['success']) {
                customers = result['data'];
                for (var i = 0; i < customers.length; i++) {
                    customers[i]['name_raw'] = customers[i]['code'] + " " + customers[i]['name'] + " " + customers[i]['phone'];
                }
            } else {
                app.notify('Tải dữ liệu bị lỗi!', 'error');
            }
            download_completed();
        });
        download_data_where(urls.url_apis.select, {
            table: "settings",
            select: "WHERE name LIKE 'bill_template' AND branch LIKE '" + me.branch + "'",
            data: "value"
        }, null, function (result) {
            if (result['success']) {
                template_bill = result['data'][0]['value'];
            } else {
                app.notify('Tải dữ liệu bị lỗi!', 'error');
            }
            download_completed();
        });
    };

    SaleApp.createUI = function () {
        //windows
        popthemkhachhang.jqxWindow({
            position: {x: (($(window).width() - 500) / 2), y: '10%'},
            width: 550,
            resizable: false,
            isModal: true,
            modalOpacity: 0.3,
            cancelButton: btn_huythemkhachhang,
            autoOpen: false,
        });

        //Sidebar
        $(".sidebar-item").jqxExpander({width: '100%'});
        //Input
        txt_hoten_kh.jqxInput({width: '100%', height: 30});
        txt_diachi_kh.jqxInput({width: '100%', height: 30});
        txt_email_kh.jqxInput({width: '100%', height: 30});
        txt_facebook_kh.jqxInput({width: '100%', height: 30});
        txt_hit_kh.jqxInput({width: '100%', height: 30, disabled: true,});
        txt_ngaysinh_kh.jqxDateTimeInput({width: '100%', height: 30});

        txt_sdt_kh.jqxComboBox({
            width: '100%',
            height: 30,
            displayMember: 'phone',
            valueMember: 'phone',
            source: null,
            showArrow: false
        });
        txt_ghichu.jqxTextArea({
            width: '100%',
            height: 40
        });
        txt_ghichu_kh.jqxTextArea({
            width: '100%',
            height: 40
        });
        txt_khachthanhtoan.jqxNumberInput({
            width: '100%',
            height: 26,
            min: 0,
            decimalDigits: 0,
            max: 99999999999,
            promptChar: ' ',
            groupSeparator: ' ',
            symbol: " đ", digits: 12,
            symbolPosition: 'right'
        });
        txt_khuyenmai.jqxNumberInput({
            width: '100%',
            height: 26,
            min: 0, digits: 12,
            decimalDigits: 0,
            max: 99999999999,
            promptChar: ' ',
            groupSeparator: ' ',
            symbol: " đ",
            symbolPosition: 'right'
        });
        txt_thukhac.jqxNumberInput({
            width: '100%',
            height: 26,
            min: 0, digits: 12,
            decimalDigits: 0,
            max: 99999999999,
            promptChar: ' ',
            groupSeparator: ' ',
            symbol: " đ",
            symbolPosition: 'right'
        });
        txt_thanhtoan.jqxNumberInput({
            width: '100%',
            height: 26,
            min: 0, digits: 12,
            decimalDigits: 0,
            max: 99999999999,
            promptChar: ' ',
            groupSeparator: ' ',
            symbol: " đ",
            symbolPosition: 'right', disabled: true
        });
        txt_tienhang.jqxNumberInput({
            width: '100%',
            height: 26,
            min: 0, digits: 12,
            decimalDigits: 0,
            max: 99999999999,
            promptChar: ' ',
            groupSeparator: ' ',
            symbol: " đ",
            symbolPosition: 'right', disabled: true
        });
        txt_soluong.jqxNumberInput({
            width: '70px',
            height: 35,
            min: 0,
            decimalDigits: 0,
            max: 99999,
            promptChar: ' ',
            groupSeparator: ' ',
            symbol: "",
            symbolPosition: 'right'
        });
        btn_clear.jqxButton({height: 35, template: 'default'});
        btn_exit.jqxButton({height: 35, template: 'danger'});
        txt_timsanpham.jqxComboBox({
            width: '300px',
            dropDownWidth: 335,
            dropDownHeight: 350,
            height: 35,
            source: null,
            displayMember: 'name_raw',
            valueMember: 'code',
            showArrow: false,
            searchMode: 'containsignorecase',
            placeHolder: "@lang('Tìm kiếm sản phẩm')",
            renderer: function (index, label, value) {
                var product = products_list[index];
                return '<div class="dp">' +
                    '<div class="dp-title">' + product['pname'] + '</div>' +
                    '<div class="dp-line">' +
                    '<span class="dp-line1">Mã: ' + product['code'] + '</span>' +
                    '<span class="dp-line2">Giá: ' + parseInt(product['price_main']).toLocaleString('vi-VN') + '</span>' +
                    '</div></div>';
            },
            renderSelectedItem: function (index, item) {
                return item['originalItem']['pname'];
            }
        });
        txt_timkhachhang.jqxComboBox({
            width: 'calc(100% - 35px)',
            height: 35,
            dropDownWidth: 335,
            dropDownHeight: 350,
            source: null,
            displayMember: 'name_raw',
            showArrow: false,
            valueMember: 'code',
            placeHolder: "@lang('Tìm kiếm khách hàng')",
            searchMode: 'containsignorecase',
            renderSelectedItem: function (index, item) {
                if (item['value'] !== '') {
                    var phone = item['originalItem']['phone'];
                    var name = item['originalItem']['name'];
                    return item['value'] + ' - ' + name + " - " + phone;
                }
                return "";
            },
            renderer: function (index, label, value) {
                var customer = customers[index];
                return '<div style="margin: 3px 0;">' +
                    '<div style="font-weight: bold;width: 100%;">' + customer['name'] + '</div>' +
                    '<div style="width: 100%;margin-top: 3px;font-size: 11px">' +
                    '<span style="width: 50%;display: inline-block;font-size: 13px;">Mã: ' + customer['code'] + '</span>' +
                    '<span style="width: 50%;display: inline-block;font-size: 13px;">Điện thoại: ' + '<span style="font-weight: 300;font-size: 13px;">' + customer['phone'] + '</span></span>' +
                    '</div></div>';
            }
        });
        btn_luuhoadon.jqxButton({width: '100%', height: '55px', template: 'success'});
        btn_themkhachhang.jqxButton({height: '33', template: 'primary'});
        btn_huythemkhachhang.jqxButton({height: '33', template: 'danger'});
        //Combobox
        txt_danhmuc_kh.jqxDropDownList({
            source: null,
            width: '100%',
            height: 30,
            displayMember: 'name',
            valueMember: 'code',
            placeHolder: ''
        });
        //Table
        var cellsrenderer_number = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
            if (parseInt(rowdata['number_max']) >= parseInt(rowdata['number'])) {
                return '<div class="price_sale-cell price_sale-row-' + row + '">' + parseInt(value).toLocaleString('vi-VN') + ' <i class="fa fa-edit f-grid"></i></div>';
            } else {
                return '<div title="Số lượng tồn kho không đủ!" style="color: red;" class="price_sale-cell price_sale-row-' + row + '">' + parseInt(value).toLocaleString('vi-VN') + ' <i style="color: red;" class="fa fa-exclamation-triangle f-grid"></i></div>';
            }
        };
        var cellsrenderer_price_sale = function (row, columnfield, value, defaulthtml, columnproperties, rowdata) {
            return '<div class="price_sale-cell price_sale-row-' + row + '">' + parseInt(value).toLocaleString('vi-VN') + ' <i class="fa fa-edit f-grid"></i></div>';
        };
        table_source = {
            localdata: null, datatype: "array", datafields: [
                {name: 'id', type: 'number'},
                {name: 'code', type: 'string'},
                {name: 'name', type: 'string'},
                {name: 'number', type: 'number'},
                {name: 'number_max', type: 'number'},
                {name: 'price_sale', type: 'number'},
                {name: 'price', type: 'number'},
                {name: 'btn_remove', type: 'string'},
            ]
        };
        table_dataAdapter = new $.jqx.dataAdapter(table_source);
        table.jqxGrid({
            theme: 'light',
            pageSize: 20,
            altRows: true,
            pageable: false,
            height: 'calc(100% - 354px)',
            width: '100%',
            filterable: false,
            autoshowfiltericon: true,
            sortable: false,
            columnsResize: true,
            enablehover: false,
            source: table_dataAdapter,
            selectionmode: 'none',
            rowsheight: 40,
            columnsheight: 40,
            editable: true,
            columns: [
                {
                    text: 'TT',
                    dataField: 'id',
                    width: '50',
                    align: 'center', cellsalign: 'center', editable: false
                },
                {
                    text: '@lang('Mã sản phẩm')',
                    dataField: 'code',
                    width: '120', editable: false
                }, {
                    text: '@lang('Tên sản phẩm')',
                    dataField: 'name', editable: false
                }, {
                    text: '@lang('Số lượng')',
                    dataField: 'number',
                    cellsalign: 'right', align: 'right',
                    width: '100px',
                    cellsrenderer: cellsrenderer_number,
                    columntype: 'custom',
                    createeditor: function (row, cellvalue, editor, cellText, width, height) {
                        // construct the editor.
                        editor.jqxNumberInput({
                            width: width,
                            height: height,
                            min: 0, digits: 5,
                            decimalDigits: 0,
                            max: 99999999999,
                            promptChar: ' ',
                            groupSeparator: ' ',
                            symbol: "",
                            symbolPosition: 'right'
                        });
                        editor.find('input').css({'font-size': '14px', 'font-weight': '500'});
                    },
                    initeditor: function (row, cellvalue, editor, celltext, pressedkey) {
                        // set the editor's current value. The callback is called each time the editor is displayed.
                        var value = parseInt(cellvalue);
                        if (isNaN(value)) value = 0;
                        editor.jqxNumberInput('val', value);
                        setTimeout(function () {
                            editor.find('input').select();
                            editor.find('input').focus();
                        }, 100);
                    },
                    geteditorvalue: function (row, cellvalue, editor) {
                        // return the editor's value.
                        return editor.jqxNumberInput('val');
                    }
                }, {
                    text: '@lang('Tồn')',
                    dataField: 'number_max',
                    width: '100px',
                    cellsformat: 'd',
                    cellsalign: 'right', align: 'right', editable: false
                }, {
                    text: '@lang('Tiền bán')',
                    dataField: 'price_sale',
                    width: '120px',
                    cellsalign: 'right', align: 'right',
                    columntype: 'custom',
                    cellsrenderer: cellsrenderer_price_sale,
                    createeditor: function (row, cellvalue, editor, cellText, width, height) {
                        // construct the editor.
                        editor.jqxNumberInput({
                            width: width,
                            height: height,
                            min: 0, digits: 12,
                            decimalDigits: 0,
                            max: 99999999999,
                            promptChar: ' ',
                            groupSeparator: ' ',
                            symbol: " đ",
                            symbolPosition: 'right'
                        });
                        editor.find('input').css({'font-size': '14px', 'font-weight': '500'});
                    },
                    initeditor: function (row, cellvalue, editor, celltext, pressedkey) {
                        // set the editor's current value. The callback is called each time the editor is displayed.
                        var value = parseInt(cellvalue);
                        if (isNaN(value)) value = 0;
                        editor.jqxNumberInput('val', value);
                        setTimeout(function () {
                            editor.find('input').select();
                            editor.find('input').focus();
                        }, 100);
                    },
                    geteditorvalue: function (row, cellvalue, editor) {
                        // return the editor's value.
                        return editor.jqxNumberInput('val');
                    }
                }, {
                    text: '@lang('Tổng tiền')',
                    dataField: 'price',
                    width: '120px',
                    cellsformat: 'd', align: 'right',
                    cellsalign: 'right', editable: false
                }, {
                    text: ' ',
                    dataField: 'btn_remove',
                    width: '30', editable: false,
                    cellsrenderer: function () {
                        return "<div style='color: #d60f01;padding: 7px;font-size: 16px;'><i class='fa fa-times'></i></div>"
                    }
                }
            ],
        });
        table.jqxGrid('localizestrings', grid_lang);
    };

    SaleApp.createEvent = function () {
        //Show hide web data
        btn_show_web.click(function () {
            var content_height = 300;
            if (web_content.height() != (content_height - 20)) {
                //show
                web_content.css('height', '280px');
                $('.grid-data-web').css('height', '302px');
                btn_show_web.html('<i class="fa fa-chevron-down"></i> @lang('lang.Collapse')');
                table.jqxGrid({height: 'calc(100% - 354px)'});
            } else {
                web_content.css('height', '0px');
                $('.grid-data-web').css('height', '22px');
                btn_show_web.html('<i class="fa fa-chevron-up"></i> @lang('lang.Extend')');
                table.jqxGrid({height: 'calc(100% - 10px)'});
            }
        });

        //Hiển thị đổi giá
        table.on('cellendedit', function (event) {
            var args = event.args;
            setTimeout(function () {
                SaleApp.change_number(0, args.rowindex);
            }, 100)
        });

        function click_remove(args) {
            var popup_xoa = $('<div></div>');
            var btn_yes = $('<button class="f-right">@lang('Có')</button>');
            var btn_no = $('<button class="f-right" style="margin-left: 5px;">@lang('Không')</button>');
            popup_xoa.append(btn_no);
            popup_xoa.append(btn_yes);
            btn_yes.jqxButton({height: 25, template: 'success'});
            btn_no.jqxButton({height: 25, template: 'danger'});
            popup_xoa.jqxPopover({
                position: "left",
                width: 180,
                height: 80,
                'title': '@lang('Xóa khỏi giỏ hàng')',
                selector: args['originalEvent']['target']
            });

            btn_yes.click(function () {
                table.jqxGrid('deleterow', args['row']['bounddata']['uid']);
                popup_xoa.jqxPopover('close');
                SaleApp.calculate_price();
            });
            btn_no.click(function () {
                popup_xoa.jqxPopover('close');
            });
        }

        table.on("cellclick", function (event) {
            var args = event.args;
            if (args.datafield == 'btn_remove') {
                click_remove(args);
            }
        });

        //Chọn giá trị
        $('#timsanpham').keyup(function (e) {
            if (e.keyCode == 13) {
                if (txt_timsanpham.jqxComboBox('val').trim() != '') {
                    var sp = app.getDataByCode(txt_timsanpham.jqxComboBox('val'), products_list);
                    if (sp != null) {
                        txt_soluong.jqxNumberInput('val', '1');
                        if (timkiem) {
                            themsanphamvaobang();
                        } else {
                            var id_number = $('#soluong').find('> input');
                            id_number.focus();
                            id_number.select();
                        }
                    } else {
                        app.notify('@lang('Sản phẩm không có trong kho')', 'warning');
                        if (timkiem) {
                            txt_timsanpham.jqxComboBox('val', '');
                        } else {
                            txt_timsanpham.find('input').select();
                        }
                        txt_timsanpham.jqxComboBox('focus');
                    }
                }
            }
        });
        //
        $('#soluong').find('> input').keyup(function (e) {
            if (e.keyCode == 13) {
                themsanphamvaobang();
            }
        });

        function themsanphamvaobang() {
            var sp = app.getDataByCode(txt_timsanpham.jqxComboBox('val'), products_list);
            if (sp != null) {
                var data = table.jqxGrid('getrows');
                var index = data.findIndex(x => x.code === sp['code']);
                var product_selected;
                if (index >= 0) {
                    product_selected = data[index];
                } else {
                    product_selected = null;
                }
                if (product_selected != null) {
                    table.jqxGrid('updaterow', product_selected['uid'], {
                        id: product_selected['id'],
                        code: product_selected['code'],
                        name: product_selected['name'],
                        number: parseInt(product_selected['number']) + parseInt(txt_soluong.jqxNumberInput('val')),
                        number_max: product_selected['number_max'],
                        price_sale: product_selected['price_sale'],
                        price: product_selected['price_sale'] * (parseInt(product_selected['number']) + parseInt(txt_soluong.jqxNumberInput('val'))),
                    });
                } else {
                    table.jqxGrid('addrow', null, {
                        id: table.jqxGrid('getrows').length,
                        code: sp['code'],
                        name: sp['pname'],
                        number: txt_soluong.jqxNumberInput('val'),
                        number_max: parseInt(sp['number_max']),
                        price_sale: parseInt(sp['price_main']),
                        price: parseInt(sp['price_main']) * parseInt(txt_soluong.jqxNumberInput('val')),
                    });
                }

            } else {
                app.notify('@lang('Sản phẩm không có trong kho')', 'warning');
            }
            txt_timsanpham.jqxComboBox('val', '');
            txt_timsanpham.jqxComboBox('clearSelection');
            txt_timsanpham.jqxComboBox('focus');
            SaleApp.calculate_price();
        }

        //Tính tiền sau mỗi lần đổi số
        var input_km = $('#Skhuyenmai');
        input_km.click(function () {
            var popphantram = $('<div></div>');
            var inputphantram = $('<input class="f-left">');
            popphantram.append(inputphantram);
            inputphantram.jqxNumberInput({
                width: '100%',
                height: 26,
                min: 0,
                decimalDigits: 0,
                max: 100,
                promptChar: ' ',
                groupSeparator: ' ',
                symbol: " %",
                symbolPosition: 'right'
            });
            popphantram.jqxPopover({
                position: "left",
                width: 170,
                height: 80,
                'title': '@lang('Nhập phần trăm % '):',
                selector: $(this)
            });
            $('#' + popphantram.attr('id')).on('close', function () {
                popphantram.jqxPopover('destroy');
                $(this).remove();
            });
            var dt = $(this);
            var id_input = inputphantram.attr('id').replace('_jqxNumberInput', '');
            $('#' + id_input).find('input').keyup(function (e) {
                if (e.keyCode == 13) {
                    var goc = txt_tienhang.jqxNumberInput('val');
                    var pt = inputphantram.jqxNumberInput('val');
                    dt.jqxNumberInput('val', parseInt(parseInt(goc) / 100 * pt));
                }
            });
            $('#' + id_input).find('input').click(function (e) {
                $(this).select();
            });
            popphantram.jqxPopover('open');
            $(this).select();
        });
        input_km.on('valueChanged', function () {
            SaleApp.calculate_price();
        });
        $('#Skhachthanhtoan').on('valueChanged', function () {
            var thanhtoan = txt_thanhtoan.jqxNumberInput('val');
            var khachtra = txt_khachthanhtoan.jqxNumberInput('val');
        });
        $('#Sthukhac').on('valueChanged', function () {
            SaleApp.calculate_price();
        });


        //Thêm khách hàng mới
        btn_themkhachhang.click(function () {
            if (txt_sdt_kh.jqxComboBox('val') === '') {
                app.notify('Số điện thoại khách hàng là bắt buộc!', 'warning');
                txt_sdt_kh.jqxComboBox('focus');
                return;
            }
            if (txt_hoten_kh.jqxInput('val') === '') {
                app.notify('Họ tên khách hàng là bắt buộc!', 'warning');
                txt_hoten_kh.focus();
                return;
            }
            btn_themkhachhang.text('Đang lưu...');

            if (txt_ma_kh.val().trim() == '') {
                add_data(urls.url_apis.customers, {
                    address: txt_diachi_kh.jqxInput('val'),
                    id_branch: me['branch'],
                    customer_cat: txt_danhmuc_kh.jqxDropDownList('val'),
                    phone: txt_sdt_kh.jqxComboBox('val'),
                    note: txt_ghichu_kh.jqxTextArea('val'),
                    name: txt_hoten_kh.jqxInput('val'),
                    email: txt_email_kh.jqxInput('val'),
                    birthday: txt_ngaysinh_kh.jqxDateTimeInput('val')
                }, function (result) {
                    if (result['success']) {
                        app.notify("Thêm khách hàng thành công!", 'success');
                        result['data']['name_raw'] = result['data']['code'] + " " + result['data']['name'] + " " + result['data']['phone'];
                        customers[customers.length] = result['data'];
                        txt_timkhachhang.jqxComboBox({source: null});
                        txt_timkhachhang.jqxComboBox({source: customers});
                        txt_sdt_kh.jqxComboBox({source: null});
                        txt_sdt_kh.jqxComboBox({source: customers});
                        txt_timkhachhang.jqxComboBox('selectItem', result['data']['code']);
                        btn_themkhachhang.text('Lưu lại');
                        popthemkhachhang.jqxWindow('close');
                        txt_timkhachhang.jqxComboBox('focus');
                    } else {
                        app.notify("Thêm khách hàng không thành công!", 'warning');
                    }
                });
            } else {
                var id_kh = app.getDataByCode(txt_ma_kh.val(), customers)['id'];
                update_data(urls.url_apis.customers, id_kh, {
                    address: txt_diachi_kh.jqxInput('val'),
                    id_branch: me['branch'],
                    customer_cat: txt_danhmuc_kh.jqxDropDownList('val'),
                    phone: txt_sdt_kh.jqxComboBox('val'),
                    note: txt_ghichu_kh.jqxTextArea('val'),
                    name: txt_hoten_kh.jqxInput('val'),
                    email: txt_email_kh.jqxInput('val'),
                    birthday: txt_ngaysinh_kh.jqxDateTimeInput('val')
                }, function (result) {
                    if (result['success']) {
                        app.notify("Cập nhật thông tin khách hàng thành công!", 'success');
                        result['data']['name_raw'] = result['data']['code'] + " " + result['data']['name'] + " " + result['data']['phone'];
                        var index = customers.findIndex(x => x.code === result['data']['code']);
                        customers[index] = result['data'];
                        txt_timkhachhang.jqxComboBox({source: null});
                        txt_timkhachhang.jqxComboBox({source: customers});
                        txt_sdt_kh.jqxComboBox({source: null});
                        txt_sdt_kh.jqxComboBox({source: customers});
                        txt_timkhachhang.jqxComboBox('selectItem', result['data']['code']);
                        btn_themkhachhang.text('Lưu lại');
                        popthemkhachhang.jqxWindow('close');
                        txt_timkhachhang.jqxComboBox('focus');
                    } else {
                        app.notify("Cập nhật thông tin khách hàng không thành công!", 'warning');
                    }
                });
            }
        });

        function loadDataKH() {
            var code = txt_timkhachhang.jqxComboBox('val');
            var kh = app.getDataByCode(code, customers);
            if (kh != null) {
                //tìm đúng
                txt_timkhachhang.addClass('input-search-selected');
                btn_hienthithemKH.removeClass('fa-plus');
                btn_hienthithemKH.addClass('fa-address-book');
                txt_ma_kh.val(kh['code']);
                txt_hoten_kh.jqxInput('val', kh['name']);
                txt_diachi_kh.jqxInput('val', kh['address']);
                txt_danhmuc_kh.jqxDropDownList('val', kh['customer_cat']);
                txt_ghichu_kh.jqxTextArea('val', kh['note']);
                txt_sdt_kh.jqxComboBox('val', kh['phone']);
                txt_ngaysinh_kh.jqxDateTimeInput('val', kh['birthday']);
                txt_hit_kh.jqxInput('val', kh['hit']);
                txt_facebook_kh.jqxInput('val', kh['id_facebook']);
                txt_email_kh.jqxInput('val', kh['email']);
            } else {
                txt_ma_kh.val('');
                txt_hoten_kh.jqxInput('val', '');
                txt_diachi_kh.jqxInput('val', '');
                txt_danhmuc_kh.jqxDropDownList('val', '');
                txt_ghichu_kh.jqxTextArea('val', '');
                txt_sdt_kh.jqxComboBox('val', '');
                txt_ngaysinh_kh.jqxDateTimeInput('val', '');
                txt_hit_kh.jqxInput('val', '0');
                txt_facebook_kh.jqxInput('val', '');
                txt_email_kh.jqxInput('val', '');
                txt_timkhachhang.removeClass('input-search-selected');
                btn_hienthithemKH.removeClass('fa-address-book');
                btn_hienthithemKH.addClass('fa-plus');
            }
        }

        $('#timkhachhang').on('unselect', function (event) {
            loadDataKH();
        });
        $('#timkhachhang').on('change', function (event) {
            loadDataKH();
        });
        $('#timkhachhang').find('input').click(function () {
            $(this).select();
        });
        $('#timkhachhang').find('input').keyup(function () {
            if ($('#timkhachhang').find('input').val().trim() == '') {
                $('#timkhachhang').jqxComboBox('selectIndex', -1);
            }
        });
        $('#timkhachhang').focusout(function () {
            if ($('#timkhachhang').find('input').val().trim() == '') {
                $('#timkhachhang').jqxComboBox('selectIndex', -1);
            }
            loadDataKH();
        });
        btn_hienthithemKH.click(function () {
            popthemkhachhang.jqxWindow('open');
            loadDataKH();
            setTimeout(function () {
                if (txt_ma_kh.val().trim() == '') {
                    btn_themkhachhang.text('Thêm khách hàng');
                } else {
                    btn_themkhachhang.text('Cập nhật thông tin');
                }
                txt_hoten_kh.focus();
            }, 100);
        });


        //Save bill
        btn_luuhoadon.click(function () {
            if (table.jqxGrid('getrows').length <= 0) {
                app.notify("Chưa có sản phẩm nào để lưu!", 'warning');
                return;
            }
            SaleApp.save_bill();
        });

        //Tư động chọn
        $('input').click(function () {
            $(this).select();
        });

    };

    SaleApp.change_number = function (num, row) {
        if ($.isNumeric(num)) {
            var product_selected = table.jqxGrid('getrowdatabyid', row);
            if (parseInt(product_selected['number']) + parseInt(num) >= 0) {
                table.jqxGrid('updaterow', product_selected['uid'], {
                    id: product_selected['id'],
                    code: product_selected['code'],
                    name: product_selected['name'],
                    number: parseInt(product_selected['number']) + parseInt(num),
                    number_max: product_selected['number_max'],
                    price_sale: product_selected['price_sale'],
                    price: product_selected['price_sale'] * (parseInt(product_selected['number']) + parseInt(num)),
                });
            }
        }
        SaleApp.calculate_price();
    };

    SaleApp.clear = function () {
        table.jqxGrid('clear');
        SaleApp.calculate_price();
        txt_timkhachhang.jqxComboBox('val', '');
        txt_timkhachhang.removeClass('input-search-selected');
        btn_hienthithemKH.removeClass('fa-address-book');
        btn_hienthithemKH.addClass('fa-plus');
        txt_timkhachhang.jqxComboBox('clearSelection');
        txt_timsanpham.jqxComboBox('focus');
    };

    SaleApp.calculate_price = function (reload) {
        var p_selected = table.jqxGrid('getrows');
        var sum_price = 0;
        if (p_selected != null) {
            for (var i = 0; i < p_selected.length; i++) {
                sum_price += parseInt(p_selected[i]['price']);
            }
        }
        var khachtra = txt_khachthanhtoan.jqxNumberInput('val');
        var khuyenmai = txt_khuyenmai.jqxNumberInput('val');
        var thukhac = txt_thukhac.jqxNumberInput('val');
        txt_tienhang.jqxNumberInput('val', sum_price);
        txt_thanhtoan.jqxNumberInput('val', parseInt(sum_price) + parseInt(thukhac) - parseInt(khuyenmai));
        var thanhtoan = txt_thanhtoan.jqxNumberInput('val');
        khachtra = txt_thanhtoan.jqxNumberInput('val');
        txt_khachthanhtoan.jqxNumberInput('val', khachtra);
    };

    SaleApp.save_bill = function () {
        btn_luuhoadon.jqxButton({disabled: true});
        //save server
        //save bill with
        add_data(urls.url_apis.sale, {
            code: "HD/",
            branch: me.branch,
            customer: txt_timkhachhang.jqxComboBox('val'),
            customer_name: txt_hoten_kh.jqxInput('val'),
            type: "INVOICE",
            products: JSON.stringify(table.jqxGrid('getrows')),
            total_price: txt_tienhang.jqxNumberInput('val'),
            total_pay: txt_khachthanhtoan.jqxNumberInput('val'),
            other_price: txt_thukhac.jqxNumberInput('val'),
            discount: txt_khuyenmai.jqxNumberInput('val'),
            state: "SUCCESS",
            note: txt_ghichu.jqxTextArea('val'),
            user: me['username'],
            finance_cat: settings.acc_default
        }, function (result) {
            if (result['success']) {
                app.notify("Thêm hóa đơn bán hàng thành công!", 'success');
                var mahoadon = result['data']['code'];
                SaleApp.clear();
            } else {
                app.notify("Thêm hóa đơn bán hàng không thành công!", 'warning');
                return false;
            }
            btn_luuhoadon.jqxButton({disabled: false});
        });

    };

    SaleApp.load_data_web = function () {
        function loadproduct_data(index, max) {
            download_data_where(urls.url_apis.upload_image, {
                'code': products_list[index]['code']
            }, null, function (result) {
                var container = $('<div title="" class="container-web"></div>');
                var img = $('<img class="img-web" src="">');
                var price = $('<div class="price-web"></div>');
                var title = $('<div class="title-web"></div>');
                container.append(img);
                container.append(price);
                container.append(title);
                price.text(parseInt(products_list[index]['price_main']).toLocaleString());
                title.text(products_list[index]['pname']);
                container.attr('title', "Tồn: " + products_list[index]['number_max']);
                if (products_list[index]['number_max'] <= 0) {
                    container.attr('title', "Hết hàng");
                }
                if (result['success']) {
                    img.attr('src', result['data']['encoded']);
                } else {
                    img.attr('src', default_image);
                }
                web_content.append(container);
                //check load next?
                if (index < max) {
                    loadproduct_data(index + 1, max);
                }
                //Add new event
                container.click(function () {
                    txt_timsanpham.jqxComboBox('val', products_list[index]['code']);
                    e = $.Event('keyup');
                    e.keyCode = 13; // enter
                    txt_timsanpham.find('input').trigger(e);
                });
            });
        }

        //start
        var max_show = 18;
        if (products_list.length < 18) {
            max_show = products_list.length;
        }
        loadproduct_data(0, max_show - 1);
    };

    //Stup view sale custom
    SaleApp.setup_custom = function (is_sale) {
        if(is_sale){
            $('.menu').hide();
            $('#content').css('height','100%');
            $('.view').addClass('sale');
        }else {
            $('.menu').show();
            $('#content').css('height','calc(100% - 115px)');
            $('.view').removeClass('sale');
        }
    };

    SaleApp.applySetting = function () {
        if (settings.auto_scanner) {
        }
    };

    function view_start() {
        SaleApp.createUI();
        SaleApp.setup_custom(true);
        SaleApp.createData();
        SaleApp.createEvent();
        SaleApp.applySetting();
        txt_timsanpham.jqxComboBox('focus');
    }
</script>