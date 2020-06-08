<div class="jTitle">
    <h1 class="hdnet-title-name">Website quản lý hệ thống cửa hàng kinh doanh LAPTOP</h1>
    <ul class="jTitle-menu">
        <li><a href="#main-menu-logout"><i class="fa fa-sign-out"></i> <?php echo app('translator')->get('Đăng xuất'); ?></a></li>
    </ul>
</div>
<div id='jqxMenu'>
    <ul>
        <li>
            <a href="#main-menu-home">
                <i class="fa fa-home"></i>
                <span> <?php echo app('translator')->get('Trang chủ'); ?></span>
            </a>
        </li>
        <li><i class="fa fa-th-large"></i><span> <?php echo app('translator')->get('Quản lý'); ?></span>
            <ul>
                <li>
                    <a href="#main-menu-branches"><?php echo app('translator')->get('Quản lý chi nhánh'); ?></a>
                </li>
                <li>
                    <a href="#main-menu-users"><?php echo app('translator')->get('Quản lý người dùng'); ?></a>
                </li>
                <li>
                    <a href="#main-menu-user-roles"><?php echo app('translator')->get('Quản lý chức năng'); ?></a>
                </li>
            </ul>
        </li>

        <li>
            <a href="#main-menu-products-list-new">
                <i class="fa fa-shopping-bag"></i>
                <span> <?php echo app('translator')->get('Sản phẩm'); ?></span>
            </a>

        </li>
        <li><i class="fa fa-exchange"></i><span> <?php echo app('translator')->get('Giao dịch'); ?></span>
            <ul>
                <li>
                    <a href="#main-menu-productmove-move"><?php echo app('translator')->get('Chuyển hàng'); ?></a>
                </li>
                <li>
                    <a class="not_self_produced" href="#main-menu-productimport-import"><?php echo app('translator')->get('Nhập hàng'); ?></a>
                </li>
  
            </ul>
        </li>
        <li><i class="fa fa-list-alt"></i><span> <?php echo app('translator')->get('Hóa đơn'); ?></span>
            <ul>
                <li>
                    <a href="#main-menu-invoice"><?php echo app('translator')->get('Hóa đơn bán hàng'); ?></a>
                </li>
                <li>
                    <a href="#main-menu-productmove-move-history"><?php echo app('translator')->get('Hóa đơn chuyển hàng'); ?></a>
                </li>
                <li>
                    <a href="#main-menu-productimport-history"><?php echo app('translator')->get('Hóa đơn nhập hàng'); ?></a>
                </li>
            </ul>
        </li>
        <li >
            <i class="fa fa-database"></i><span><?php echo app('translator')->get('Kho hàng'); ?></span>
            <ul>
                <li>
                    <a href="#main-menu-stocktakes"><?php echo app('translator')->get('Kiểm kho'); ?></a>
                </li>
            </ul>
        </li>
        <li><i class="fa fa-recycle"></i><span> <?php echo app('translator')->get('Đối tác'); ?></span>
            <ul>
                <li>
                    <a class="not_self_produced" href="#main-menu-supplier"><?php echo app('translator')->get('Nhà cung cấp'); ?></a> </li>
                <li>
                    <a href="#main-menu-customer"><?php echo app('translator')->get('Khách hàng'); ?></a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#main-menu-finance">
                <i class="fa fa-usd"></i><span> <?php echo app('translator')->get('Tài chính'); ?></span>
            </a>
        </li>
        <li><i class="fa fa-area-chart"></i><span> <?php echo app('translator')->get('Báo cáo'); ?></span>
            <ul>
                <li>
                    <a href="#main-menu-report-banhang"><?php echo app('translator')->get('Báo cáo bán hàng'); ?></a>
                </li>
                <li>
                    <a href="#main-menu-report-product-nhapxuatton"><?php echo app('translator')->get('Xuất nhập tồn'); ?></a>
                </li>
            </ul>
        </li>
        <li>
            <i class="fa fa-th"></i><span> <?php echo app('translator')->get('Hệ thống'); ?></span>
            <ul>
                <li>
                    <a href="#main-menu-setting"><?php echo app('translator')->get('Cài đặt'); ?></a></li>
                <li>
                    <a href="#main-menu-print"><?php echo app('translator')->get('Mẫu in'); ?></a>
                </li>
            </ul>
        </li>
        <li>
            <a href="#main-menu-sale">
                <i class="fa fa-desktop"></i>
                <span> <?php echo app('translator')->get('Bán hàng'); ?></span>
            </a>

        </li>
    </ul>
</div>