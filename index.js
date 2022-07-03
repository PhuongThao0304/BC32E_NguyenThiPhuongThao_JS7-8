var arrNumber = [];
// Nhập vào số nguyên và lưu trữ trong mảng 

document.getElementById('btnNhapSo').onclick = function () {
    // input số nguyên 
    // output: push số vào mảng arrNumber;


    var iSo = Number(document.getElementById('nhapSo').value);
    var Mang = '';
    arrNumber.push(iSo);
    Mang = '[' + arrNumber + ']';

    // in ra giao diện 
    document.getElementById('Mang').innerHTML = Mang;
}


// Câu 1: tính tổng các số nguyên dương 

document.getElementById('tinhTong').onclick = function () {
    // input: duyệt và lấy các số trong mảng
    // output: tổng các số nguyên dương
    var Tong = 0;
    for (var index = 0; index < arrNumber.length; index++) {
        var number = arrNumber[index];

        if (number > 0) {
            Tong += number;
        }
    }

    // in kết quả ra giao diện
    document.getElementById('ketQua_1').innerHTML = Tong;
}

// Câu 2: Đếm có bao nhiêu số nguyên dương trong mảng

document.getElementById('btnDem').onclick = function () {
    // input: duyệt và lấy các số trong mảng
    // output: số lượng số nguyên dương 
    var dem = 0;
    for (var index = 0; index < arrNumber.length; index++) {
        var number = arrNumber[index];

        if (number > 0) {
            dem += 1;
        }
    }
    // in output ra giao diện 
    document.getElementById('ketQua_2').innerHTML = "Có " + dem + " số nguyên dương trong mảng";

}

// câu 3: tìm số nhỏ nhất trong mảng 
document.getElementById('btnTimso').onclick = function () {
    // input: duyêtj mảng và lấy các số 
    // output: số nhỏ nhất mảng 
    var minMang = 0;

    // đặt cờ hiệu 
    var Min = arrNumber[0];
    var indexMin = 0;

    for (index = 0; index < arrNumber.length; index++) {
        var number3 = arrNumber[index];
        if (number3 < Min) {
            Min = number3;
            indexMin = index;
        }
    }
    // xuất kết quả ra màn hình 
    document.getElementById('ketQua_3').innerHTML = "Số nhỏ nhất mảng là: " + Min;
}



// câu 4: Tìm số dương nhỏ nhất trong mảng.
document.getElementById('btnMinDuong').onclick = function () {
    // input: duyêtj mảng và lấy các số dương bỏ vào mảng mới 
    var arrDuong = [];
    for (index = 0; index < arrNumber.length; index++) {
        if (arrNumber[index] > 0) {
            arrDuong.push(arrNumber[index]);
        }
    }
    // output: số dương nhỏ nhất mảng 
    var minDuong = '';
    // check xem mảng có phần tử ko bằng cách check length của mảng 
    if (arrDuong.length === 0) {
        minDuong = "Không có số dương trong mảng";
    }
    else {
        var minD = arrDuong[0];
        var indexD = 0;
        for (index = 0; index < arrDuong.length; index++) {
            var soDuong = arrDuong[index];
            if (soDuong < minD) {
                minD = soDuong;
                indexD = index;
            }

        }
        minDuong = "Số nguyên dương nhỏ nhất trong mảng là: " + minD;
    }
    // xuất kết quả ra màn hình 
    document.getElementById('ketQua_4').innerHTML = minDuong;
}

// bài 5: Tìm số chẵn cuối cùng trong mảng. Nếu mảng không có giá trị chẵn thì trả về -1.

document.getElementById('btnSochan').onclick = function () {
    // input: duyệt mảng again 
    // output: só chẵn cuối cùng trong mảng là: số chẵn (string)
    var ketQua = '';

    for (index = 0; index < arrNumber.length; index++) {
        var soChan = arrNumber[index];
        if (soChan % 2 === 0) { // số 0 vẫn là số chẵn 
            ketQua = "Số chẵn cuối cùng của mảng là " + soChan;
        }
        else {
            ketQua = -1;
        }
    }
    // in ra giao diện 
    document.getElementById('ketQua_5').innerHTML = ketQua;
}

// Bài 6: Đổi chỗ 2 giá trị trong mảng theo vị trí (Cho nhập vào 2 vị trí muốn đổi chỗ giá trị).

document.getElementById('btnDoiGiaTri').onclick = function () {
    // input: 2 vị trí muốn đổi giá trị
    var index1 = Number(document.getElementById('viTri1').value);
    var index2 = Number(document.getElementById('viTri2').value);
    // output:mảng đã đổi 2 giá trị của 2 vị trí người dùng nhập vào

    // lấy ra 2 gía trị tương ứng vị trí người dùng nhập vào 
    var value1 = arrNumber[index1];
    var value2 = arrNumber[index2];
    //swap 2 giá trị này cho nhau;
    arrNumber[index1] = value2;
    arrNumber[index2] = value1;

    // xuất mảng mới ra: 
    document.getElementById('ketQua_6').innerHTML = "Mảng đã swap giá trị: " + arrNumber;
}

// Bài 7: sắp xếp mảng theo thứ tự tăng dần
document.querySelector('#btnXepMang').onclick = function () {
    // input: mảng 
    // output: mảng đã sắp xếp theo thứ tự tăng dần

    var ketQua7 = arrNumber.sort(function (so2, so1) {
        return so2 - so1;
    })

    // xuất kết quả ra màn hình 
    document.querySelector('#ketQua_7').innerHTML = "Mảng đã sắp xếp theo thứ tự tăng dần: " + ketQua7;

}

// Bài 8: Tìm số nguyên tố đầu tiên trong mảng. Nếu mảng không có số nguyên tố thì trả về  -1.

document.querySelector('#btnSoNguyento').onclick = function () {
    // input: mảng 
    // output: số nguyên tố đầu tiên/ -1 
    var ketQua_8 = '';
    // số nguyên tố là số có 2 ước (1 vaf chính nó)



    // duyệt mảng để tìm số nguyên tố
    for (index = 0; index < arrNumber.length; index++) {
        var iSo = arrNumber[index];
        var uoc = 1;
        var dem = 0;
        // dùng vòng lặp để check xem có phải số nguyên tố ko 
        for (uoc = 1; uoc <= iSo; uoc++) {
            if (iSo % uoc === 0) {
                dem++;
            }
        }
        if (dem === 2) {
            ketQua_8 = iSo + " là số nguyên số đầu tiên";
            break;
        }
        else {
            ketQua_8 = -1;
        }

    }
    // xuất kết quả ra màn hình 
    document.querySelector('#ketQua_8').innerHTML = ketQua_8;
}

// bài 9: Nhập thêm 1 mảng số thực, tìm xem trong mảng có bao nhiêu số nguyên?
var arrSoThuc = [];

document.querySelector('#btnNhapSoThuc').onclick = function () {

    var soThuc = Number(document.querySelector('#nhapSothuc').value);
    var mangThuc = '';
    arrSoThuc.push(soThuc);
    mangThuc = '[ ' + arrSoThuc + ']';

    // xuất ra màn hình 
    document.querySelector('#Mang2').innerHTML = mangThuc;

}

// tìm có bao nhiêu số nguyên 
document.querySelector('#btnSoNguyen').onclick = function () {
    // input: mảng số thực 
    // output: số lượng số nguyên
    var soNguyen = 0;
    // duyệt mảng để tìm số thực 
    // tạo biến đếm số nguyên
    var count = 0;
    for (index = 0; index < arrSoThuc.length; index++) {
        var iSo2 = arrSoThuc[index];

        if (Number.isInteger(iSo2) === true) {
            count++;
        }
    }
    soNguyen = 'Có ' + count + ' số nguyên trong mảng này'
    // xuất giá trị ra màn hình 
    document.querySelector('#ketQua_9').innerHTML = soNguyen;

}

// bài 10: So sánh số lượng số dương và số lượng số âm xem số nào nhiều hơn.

document.querySelector('#btnSoSanh').onclick = function () {
    // input mảng arrNumber 

    //out: so sánh (string)
    var soSanh = '';
    // tạo biến đếm số
    var soDuong = 0;
    var soAm = 0;

    // duyệt mảng để đếm số dương, số âm 
    for (index = 0; index < arrNumber.length; index++) {

        var iSo3 = arrNumber[index];
        if (iSo3 > 0) {
            soDuong++;
        }
        else if (iSo3 < 0) {
            soAm++;
        }
    }

    if (soDuong > soAm) {
        soSanh = 'Số lượng số dương nhiều hơn số âm';
    }
    else if (soDuong < soAm) {
        soSanh = 'Số lượng số âm nhiều hơn số dương';
    } else {
        soSanh = 'Số lượng số dương và số âm bằng nhau';
    }

    // xuất kết quả ra màn hình 
    document.querySelector('#ketQua_10').innerHTML = soSanh;
}
