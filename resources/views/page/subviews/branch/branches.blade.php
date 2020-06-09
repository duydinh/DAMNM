<div class="view">
    <div id="loader_view"></div>
    <div id="table"></div>
</div>


<div id="windows_add" class="windows">
    <div>
        <i class="fa fa-plus-circle"></i>
        Thêm mới chi nhánh
    </div>
    <div>
        <div>
            <p class="text-muted font-13 m-b-30"></p>
            <input style="display: none;" id="id" readonly class="input"> 
            <label>Mã chi nhánh:</label>
            <input id="code" class="input">
            <label>Tên chi nhánh:</label>
            <input id="name" class="input">
            <label>Địa chỉ:</label>
            <input id="address" class="input">
            <label>Điện thoại:</label>
            <input id="phone" class="input">
            <label>Ghi chú:</label>
            <textarea id="note" class="textarea"></textarea>
        </div>
        <div>
            <div style="float: right; margin-top: 15px;">
                <input class="btn" type="button" id="btn_save" value="Lưu lại"/>
                <input class="btn" type="button" id="btn_cancel" value="Hủy bỏ"/>
            </div>
        </div>
    </div>
</div>


<script>
    var dataAdapter;
    var source;
    var table = $("#table");
    var windows_add = $('#windows_add');
    var container_toolbar;
    var btn_add;
    var btn_edit;
    var btn_delete;
    var btn_save = $('#btn_save');
    var btn_cancel = $('#btn_cancel');
    var lb_table;
    var branch_txt = {
        id: $('#id'),
        code: $('#code'),
        name: $('#name'),
        address: $('#address'),
        phone: $('#phone'),
        note: $('#note')
    };
    var branchAPP = {};

    branchAPP.download = function download() {
        app.loadding('open');
        download_data(urls.url_apis.branches, function (result) {
            if (result['success']) {
                source.localdata = result['data'];
                table.jqxGrid('updatebounddata', 'cells');
            } else {
                app.notify("Tải dữ liệu bị lỗi!", 'error');
            }
            app.loadding('close');
        });
    };


    branchAPP.createToolbar = function createToolbar(toolbar) {
        // appends buttons to the status bar.
        container_toolbar.append(lb_table);
        container_toolbar.append(btn_delete);
        container_toolbar.append(btn_edit);
        container_toolbar.append(btn_add);
        toolbar.append(container_toolbar);
    };

    branchAPP.add_branch = function add_branch() {
        var data_form = {
            code: branch_txt.code.val(),
            name: branch_txt.name.val(),
            address: branch_txt.address.val(),
            phone: branch_txt.phone.val(),
            note: branch_txt.note.val()
        };
        add_data(urls.url_apis.branches, data_form, function (result) {
            if (result['success']) {
                app.notify("Thêm chi nhánh thành công!", 'success');
                branchAPP.download();
                windows_add.jqxWindow('close');
            } else {
                app.notify("Thêm chi nhánh lỗi!", 'error');
            }
        });
    };
    branchAPP.edit_branch = function edit_branch() {
        var data_form = {
            id: branch_txt.id.val(),
            code: branch_txt.code.val(),
            name: branch_txt.name.val(),
            address: branch_txt.address.val(),
            phone: branch_txt.phone.val(),
            note: branch_txt.note.val()
        };
        update_data(urls.url_apis.branches, data_form.id, data_form, function (result) {
            if (result['success']) {
                app.notify("Cập nhật thông tin chi nhánh thành công!", 'success');
                branchAPP.download();
                windows_add.jqxWindow('close');
            } else {
                app.notify("Cập nhật thông tin chi nhánh lỗi!", 'error');
            }
        });
    };
    branchAPP.delete_branch = function delete_branch(id) {
        delete_data(urls.url_apis.branches, id, function (result) {
            if (result['success']) {
                app.notify("Xóa thông tin chi nhánh thành công!", 'success');
                branchAPP.download();
                windows_add.jqxWindow('close');
            } else {
                app.notify("Xóa thông tin chi nhánh lỗi!", 'error');
            }
        });
    };

    branchAPP.createUI = function createUI() {
        windows_add.jqxWindow({
            position: {x: (($(window).width() - 500) / 2), y: '10%'},
            width: 500,
            resizable: false, isModal: true, modalOpacity: 0.3,
            cancelButton: btn_cancel,
            autoOpen: false,

        });
        btn_save.jqxButton({height: 30, template: 'primary'});
        btn_cancel.jqxButton({height: 30});
        branch_txt.id.jqxInput({width: '100%', height: 25, disabled: true});
        branch_txt.code.jqxInput({width: '100%', height: 25});
        branch_txt.name.jqxInput({width: '100%', height: 25});
        branch_txt.address.jqxInput({width: '100%', height: 25});
        branch_txt.phone.jqxInput({width: '100%', height: 25});
        branch_txt.note.jqxTextArea({width: '100%', height: 50});
        //Button toolbar
        container_toolbar = $("<div class='container-toolbar clearfix'></div>");
        btn_add = $("<button><i class='fa fa-plus-circle'></i> Thêm</button>");
        btn_edit = $("<button><i class='fa fa-pencil'></i> Sửa</button>");
        btn_delete = $("<button><i class='fa fa-trash'></i> Xóa</button>");
        lb_table = $("<div class='table-title'><span>Quản lý chi nhánh</span></div>");
        btn_add.jqxButton({height: 16, width: 'auto', template: 'primary'});
        btn_edit.jqxButton({height: 16, width: 'auto', template: 'primary'});
        btn_delete.jqxButton({height: 16, width: 'auto', template: 'primary'});
        //Init table
        source =
            {
                localdata: {},
                datatype: "array"
            };
        dataAdapter = new $.jqx.dataAdapter(source);
        table.jqxGrid({
            pageSize: 20,
            pageable: false,
            rowsheight: 40,
            columnsheight: 40,
            altRows: true,
            height: '100%',
            width: '100%',
            columnsResize: true,
            source: dataAdapter,
            selectionmode: 'singlerow',
            columns: [
                {
                    text: 'ID',
                    dataField: 'id',
                    cellsalign: 'center', align: 'center',
                },
                {
                    text: 'Mã',
                    dataField: 'code'
                }, {
                    text: 'Tên chi nhánh',
                    dataField: 'name'
                }, {
                    text: 'Điện thoại',
                    dataField: 'phone'
                }, {
                    text: 'Địa chỉ',
                    dataField: 'address'
                }, {
                    text: 'Ghi chú',
                    dataField: 'note'
                }, {
                    text: 'Thời gian tạo',
                    dataField: 'create_at',
                    filtertype: 'date',
                    cellsformat: 'HH:mm dd/MM/yyyy'
                }
            ],
            showtoolbar: true,
            toolbarheight: 40,
            rendertoolbar: branchAPP.createToolbar,
        });
    };
    branchAPP.createEvent = function createEvent() {
        btn_add.click(function () {
            windows_add.jqxWindow('open');
            windows_add.jqxWindow({title: "<i class='fa fa-plus-circle'></i> Thêm mới chi nhánh"});
            btn_save.off('click');
            btn_save.click(branchAPP.add_branch);
            btn_save.val('Thêm mới');
        });
        btn_edit.click(function () {
            windows_add.jqxWindow({title: "<i class='fa fa-pencil'></i> Sửa thông tin chi nhánh"});
            btn_save.off('click');
            btn_save.click(branchAPP.edit_branch);
            btn_save.val('Lưu lại');
            //init data windows
            var rowindex = table.jqxGrid('getselectedrowindex');
            if (rowindex >= 0) {
                var data = table.jqxGrid('getrowdata', rowindex);
                branch_txt.id.val(data.id);
                branch_txt.name.val(data.name);
                branch_txt.code.val(data.code);
                branch_txt.address.val(data.address);
                branch_txt.phone.val(data.phone);
                branch_txt.note.val(data.note);
                branch_txt.code.focus();
                windows_add.jqxWindow('open');
            }
        });
        btn_delete.click(function () {
            var rowindexes = table.jqxGrid('getselectedrowindexes');
            for (var i = 0; i < rowindexes.length; i++) {
                var data = table.jqxGrid('getrowdata', rowindexes[i]);
                branchAPP.delete_branch(data.id);
            }
        });
    };

    function view_start() {
        branchAPP.createUI();
        branchAPP.download();
        branchAPP.createEvent();
    }
</script>