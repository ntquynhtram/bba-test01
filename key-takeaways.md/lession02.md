# LESSION2
## Version control system
- Verion control system là hệ thống quản lý phiên bản, thường dùng để:
    - Xem lịch sử thay đổi
    - Quay trở lại bản thay đổi trước đó
- Có 3 loại hệ thống quản lý phiên bản:
    - Local: lưu ở máy cá nhân
    - Centralize: lưu ở 1 máy chủ tập trung
    - Distributed (DVCS): lưu ở nhiều máy khác nhau -> là lại phổ biến nhất
## Git
- Git là DVCS phổ biến nhất thế giới (hơn 93%)
- Git và github là 2 khái niệm khác nhau
- Khi tạo 1 file trên máy tính thì file đó sẽ thuộc vùng local (theo khái niệm học ở lớp)
- Sau khi git init thì sẽ có 3 state:
    - Working directory
    - Staging
    - Repository
- Các file sẽ không di chuyển từ vùng này qua vùng khác mà là take a snapshot, ghi lại lịch sử chỉnh sửa trên các file khi add và commit
- Các bước để push code lên github:
    - Khởi tạo repo local `git init`
    - Tạo repo Github và liên kết tới repo local `git remote add origin <url>`
    - Thêm file vào stg `git add .`
    - Commit file `git commit -m"<message>"`
    - Push code `git push origin main`
- Các commit convention:  `<type>: <short_description>`
## JavaScript basic
- JavaScript giúp cho browser hoạt động được
- Bình thường JS chạy được là do có **browser enginee support**
- Khi chạy trên máy tính không có browser engine thì dùng công cụ khác mà **NodeJS**
- Cú pháp: `console.log('nội dung');` hoặc là `console.log("nội dung")` sau đó chạy lệnh `node <tên file>`
- Comment trong JS có 2 cách:
    - comment 1 dòng dùng `//` truớc đoạn code muốn comment
    - comment 1 đoạn thì dùng `/*` nội dung đoạn muốn comment `*/`
- Biến là khái niệm trong lập trình, và biến dùng cho những giá trị có thể thay đổi được
    - var: cú pháp cũ, ít sử dụng -> var cho phép khai báo lại. Cú pháp: `var <tên biến> = <giá trị>;`
    - let: cú pháp hiện đại hơn và an toàn -> let không cho phép khai báo lại. Cú pháp: `let <tên biến> = <giá trị>;`
- Hằng là các giá trị không thay đổi
- Cú pháp: `const <tên hằng> = <giá trị>;`
- JS có 8 kiểu dữ liệu chia làm 2 nhóm chính:
    - Kiểu nguyên thuỷ (primitive types):
        - Number
        - String
        - Boolean
        - Undefined
        - Null
        - Symbol
        - BigInt
    - Kiểu tham chiếu (reference types):
        - Object
- Toán tử so sánh:
    - So sáng bằng
        - `==` -> chỉ dùng khi muốn so sánh mà không quan tâm đến kiểu dữ liệu
        - `===` -> nên dùng
    - So sánh không bằng
        - `!`
    - So sáng lớn hơn, nhỏ hơn
        - `>`
        - `<`
        - `<=`
        - `>=`
- Toán tử logic dùng để kết hợp nhiều điều kiện và trả về boolean
    - `&&` (AND): trả về đúng nếu cả 2 vế của mệnh đề đều đúng
    - `||` (OR): trả về đúng nếu 1 trong 2 vế của mệnh đề đúng
- Toán tử 1 ngôi
    - Là toán tử chỉ cần 1 toán hạng để thực hiện, gồm 2 loại:
        - prefix: toán tử ở phía trước - tăng trước, trả về sau:
            - ++x;
            - --x;
        - postfix: toán tử ở phía sau - trả về trước, tăng sau:
            - x++;
            - x--;
- Toán tử toán học: là các phép tính cộng, trừ, nhân, chia: +,-,*,/
- Câu điều kiện dùng để kiểm tra 1 đoạn logic, đúng thì mới chạy
    - Cú pháp: `if (<điều kiện>) {
        // code
    }`
- Vòng lặp dùng để lặp 1 đoạn logic
    - Cú pháp vòng lặp for(i): `for (<điều kiện khởi tạo>; <điều kiện lặp>; <cập nhập>) {
        //code
    }`
