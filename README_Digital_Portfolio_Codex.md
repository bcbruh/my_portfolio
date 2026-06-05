# Digital Portfolio - Website Specification for Codex

## 0. Mục tiêu triển khai

Xây dựng một website **Digital Portfolio** cá nhân cho:

- **Họ tên:** Phạm Xuân Bắc
- **Ngành học:** Khoa học dữ liệu
- **Mục đích:** Tổng hợp các sản phẩm học tập đã thực hiện trong môn **Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo**.

Website không phải là nơi làm lại từng bài tập từ đầu. Đây là một portfolio tổng hợp, dùng để trình bày lại các bài đã hoàn thành theo bố cục đẹp, rõ ràng, hiện đại và dễ theo dõi.

Yêu cầu quan trọng:

- Toàn bộ nội dung hiển thị bằng **tiếng Việt**.
- Thiết kế theo phong cách **landing page** cho từng tab/trang.
- Giao diện hiện đại, tối giản, chuyên nghiệp, dễ đọc.
- Có tính thẩm mỹ tốt, không trình bày như một văn bản Word dài.
- Responsive tốt trên desktop, tablet và mobile.
- Nội dung các bài tập chỉ cần mô tả tổng hợp, không cần trình bày lại toàn bộ chi tiết bài cũ.
- Mỗi bài có ảnh minh họa ở một bên và nội dung ở bên còn lại.
- Không cần tạo mục “minh chứng” riêng trong layout từng bài.
- Phần “Bài làm” là nơi gắn link tới file/sản phẩm/báo cáo đã làm.
- Các link hiện tại để placeholder: `[Gắn link bài làm tại đây]` hoặc href `#`.

---

# 1. Bố cục thiết kế trang web

## 1.1. Công nghệ triển khai

Codex có thể chọn stack phù hợp để tạo website đẹp nhất. Ưu tiên:

- React + Vite hoặc Next.js nếu làm dạng component hiện đại.
- HTML/CSS/JS thuần nếu muốn nhẹ và dễ nộp.
- Tailwind CSS nếu cần làm giao diện nhanh, đẹp, responsive.

Miễn là sản phẩm cuối:

- Chạy được ổn định.
- Giao diện đẹp.
- Cấu trúc code rõ ràng.
- Dễ thay link bài làm và ảnh minh họa sau này.

---

## 1.2. Cấu trúc trang chính

Website gồm 3 tab/trang chính:

1. **Giới thiệu**
2. **Dự án**
3. **Tổng kết**

Có thể triển khai theo một trong hai cách:

### Cách A: Single Page Landing

Một trang duy nhất, navbar scroll tới từng section:

- `#gioi-thieu`
- `#du-an`
- `#tong-ket`

### Cách B: Multi Page / Tab

Ba tab hoặc ba route:

- `/gioi-thieu`
- `/du-an`
- `/tong-ket`

Khuyến nghị: **Single Page Landing** vì đơn giản, đẹp, dễ nộp và đúng tinh thần portfolio.

---

## 1.3. Phong cách giao diện

Thiết kế nên theo hướng:

- Hiện đại.
- Tối giản.
- Sạch sẽ.
- Có khoảng trắng hợp lý.
- Dễ đọc.
- Không quá nhiều màu.
- Không dùng quá nhiều hiệu ứng gây rối.

Gợi ý màu sắc:

- Nền chính: trắng, trắng ngà hoặc xanh rất nhạt.
- Màu nhấn: xanh lá đậm, xanh navy hoặc xanh rêu.
- Chữ chính: đen/xám đậm.
- Chữ phụ: xám vừa.
- Card: nền trắng, border nhẹ, shadow mềm.

Gợi ý font:

- Inter
- Roboto
- Be Vietnam Pro
- Open Sans

Nếu dùng Google Fonts, ưu tiên font hỗ trợ tiếng Việt tốt.

---

## 1.4. Header / Navbar

Header cố định hoặc sticky ở đầu trang.

Nội dung header:

- Logo text: **Digital Portfolio**
- Menu:
  - Giới thiệu
  - Dự án
  - Tổng kết

Yêu cầu:

- Navbar rõ ràng, dễ bấm.
- Có hiệu ứng hover nhẹ.
- Trên mobile chuyển thành menu gọn hoặc xếp lại hợp lý.
- Không chiếm quá nhiều chiều cao.

---

## 1.5. Cấu trúc tổng thể landing page

Thứ tự section:

```text
Header / Navbar
Hero Section
Giới thiệu Section
Dự án Section
Tổng kết Section
Footer
```

---

## 1.6. Hero Section

Hero section nằm đầu trang, tạo ấn tượng đầu tiên.

Nội dung hero:

- Tiêu đề lớn: **Digital Portfolio**
- Phụ đề: **Tổng hợp sản phẩm học tập môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo**
- Mô tả ngắn về portfolio.
- Hai nút CTA:
  - **Xem dự án**
  - **Xem tổng kết**

Gợi ý layout:

- Bên trái: text giới thiệu.
- Bên phải: hình minh họa abstract/digital/portfolio hoặc card thông tin cá nhân.

Nếu chưa có ảnh thật, dùng placeholder đẹp:

- Khối gradient.
- Illustration công nghệ.
- Card có tên “Phạm Xuân Bắc”.
- Icon folder, AI, search, collaboration.

---

## 1.7. Trang/Section Giới thiệu

Section này nên giống một landing page nhỏ, không viết quá dài.

Bố cục gợi ý:

```text
[Tiêu đề section]
[Đoạn giới thiệu ngắn]
[3 card nhỏ]
```

3 card nhỏ có thể là:

1. **Mục tiêu**
2. **Nội dung tổng hợp**
3. **Giá trị học tập**

Yêu cầu:

- Viết chung chung, không phân tích sâu từng bài.
- Thể hiện đây là portfolio tổng hợp bài đã làm.
- Không biến phần này thành bài luận dài lê thê, vì giảng viên cũng là con người, đáng tiếc là vẫn phải đọc nhiều thứ.

---

## 1.8. Trang/Section Dự án

Đây là section quan trọng nhất.

Gồm 6 project section/card lớn:

1. **Quản lý tệp và thư mục**
2. **Tìm kiếm và đánh giá thông tin học thuật**
3. **Viết prompt hiệu quả**
4. **Hợp tác trực tuyến**
5. **Sáng tạo nội dung với AI**
6. **AI có trách nhiệm trong học tập và nghiên cứu**

Không ghi tiêu đề dạng:

- “Bài 1”
- “Bài 2”
- “Bài tập số 1”

Chỉ dùng tên bài/tên chủ đề.

### Layout mỗi project

Mỗi project là một khối lớn, chia 2 cột:

```text
[Cột ảnh minh họa]   [Cột nội dung]
```

hoặc xen kẽ:

```text
[Cột nội dung]   [Cột ảnh minh họa]
```

Nên xen kẽ trái/phải để trang nhìn sinh động hơn:

- Project 1: ảnh trái, nội dung phải.
- Project 2: nội dung trái, ảnh phải.
- Project 3: ảnh trái, nội dung phải.
- Project 4: nội dung trái, ảnh phải.
- Project 5: ảnh trái, nội dung phải.
- Project 6: nội dung trái, ảnh phải.

### Nội dung mỗi project gồm

```text
Tên bài
Mục tiêu
Bài làm
Nhận xét ngắn
```

Trong đó:

- **Tên bài:** tiêu đề nổi bật.
- **Mục tiêu:** 1-2 câu.
- **Bài làm:** mô tả ngắn + link bài làm.
- **Nhận xét ngắn:** 1-3 câu.
- **Ảnh minh họa:** ảnh/chụp màn hình liên quan, dùng placeholder trước nếu chưa có.

### Cách hiển thị link bài làm

Trong mỗi project, tạo một nút hoặc link rõ ràng:

```text
Xem bài làm
```

href tạm thời:

```html
#
```

hoặc text:

```text
[Gắn link bài làm tại đây]
```

---

## 1.9. Trang/Section Tổng kết

Phần tổng kết gồm đúng 5 mục:

1. **Kiến thức đã học**
2. **Kỹ năng cải thiện**
3. **Khó khăn**
4. **Bài học**
5. **Hướng phát triển**

Layout gợi ý:

```text
[Hero nhỏ của section Tổng kết]
[Grid 5 card tổng kết]
```

Có thể dùng:

- Grid 2 cột trên desktop.
- 1 cột trên mobile.
- Card cuối có thể full width nếu lẻ 5 card.

Mỗi card gồm:

- Icon nhỏ.
- Tiêu đề.
- Đoạn nội dung.

---

## 1.10. Footer

Footer đơn giản:

```text
Digital Portfolio - Phạm Xuân Bắc
Môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo
```

Có thể thêm:

- Năm học.
- Link quay lại đầu trang.

---

## 1.11. Yêu cầu responsive

Trên desktop:

- Hero chia 2 cột.
- Project chia 2 cột.
- Tổng kết dạng grid.

Trên mobile:

- Hero xếp dọc.
- Project xếp dọc: ảnh trên, nội dung dưới hoặc ngược lại.
- Navbar gọn.
- Font đủ lớn, dễ đọc.
- Nút bấm dễ thao tác.

---

## 1.12. Yêu cầu hiệu ứng

Có thể thêm hiệu ứng nhẹ:

- Hover card.
- Hover button.
- Fade-in khi scroll.
- Shadow nhẹ.
- Border radius mềm.

Không dùng hiệu ứng quá lố, không nhấp nháy, không animation rối mắt.

---

# 2. Nội dung chi tiết từng phần

## 2.1. Nội dung Hero Section

### Tiêu đề

```text
Digital Portfolio
```

### Phụ đề

```text
Tổng hợp sản phẩm học tập môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo
```

### Mô tả

```text
Portfolio này được xây dựng nhằm hệ thống hóa các bài tập đã thực hiện, trình bày lại kết quả học tập theo cấu trúc rõ ràng và thể hiện quá trình vận dụng các kỹ năng số vào học tập, nghiên cứu và sáng tạo nội dung.
```

### Nút CTA

```text
Xem dự án
Xem tổng kết
```

### Card thông tin cá nhân trong Hero

```text
Phạm Xuân Bắc
Sinh viên ngành Khoa học dữ liệu
Digital Portfolio cá nhân
```

---

## 2.2. Nội dung Section Giới thiệu

### Tiêu đề section

```text
Giới thiệu
```

### Đoạn giới thiệu chính

```text
Xin chào, tôi là Phạm Xuân Bắc, sinh viên ngành Khoa học dữ liệu. Portfolio này được xây dựng nhằm tổng hợp các sản phẩm học tập đã thực hiện trong môn Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo.

Thông qua Portfolio, tôi hệ thống lại các bài tập đã hoàn thành, trình bày kết quả theo cấu trúc rõ ràng và thể hiện quá trình vận dụng các kỹ năng số vào học tập. Đây không chỉ là bản tổng hợp nội dung đã làm mà còn là cơ hội để tôi nhìn lại quá trình học, những kỹ năng đã cải thiện và định hướng phát triển trong thời gian tới.
```

### Card 1: Mục tiêu

```text
Mục tiêu của Portfolio là tổng hợp các bài tập đã thực hiện, sắp xếp nội dung theo từng chủ đề và trình bày sản phẩm học tập một cách rõ ràng, dễ theo dõi.
```

### Card 2: Nội dung tổng hợp

```text
Portfolio bao gồm các nội dung liên quan đến quản lý tệp tin, tìm kiếm và đánh giá thông tin, viết prompt, hợp tác trực tuyến, sáng tạo nội dung với AI và sử dụng AI có trách nhiệm.
```

### Card 3: Giá trị học tập

```text
Việc xây dựng Portfolio giúp tôi rèn luyện khả năng tổ chức thông tin, trình bày sản phẩm cá nhân và nhìn lại quá trình phát triển kỹ năng số trong học tập.
```

---

# 3. Nội dung Section Dự án

## 3.1. Tiêu đề chung của section

```text
Dự án học tập
```

## 3.2. Mô tả chung của section

```text
Các mục dưới đây tổng hợp những bài tập đã thực hiện trong quá trình học. Mỗi phần bao gồm mục tiêu, phần bài làm được liên kết tới sản phẩm tương ứng và nhận xét ngắn sau khi hoàn thành.
```

---

## 3.3. Project 1: Quản lý tệp và thư mục

### Tên bài

```text
Quản lý tệp và thư mục
```

### Mục tiêu

```text
Rèn luyện kỹ năng tổ chức tệp tin và thư mục một cách khoa học, giúp quá trình lưu trữ, tìm kiếm và sử dụng dữ liệu trở nên thuận tiện hơn.
```

### Bài làm

```text
Trong phần này, tôi đã xây dựng cấu trúc thư mục theo từng nhóm nội dung, áp dụng quy tắc đặt tên tệp thống nhất và sắp xếp dữ liệu theo logic rõ ràng. Việc tổ chức này giúp các tài liệu học tập được quản lý tốt hơn, hạn chế nhầm lẫn và dễ dàng mở rộng khi có thêm nội dung mới.

Link bài làm: [Gắn link bài làm tại đây]
```

### Nhận xét ngắn

```text
Qua bài này, tôi nhận ra rằng việc quản lý tệp tin hợp lý là một kỹ năng nền tảng nhưng rất quan trọng. Khi dữ liệu được sắp xếp rõ ràng, quá trình học tập và làm việc trở nên hiệu quả hơn nhiều.
```

### Ảnh minh họa gợi ý

```text
Ảnh chụp cấu trúc thư mục hoặc ảnh minh họa hệ thống folder/file.
```

### Placeholder ảnh

```text
/assets/images/file-management.png
```

---

## 3.4. Project 2: Tìm kiếm và đánh giá thông tin học thuật

### Tên bài

```text
Tìm kiếm và đánh giá thông tin học thuật
```

### Mục tiêu

```text
Rèn luyện khả năng tìm kiếm thông tin học thuật, sử dụng từ khóa và toán tử tìm kiếm phù hợp, đồng thời đánh giá độ tin cậy của các nguồn thông tin trước khi sử dụng.
```

### Bài làm

```text
Tôi đã thực hiện tìm kiếm tài liệu liên quan đến chủ đề học tập bằng các công cụ tìm kiếm và toán tử nâng cao. Sau đó, tôi đánh giá nguồn thông tin dựa trên các tiêu chí như tác giả, thời gian công bố, đơn vị xuất bản, mức độ liên quan và độ tin cậy của nội dung.

Link bài làm: [Gắn link bài làm tại đây]
```

### Nhận xét ngắn

```text
Bài này giúp tôi hiểu rằng tìm được thông tin chưa đủ, quan trọng hơn là biết chọn lọc, kiểm chứng và đánh giá nguồn. Đây là kỹ năng cần thiết để học tập và nghiên cứu nghiêm túc hơn.
```

### Ảnh minh họa gợi ý

```text
Ảnh chụp kết quả tìm kiếm, bảng đánh giá nguồn hoặc hình minh họa tìm kiếm học thuật.
```

### Placeholder ảnh

```text
/assets/images/academic-search.png
```

---

## 3.5. Project 3: Viết prompt hiệu quả

### Tên bài

```text
Viết prompt hiệu quả
```

### Mục tiêu

```text
Tìm hiểu cách viết prompt rõ ràng, có bối cảnh và có yêu cầu cụ thể để AI tạo ra kết quả phù hợp hơn với mục đích học tập.
```

### Bài làm

```text
Trong bài này, tôi đã so sánh giữa prompt ban đầu và prompt được cải tiến. Prompt cải tiến được bổ sung thêm vai trò, bối cảnh, yêu cầu đầu ra và tiêu chí đánh giá. Từ đó, tôi quan sát sự khác biệt giữa các kết quả do AI tạo ra và rút ra cách viết prompt hiệu quả hơn.

Link bài làm: [Gắn link bài làm tại đây]
```

### Nhận xét ngắn

```text
Qua bài này, tôi nhận thấy chất lượng phản hồi của AI phụ thuộc rất nhiều vào cách đặt yêu cầu. Prompt càng rõ ràng thì kết quả nhận được càng có cấu trúc, sát mục tiêu và dễ sử dụng hơn.
```

### Ảnh minh họa gợi ý

```text
Ảnh chụp prompt ban đầu, prompt cải tiến hoặc giao diện làm việc với AI.
```

### Placeholder ảnh

```text
/assets/images/prompt-engineering.png
```

---

## 3.6. Project 4: Hợp tác trực tuyến

### Tên bài

```text
Hợp tác trực tuyến
```

### Mục tiêu

```text
Rèn luyện kỹ năng sử dụng các công cụ trực tuyến để hỗ trợ giao tiếp, phân công nhiệm vụ, quản lý tài liệu và theo dõi tiến độ trong quá trình làm việc nhóm.
```

### Bài làm

```text
Tôi đã tìm hiểu và sử dụng các công cụ hỗ trợ làm việc nhóm như nền tảng lưu trữ tài liệu, công cụ soạn thảo trực tuyến, công cụ trao đổi thông tin và công cụ quản lý tiến độ. Những công cụ này giúp quá trình phối hợp giữa các thành viên trở nên rõ ràng và hiệu quả hơn.

Link bài làm: [Gắn link bài làm tại đây]
```

### Nhận xét ngắn

```text
Bài này cho tôi thấy rằng làm việc nhóm trực tuyến không chỉ là trao đổi qua tin nhắn. Một nhóm làm việc hiệu quả cần có công cụ phù hợp, phân công rõ ràng và cách theo dõi tiến độ hợp lý.
```

### Ảnh minh họa gợi ý

```text
Ảnh chụp Google Drive, Google Docs, Notion, Trello, bảng phân công hoặc giao diện làm việc nhóm.
```

### Placeholder ảnh

```text
/assets/images/online-collaboration.png
```

---

## 3.7. Project 5: Sáng tạo nội dung với AI

### Tên bài

```text
Sáng tạo nội dung với AI
```

### Mục tiêu

```text
Tìm hiểu cách sử dụng AI tạo sinh để hỗ trợ quá trình lên ý tưởng, tạo bản nháp và hoàn thiện các sản phẩm nội dung số.
```

### Bài làm

```text
Tôi đã sử dụng công cụ AI để hỗ trợ tạo hoặc cải thiện nội dung số như hình ảnh, văn bản, video hoặc sản phẩm truyền thông. Trong quá trình thực hiện, tôi không chỉ sử dụng kết quả AI tạo ra mà còn chọn lọc, chỉnh sửa và hoàn thiện sản phẩm để phù hợp hơn với mục tiêu sử dụng.

Link bài làm: [Gắn link bài làm tại đây]
```

### Nhận xét ngắn

```text
Bài này giúp tôi thấy rõ AI là công cụ hỗ trợ mạnh trong sáng tạo nội dung, đặc biệt ở giai đoạn lên ý tưởng và tạo bản nháp. Tuy nhiên, sản phẩm cuối cùng vẫn cần sự đánh giá và chỉnh sửa của con người.
```

### Ảnh minh họa gợi ý

```text
Ảnh sản phẩm AI tạo ra, ảnh trước/sau chỉnh sửa hoặc hình minh họa quá trình sáng tạo nội dung với AI.
```

### Placeholder ảnh

```text
/assets/images/ai-content-creation.png
```

---

## 3.8. Project 6: AI có trách nhiệm trong học tập và nghiên cứu

### Tên bài

```text
AI có trách nhiệm trong học tập và nghiên cứu
```

### Mục tiêu

```text
Nhận thức rõ hơn về việc sử dụng AI một cách đúng đắn, trung thực và phù hợp trong môi trường học tập, nghiên cứu.
```

### Bài làm

```text
Tôi đã xây dựng bộ nguyên tắc cá nhân khi sử dụng AI trong học tập và nghiên cứu. Các nguyên tắc tập trung vào việc kiểm chứng thông tin, không sao chép máy móc, không sử dụng AI để gian lận, tôn trọng bản quyền và xem AI như công cụ hỗ trợ thay vì thay thế hoàn toàn tư duy cá nhân.

Link bài làm: [Gắn link bài làm tại đây]
```

### Nhận xét ngắn

```text
Qua bài này, tôi hiểu rằng sử dụng AI hiệu quả không chỉ nằm ở kỹ thuật đặt câu hỏi, mà còn nằm ở ý thức, trách nhiệm và sự trung thực của người học.
```

### Ảnh minh họa gợi ý

```text
Ảnh sơ đồ nguyên tắc sử dụng AI, infographic đạo đức AI hoặc hình minh họa học tập với AI có trách nhiệm.
```

### Placeholder ảnh

```text
/assets/images/responsible-ai.png
```

---

# 4. Nội dung Section Tổng kết

## 4.1. Tiêu đề section

```text
Tổng kết
```

## 4.2. Mô tả chung

```text
Phần tổng kết giúp nhìn lại quá trình thực hiện Portfolio, những kiến thức đã hệ thống lại, các kỹ năng đã cải thiện, khó khăn gặp phải và định hướng phát triển trong thời gian tới.
```

---

## 4.3. Card 1: Kiến thức đã học

### Tiêu đề

```text
Kiến thức đã học
```

### Nội dung

```text
Qua quá trình thực hiện Portfolio, tôi đã hệ thống lại các kiến thức liên quan đến quản lý tệp tin, tìm kiếm và đánh giá thông tin, viết prompt hiệu quả, sử dụng công cụ hợp tác trực tuyến, ứng dụng AI trong sáng tạo nội dung và nguyên tắc sử dụng AI có trách nhiệm.
```

---

## 4.4. Card 2: Kỹ năng cải thiện

### Tiêu đề

```text
Kỹ năng cải thiện
```

### Nội dung

```text
Tôi cải thiện được kỹ năng tổ chức thông tin, trình bày nội dung, sử dụng công cụ số, làm việc có hệ thống hơn và biết cách khai thác AI phục vụ học tập một cách hiệu quả hơn trước.
```

---

## 4.5. Card 3: Khó khăn

### Tiêu đề

```text
Khó khăn
```

### Nội dung

```text
Khó khăn lớn nhất là chọn lọc và sắp xếp lại các bài đã làm sao cho ngắn gọn nhưng vẫn đầy đủ. Bên cạnh đó, tôi cũng cần đảm bảo bố cục rõ ràng, giao diện dễ nhìn và cách trình bày thống nhất giữa các phần trong Portfolio.
```

---

## 4.6. Card 4: Bài học

### Tiêu đề

```text
Bài học
```

### Nội dung

```text
Tôi nhận ra rằng một sản phẩm học tập tốt không chỉ cần có nội dung đúng mà còn cần được trình bày logic, mạch lạc và phù hợp với mục tiêu sử dụng. Ngoài ra, AI chỉ thực sự phát huy hiệu quả khi người dùng biết đặt yêu cầu rõ ràng và có tư duy chọn lọc.
```

---

## 4.7. Card 5: Hướng phát triển

### Tiêu đề

```text
Hướng phát triển
```

### Nội dung

```text
Trong thời gian tới, tôi muốn tiếp tục hoàn thiện Portfolio này như một nơi lưu trữ các sản phẩm học tập và dự án cá nhân. Đây cũng có thể trở thành công cụ giúp tôi giới thiệu năng lực, theo dõi quá trình phát triển bản thân và ứng dụng các kỹ năng số vào học tập cũng như công việc sau này.
```

---

# 5. Gợi ý nội dung phụ cho website

## 5.1. Tag kỹ năng

Có thể thêm các tag nhỏ trong trang Dự án hoặc Giới thiệu:

```text
Quản lý dữ liệu
Tìm kiếm thông tin
Đánh giá nguồn
Prompt Engineering
Làm việc nhóm
AI tạo sinh
Đạo đức AI
Kỹ năng số
```

---

## 5.2. Nút hành động trong từng project

Mỗi project nên có một nút:

```text
Xem bài làm
```

Có thể thêm nút phụ nếu cần:

```text
Xem mô tả
```

Nhưng không nên quá nhiều nút. Portfolio cần gọn, không phải bảng điều khiển tàu vũ trụ.

---

## 5.3. Text thay thế khi chưa có link

Nếu chưa có link thật, hiển thị:

```text
Link bài làm sẽ được cập nhật sau.
```

hoặc để button disabled:

```text
Đang cập nhật
```

---

# 6. Yêu cầu về ảnh minh họa

Tạo folder:

```text
/assets/images/
```

Dùng các file placeholder:

```text
file-management.png
academic-search.png
prompt-engineering.png
online-collaboration.png
ai-content-creation.png
responsible-ai.png
hero-illustration.png
```

Nếu chưa có ảnh thật, có thể dùng:

- Placeholder gradient.
- Card mockup.
- Icon minh họa.
- Screenshot giả lập nhưng không chứa thông tin sai lệch.

Yêu cầu ảnh:

- Bo góc mềm.
- Có shadow nhẹ.
- Cùng tỉ lệ nếu có thể.
- Không kéo méo ảnh.
- Có alt text tiếng Việt.

Alt text gợi ý:

```text
Minh họa quản lý tệp và thư mục
Minh họa tìm kiếm thông tin học thuật
Minh họa viết prompt hiệu quả
Minh họa hợp tác trực tuyến
Minh họa sáng tạo nội dung với AI
Minh họa sử dụng AI có trách nhiệm
```

---

# 7. Yêu cầu code và cấu trúc project

Nếu dùng React, nên chia component:

```text
src/
  components/
    Header.jsx
    Hero.jsx
    IntroSection.jsx
    ProjectSection.jsx
    SummarySection.jsx
    Footer.jsx
  data/
    projects.js
    summary.js
  assets/
    images/
  App.jsx
  main.jsx
  index.css
```

Nếu dùng HTML/CSS/JS thuần:

```text
index.html
style.css
script.js
assets/
  images/
```

Nên tách dữ liệu project thành mảng/object để dễ sửa:

```js
const projects = [
  {
    title: "Quản lý tệp và thư mục",
    goal: "...",
    work: "...",
    link: "#",
    reflection: "...",
    image: "/assets/images/file-management.png",
    imageAlt: "Minh họa quản lý tệp và thư mục"
  }
]
```

---

# 8. Tiêu chí hoàn thành

Website hoàn thành khi đáp ứng đủ:

- Có header/navbar.
- Có hero section đẹp.
- Có section Giới thiệu.
- Có section Dự án với đủ 6 mục.
- Mỗi mục có tên bài, mục tiêu, bài làm, link placeholder, nhận xét ngắn và ảnh minh họa.
- Có section Tổng kết với đủ 5 mục.
- Có footer.
- Giao diện responsive.
- Nội dung tiếng Việt đầy đủ.
- Không ghi tiêu đề project theo dạng “Bài 1”, “Bài 2”.
- Không tạo phần “minh chứng” riêng trong layout project.
- Mỗi tab/section có cảm giác như một landing page nhỏ, không giống trang tài liệu thô.
- Code sạch, dễ chỉnh sửa link và ảnh sau này.

---

# 9. Ghi chú triển khai cuối cùng

Ưu tiên tạo sản phẩm đẹp, gọn, chuyên nghiệp và dễ nộp. Website cần thể hiện đây là một portfolio học tập cá nhân, không phải một bản báo cáo dài. Nội dung chỉ cần đủ rõ để người xem hiểu mỗi bài đã làm gì, mục tiêu là gì, sản phẩm nằm ở đâu và người thực hiện rút ra điều gì.

Khi cần thêm ảnh thật hoặc link thật, chỉ cần thay các placeholder trong code.
