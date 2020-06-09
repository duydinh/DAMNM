<div class="view">
    <div class="container-setting">
        <div class="container-item">
            <div class="item-title">Tài khoản mặc định</div>
            <div class="item-value">
                <div id="acc_default"></div>
            </div>
        </div>
        <div class="container-item">
            <div class="item-title">In hóa đơn sau khi xuất</div>
            <div class="item-value">
                <div id="auto_print"></div>
            </div>
        </div>
    </div>
    <div class="container-setting">
        <button id="btn_save"><i class="fa fa-save"></i> Lưu lại</button>
    </div>
</div>


<script>
    SettingAPP = {};

    var settings = {
        'auto_print': true,
        'acc_default': null,
    };
    var finance_cat = null;

    var cb_acc_default = $('#acc_default');
    var auto_print = $('#auto_print');

    var btn_save = $('#btn_save');


    SettingAPP.createUI = function () {
        cb_acc_default.jqxDropDownList({
            height: 30,
            width: '100%',
            source: finance_cat,
            displayMember: 'name',
            valueMember: 'code',
            placeHolder: "Chọn tài khoản",
        });
        auto_print.jqxSwitchButton({
            width: '80px',
            height: 30,
            checked: true,
            theme: 'light',
            onLabel:'Bật',
            offLabel:'Tắt'
        });
        btn_save.jqxButton({
            height: 35,
            width: '100%',
            template: 'success'
        });
    };

    SettingAPP.createData = function () {
        //local
        finance_cat = JSON.parse(localStorage.getItem(tables.finance_cat));
        var downloaded = 0;

        function download_completed() {
            downloaded++;
            if (downloaded >= 1) {
                //setup data
                cb_acc_default.jqxDropDownList({source: finance_cat});
                //Setup value
                cb_acc_default.jqxDropDownList('selectItem', settings.acc_default);
                auto_print.jqxSwitchButton('val', settings.auto_print);
            }
        }

        //data from server
        download_data_where(urls.url_apis.select, {
            table: "settings",
            select: "WHERE name LIKE 'settings' AND branch LIKE '" + me.branch + "'",
            data: "value"
        }, null, function (result) {
            if (result['success']) {
                settings = JSON.parse(result['data'][0]['value']);
            } else {
                app.notify('Tải dữ liệu bị lỗi!', 'error');
            }
            download_completed();
        });


    };

    SettingAPP.createEvent = function () {
        //save setting
        btn_save.click(function () {
            //get data
            settings = {
                'auto_print': auto_print.jqxSwitchButton('val'),
                'acc_default': cb_acc_default.jqxDropDownList('val'),
            };
            //Save
            update_data(urls.url_apis.settings, 0, {
                branch: me.branch,
                name: 'settings',
                value: JSON.stringify(settings)
            }, function (result) {
                if (result['success']) {
                    app.notify('Lưu cài đặt thành công!', 'success');
                    app.applySetting();
                } else {
                    app.notify('Lưu cài đặt bị lỗi!', 'error');
                }
            });
        });
    };

    function view_start() {
        SettingAPP.createUI();
        SettingAPP.createData();
        SettingAPP.createEvent();
    }
</script>