# LESSION4
## JAVASCRIPT
### Phạm vi của biến
- Phạm vi (scope) xác định nơi mà biến có thể truy cập, có 3 loại:
    - Toàn cục (global)
    - Function scope (hàm)
    - Block scope (khối)
- JS di chuyển các khai báo biến lên đầu phạm vi của chúng trước khi thực thi code
### Break và continue
- Break dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức. vidu:
for (let i= 0; i<= 10; i++) {
    if (i<6) {
        break; //lớn hơn 6 thì bỏ qua
    }
    console.log(i);
} 
-> Output: 1,2,3,4,5
- Continue dùng để bỏ qua phầ còn lại của vòng lặp hiệ. tại để chuyển sang vòng lặp tiếp theo. Vidu:
for (let i=0; i<10; i++) {
    if (i%2===0) {
        continute; //chia hết cho 2 thì bỏ qua
    }
    console.log(i);
}
-> Output: 1,3,5,7,9
### Câu điều kiện nâng cao
- Câu điều kiện if ... else: chạy các cide khác nhau cho trường hợp true và false. vidu:
let score = 75;
if (score >= 60) {
    console.log("qua môn");
} else {
    console.log("học lại");
}
- Câu điều kiện theo nhiều thứ tự if ... else ... if: dùng để kiểm tra nhiều đièu kiện theo thứ tự. vidu:
let score = 85;
if (score >= 85) {
    console.log("giỏi");
} else if (score >=60) {
    console.log("trung bình");
} else { 
    console.log("yếu");
}
- Ternaru operator (toán tử điều kiện): Cách viết ngắn gọn cho if ... else. vidu:
let age = 20;
let status = (age>=18) ? "người lớn" : "trẻ em";
console.log(status);
-> Output: người lớn
- Vòng lặp nâng cao: for ... in: dùng để duyệt các thuộc tính của object bao gồm cả thuộc tính kế thừa. Vidu
const person = {
name: "John",
age: 30,
city: "Hanoi"
};
for (let key in person) {
console.log(key + ": " + person[key]);
}
-> Output:
// name: John
// age: 30
// city: Hanoi
### Utils function:
- Là các hàm có sẵn của JS, giúp code trở nên nhanh hơn.
- Có 2 loại utils function thường sử dụng:
    - String utils: các hàm xử lý chuỗi
    - Array utils: các hàm sử lý mảng
#### String utils
- trim(): cắt khoảng trắng hai đầu
    - trimStart(): cắt bên trái
    - trimEnd(): cắt bên phải
- toLowerCase(): chuyển chuỗi thành chữ thường
- toUpperCase(): chuyển chuỗi thành chữ hoa
- includes(): kiểm tra chuỗi bao gồm chuỗi con
không
- replace(<chuỗi cần thay>, <chuỗi mới>)
- split(<tách_bởi_gì>)
- substring(<điểm_bắt_đầu>, <điểm_kết_thúc>): lấy 1 chuỗi con
từ điểm bắt đầu tới điểm kết thúc
- indexOf(<chuỗi kí tự>): tìm vị trí của chuỗi con
#### Array utils
- map: Tạo mảng mới bằng cách áp dụng một hàm lên từng phần tử
của mảng gốc. Trả về mảng mới có cùng độ dài
- filter: Tạo mảng mới chỉ chứa các phần tử thỏa mãn điều kiện
trong hàm callback. Trả về mảng đã được lọc
- find: Tìm và trả về phần tử đầu tiên trong mảng thỏa mãn điều
kiện. Trả về undefined nếu không tìm thấy
- reduce: Duyệt qua mảng và tích lũy các phần tử thành một giá trị
duy nhất (số, chuỗi, object...) dựa trên hàm callback
- some: Kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn
điều kiện hay không. Trả về true/false.
- every: Kiểm tra xem tất cả phần tử trong mảng có thỏa mãn điều
kiện hay không. Trả về true/false.
- sort: Sắp xếp các phần tử trong mảng theo thứ tự (mặc định là
alphabet/tăng dần). Thay đổi mảng gốc.
- push: Thêm một hoặc nhiều phần tử vào cuối mảng. Thay đổi mảng
gốc và trả về độ dài mới.
- pop: Xóa và trả về phần tử cuối cùng của mảng. Thay đổi mảng gốc
và làm giảm độ dài.
- shift: Xóa và trả về phần tử đầu tiên của mảng. Thay đổi mảng gốc
và làm giảm độ dài.
- unshift: Thêm một hoặc nhiều phần tử vào đầu mảng. Thay đổi
mảng gốc và trả về độ dài mới của mảng.