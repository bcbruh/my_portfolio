/* Structured, hand-curated content for the six learning projects.
   Each project is rendered directly from these blocks by script.js — no
   heuristic parsing — so the layout stays clean, accurate and professional.

   Block types:
     { t: "h2",  text }                     – section heading (1., 2., I., II.)
     { t: "h3",  text }                      – subsection (2.1, Prompt cơ bản…)
     { t: "h4",  text }                      – sub-subsection (3.2.1…)
     { t: "p",   text }                      – paragraph (URLs auto-linked)
     { t: "ul",  items: [ … ] }              – bullet list
     { t: "ol",  items: [ … ] }              – numbered list
     { t: "info", rows: [ [label, value] ] } – key/value panel
     { t: "table", caption, rows: [ […] ] }  – table (first row = header)
     { t: "prompt", label, text }            – prompt / quote box (\n → line break)
     { t: "note", text }                     – highlighted callout
     { t: "flow", steps: [ … ] }             – process flow with arrows
     { t: "figure", src, caption }           – single image
     { t: "figrow", items: [ {src,caption} ]}– two images side by side
     { t: "slides", items: [ {src,caption} ]}– wide slide gallery (PPTX)
*/

const IMG = {
  tep: "assets/report-images/thao-tac-tep-va-thu-muc/",
  danhgia: "assets/report-images/su-dung-ai-danh-gia-du-lieu/",
  tandung: "assets/report-images/tan-dung-ai-trong-moi-truong-so-bao-cao/",
  slide: "assets/report-images/tan-dung-ai-trong-moi-truong-so/",
  trachnhiem: "assets/report-images/su-dung-ai-co-trach-nhiem/",
};

window.projectContent = [
  /* ===================================================================
     01 — Thực hành thao tác tệp và thư mục  (DOCX)
  =================================================================== */
  {
    title: "Thực hành thao tác tệp và thư mục",
    source: { label: "Báo cáo DOCX", file: "https://docs.google.com/document/d/1DnKBTsO3k2SGVRjyqhiG_v8IR7k3POb0/edit?usp=drive_link&ouid=103327445161011042221&rtpof=true&sd=true" },
    blocks: [
      { t: "h2", text: "1. Thông tin bài tập" },
      { t: "p", text: "Mục tiêu của bài thực hành là rèn luyện kỹ năng tạo, đổi tên, sao chép, di chuyển, xóa tệp và thư mục một cách thành thạo trên hệ điều hành Windows. Các thao tác được thực hiện chủ yếu bằng File Explorer." },
      { t: "info", rows: [
        ["Mục tiêu", "Rèn luyện thao tác quản lý tệp và thư mục trên Windows."],
        ["Yêu cầu", "Thực hiện đầy đủ các bước: tạo thư mục, tạo tệp, đổi tên, sao chép, di chuyển, xóa và khôi phục từ Thùng rác."],
        ["Minh chứng", "Chụp màn hình từng bước thực hiện và trình bày trong báo cáo."],
      ]},

      { t: "h2", text: "2. Quy trình thực hiện" },
      { t: "p", text: "Các bước dưới đây được thực hiện theo đúng yêu cầu của bài tập. Mỗi bước có mô tả thao tác và ảnh minh họa tương ứng." },

      { t: "h3", text: "2.1. Mở File Explorer và truy cập ổ đĩa" },
      { t: "p", text: "Nhấn tổ hợp phím Windows + E để mở File Explorer. Sau đó truy cập vào ổ đĩa New Volume (D:) để bắt đầu thực hành." },
      { t: "figure", src: IMG.tep + "image1.png", caption: "Minh họa bước mở File Explorer và truy cập ổ đĩa" },

      { t: "h3", text: "2.2. Tạo thư mục thực hành" },
      { t: "p", text: "Nhấp chuột phải vào khoảng trống, chọn New → Folder và đặt tên thư mục là ThucHanh_PhamXuanBac." },
      { t: "figrow", caption: "Minh họa bước tạo thư mục thực hành ThucHanh_PhamXuanBac", items: [
        { src: IMG.tep + "image2.png" },
        { src: IMG.tep + "image3.png" },
      ]},

      { t: "h3", text: "2.3. Tạo tệp văn bản" },
      { t: "p", text: "Vào thư mục vừa tạo, nhấp chuột phải vào khoảng trống, chọn New → Text Document và đặt tên tệp là GhiChu.txt." },
      { t: "figrow", caption: "Minh họa bước tạo tệp văn bản GhiChu.txt", items: [
        { src: IMG.tep + "image4.png" },
        { src: IMG.tep + "image5.png" },
      ]},

      { t: "h3", text: "2.4. Đổi tên tệp" },
      { t: "p", text: "Nhấp chuột phải vào tệp GhiChu.txt, chọn Rename, sau đó đổi tên thành GhiChuQuanTrong.txt." },
      { t: "figrow", caption: "Minh họa bước đổi tên tệp thành GhiChuQuanTrong.txt", items: [
        { src: IMG.tep + "image6.png" },
        { src: IMG.tep + "image7.png" },
      ]},

      { t: "h3", text: "2.5. Tạo thư mục con TaiLieu" },
      { t: "p", text: "Trong thư mục ThucHanh_PhamXuanBac, tạo thêm thư mục con tên là TaiLieu để lưu trữ tệp sau khi sao chép hoặc di chuyển." },
      { t: "figrow", caption: "Minh họa bước tạo thư mục con TaiLieu", items: [
        { src: IMG.tep + "image8.png" },
        { src: IMG.tep + "image9.png" },
      ]},

      { t: "h3", text: "2.6. Sao chép tệp vào thư mục TaiLieu" },
      { t: "p", text: "Nhấp chuột phải vào tệp GhiChuQuanTrong.txt, chọn Copy. Sau đó vào thư mục TaiLieu, nhấp chuột phải và chọn Paste để tạo bản sao của tệp." },
      { t: "figrow", caption: "Minh họa bước sao chép tệp vào thư mục TaiLieu", items: [
        { src: IMG.tep + "image10.png" },
        { src: IMG.tep + "image11.png" },
      ]},

      { t: "h3", text: "2.7. Tạo và di chuyển tệp DiChuyen.txt" },
      { t: "p", text: "Quay lại thư mục ThucHanh_PhamXuanBac, tạo tệp mới tên DiChuyen.txt. Sau đó chọn Cut và Paste vào thư mục TaiLieu để di chuyển tệp." },
      { t: "figrow", caption: "Minh họa bước tạo và di chuyển tệp DiChuyen.txt vào thư mục TaiLieu", items: [
        { src: IMG.tep + "image12.png" },
        { src: IMG.tep + "image13.png" },
      ]},

      { t: "h3", text: "2.8. Xóa tệp" },
      { t: "p", text: "Trong thư mục TaiLieu, nhấp chuột phải vào tệp GhiChuQuanTrong.txt và chọn Delete. Tệp được chuyển vào Recycle Bin." },
      { t: "figrow", caption: "Minh họa bước xóa tệp — tệp được chuyển vào Thùng rác (Recycle Bin)", items: [
        { src: IMG.tep + "image14.png" },
        { src: IMG.tep + "image15.png" },
      ]},

      { t: "h3", text: "2.9. Xóa vĩnh viễn và khôi phục từ Thùng rác" },
      { t: "p", text: "Chọn tệp trong Recycle Bin để xóa vĩnh viễn nếu cần. Với tệp đã xóa thông thường, có thể mở Recycle Bin, nhấp chuột phải và chọn Restore để khôi phục về vị trí ban đầu." },
      { t: "figrow", caption: "Minh họa bước xóa vĩnh viễn và khôi phục tệp từ Thùng rác", items: [
        { src: IMG.tep + "image16.png" },
        { src: IMG.tep + "image17.png" },
      ]},

      { t: "h2", text: "3. Kết quả thực hiện" },
      { t: "p", text: "Sau khi hoàn thành bài thực hành, thư mục ThucHanh_PhamXuanBac đã được tạo trên ổ đĩa D:. Bên trong thư mục có thư mục con TaiLieu và các tệp được thao tác theo yêu cầu. Các thao tác tạo mới, đổi tên, sao chép, di chuyển, xóa và khôi phục đều được minh họa bằng ảnh chụp màn hình." },

      { t: "h2", text: "4. Bảng đối chiếu yêu cầu" },
      { t: "table", caption: "Bảng 1: Đối chiếu yêu cầu và trạng thái hoàn thành", rows: [
        ["STT", "Yêu cầu", "Trạng thái"],
        ["1", "Mở File Explorer và truy cập đúng ổ đĩa/thư mục", "Hoàn thành"],
        ["2", "Tạo thư mục thực hành theo họ tên sinh viên", "Hoàn thành"],
        ["3", "Tạo tệp văn bản GhiChu.txt", "Hoàn thành"],
        ["4", "Đổi tên tệp thành GhiChuQuanTrong.txt", "Hoàn thành"],
        ["5", "Tạo thư mục con TaiLieu", "Hoàn thành"],
        ["6", "Sao chép tệp vào thư mục TaiLieu", "Hoàn thành"],
        ["7", "Tạo và di chuyển tệp DiChuyen.txt", "Hoàn thành"],
        ["8", "Xóa tệp thông thường vào Recycle Bin", "Hoàn thành"],
        ["9", "Thực hiện thao tác khôi phục hoặc xóa vĩnh viễn theo yêu cầu", "Hoàn thành"],
      ]},

      { t: "h2", text: "5. Kết luận" },
      { t: "p", text: "Bài thực hành giúp củng cố kỹ năng quản lý tệp và thư mục trên Windows. Sau quá trình thực hiện, người học nắm được cách tạo thư mục, tạo tệp, đổi tên, sao chép, di chuyển, xóa, xóa vĩnh viễn và khôi phục tệp từ Thùng rác. Đây là các thao tác cơ bản nhưng cần thiết trong học tập, làm việc và quản lý dữ liệu cá nhân." },
    ],
  },

  /* ===================================================================
     02 — Sử dụng AI để đánh giá dữ liệu  (PDF)
  =================================================================== */
  {
    title: "Sử dụng AI để đánh giá dữ liệu",
    source: { label: "Báo cáo PDF", file: "assets/reports/su-dung-ai-danh-gia-du-lieu.pdf" },
    blocks: [
      { t: "h2", text: "1. Chủ đề nghiên cứu" },
      { t: "p", text: "Chủ đề nghiên cứu của báo cáo là Sử dụng AI để đánh giá dữ liệu. Đây là một chủ đề có tính thực tiễn cao trong bối cảnh trí tuệ nhân tạo ngày càng được sử dụng rộng rãi trong học tập, nghiên cứu và phân tích thông tin." },
      { t: "p", text: "Trong nghiên cứu học thuật, người học thường phải đọc nhiều tài liệu, xác định ý chính, so sánh nguồn thông tin và rút ra nhận xét. AI có thể hỗ trợ quá trình này bằng cách tóm tắt tài liệu, phân loại ý tưởng, gợi ý hướng phân tích và giúp người dùng có cái nhìn tổng quan nhanh hơn." },
      { t: "p", text: "Tuy nhiên, AI không thể thay thế hoàn toàn vai trò của con người. Người học vẫn cần kiểm tra lại tài liệu gốc, đánh giá độ tin cậy của kết quả và đưa ra nhận định cá nhân. Vì vậy, báo cáo này tập trung xem xét vai trò của AI như một công cụ hỗ trợ trong quá trình đánh giá dữ liệu." },

      { t: "h2", text: "2. Nguồn thông tin sử dụng" },
      { t: "p", text: "Để phục vụ cho chủ đề nghiên cứu, báo cáo sử dụng một số nguồn tài liệu liên quan đến phân tích dữ liệu, hồi quy tuyến tính và tác động của trí tuệ nhân tạo trong giáo dục." },
      { t: "table", caption: "Bảng 1: Các nguồn tài liệu được sử dụng trong báo cáo", rows: [
        ["STT", "Nguồn tài liệu", "Nội dung liên quan"],
        ["1", "Regression Analysis and Linear Models: Concepts, Applications and Implementation", "Cung cấp kiến thức nền về hồi quy tuyến tính, mô hình dữ liệu và ứng dụng trong phân tích định lượng."],
        ["2", "Impact of artificial intelligence on human loss in decision making, laziness and safety in education", "Phân tích ảnh hưởng của AI đến quá trình ra quyết định, sự phụ thuộc vào công nghệ và vấn đề an toàn trong giáo dục."],
        ["3", "The Impact of Artificial Intelligence (AI) on Students’ Academic Development", "Đề cập đến tác động của AI đối với sự phát triển học thuật của sinh viên."],
      ]},
      { t: "h3", text: "2.1. Danh sách liên kết tài liệu" },
      { t: "ul", items: [
        "Regression Analysis and Linear Models: Concepts, Applications and Implementation.",
        "Impact of artificial intelligence on human loss in decision making, laziness and safety in education: https://www.nature.com/articles/s41599-023-01787-8",
        "The Impact of Artificial Intelligence (AI) on Students’ Academic Development: https://www.mdpi.com/2227-7102/15/3/343",
      ]},

      { t: "h2", text: "3. Quá trình sử dụng AI" },
      { t: "p", text: "AI được sử dụng để hỗ trợ đọc, tóm tắt và phân tích các nguồn tài liệu. Thay vì đọc toàn bộ tài liệu một cách thủ công ngay từ đầu, người dùng có thể yêu cầu AI tóm tắt nội dung chính, xác định luận điểm quan trọng và gợi ý cách so sánh giữa các nguồn." },
      { t: "h3", text: "3.1. Mục đích sử dụng AI" },
      { t: "p", text: "Trong báo cáo này, AI được sử dụng với ba mục đích chính:" },
      { t: "ul", items: [
        "Tóm tắt nhanh nội dung của các tài liệu nghiên cứu.",
        "Hỗ trợ rút ra ý chính liên quan đến đánh giá dữ liệu và giáo dục.",
        "So sánh thông tin từ nhiều nguồn để tạo thành nhận xét tổng hợp.",
      ]},
      { t: "h3", text: "3.2. Prompt sử dụng" },
      { t: "prompt", label: "Prompt", text: "Tóm tắt nội dung chính của các nguồn tài liệu sau và đánh giá vai trò của AI trong hỗ trợ phân tích dữ liệu, nghiên cứu học thuật và giáo dục. Tập trung vào các ý chính, mức độ hữu ích, hạn chế và những điểm cần kiểm chứng lại từ tài liệu gốc." },
      { t: "h3", text: "3.3. Kết quả AI trả về" },
      { t: "p", text: "AI đã đưa ra phần tóm tắt theo từng nguồn, xác định các nội dung chính và gợi ý một số hướng phân tích. Kết quả trả về có cấu trúc khá rõ ràng, giúp người dùng nhanh chóng nắm được nội dung cơ bản của tài liệu." },
      { t: "p", text: "Tuy nhiên, kết quả của AI vẫn cần được kiểm tra lại vì AI có thể diễn giải chưa chính xác, bỏ qua chi tiết quan trọng hoặc suy luận vượt quá nội dung trong tài liệu gốc. Đây là điểm rất cần chú ý khi sử dụng AI trong môi trường học thuật." },
      { t: "h3", text: "3.4. Minh họa quá trình sử dụng AI" },
      { t: "figure", src: IMG.danhgia + "image-p4-1.png", caption: "Prompt yêu cầu AI tóm tắt và đánh giá các tài liệu nghiên cứu" },
      { t: "figure", src: IMG.danhgia + "image-p4-2.png", caption: "Kết quả AI trả về sau khi phân tích các nguồn tài liệu" },

      { t: "h2", text: "4. So sánh giữa AI và hiểu biết cá nhân" },
      { t: "p", text: "Việc so sánh giữa AI và hiểu biết cá nhân giống như đối chiếu giữa một “cỗ máy lọc dữ liệu” và một “người quan sát thực tế”. AI rất giỏi trong việc quét nhanh nhiều trang tài liệu để rút ra ý chính, khái niệm và các thông tin nổi bật. Nhờ đó, người học có thể có được cái nhìn tổng quan trong thời gian ngắn." },
      { t: "p", text: "Tuy nhiên, AI thường chỉ xử lý thông tin dựa trên mặt chữ. Trong khi đó, con người có khả năng hiểu bối cảnh, nhận ra ẩn ý, đánh giá mức độ phù hợp và phát hiện những điểm chưa hợp lý trong lập luận. Đây là điều rất quan trọng trong nghiên cứu học thuật, vì không phải thông tin nào được trình bày rõ ràng cũng có nghĩa là hoàn toàn chính xác." },
      { t: "table", caption: "Bảng 2: So sánh vai trò của AI và hiểu biết cá nhân", rows: [
        ["Tiêu chí", "AI", "Hiểu biết cá nhân"],
        ["Tốc độ xử lý", "Rất nhanh, có thể tóm tắt nhiều tài liệu trong thời gian ngắn", "Chậm hơn vì cần đọc, suy nghĩ và kiểm tra từng phần"],
        ["Khả năng bao quát", "Có thể tổng hợp nhiều nguồn cùng lúc", "Phụ thuộc vào thời gian và kinh nghiệm của người đọc"],
        ["Hiểu bối cảnh", "Còn hạn chế, dễ hiểu theo mặt chữ", "Tốt hơn vì có thể liên hệ với thực tế và kiến thức nền"],
        ["Độ tin cậy", "Cần kiểm chứng lại với tài liệu gốc", "Có thể đánh giá sâu hơn nếu người đọc có kiến thức tốt"],
        ["Vai trò phù hợp", "Hỗ trợ tóm tắt, gợi ý, tạo khung phân tích", "Kiểm duyệt, đánh giá và đưa ra nhận định cuối cùng"],
      ]},
      { t: "p", text: "Sự kết hợp giữa AI và con người tạo ra một quy trình hiệu quả hơn. AI hỗ trợ phần khung sườn logic, bao quát nội dung và gợi ý hướng triển khai. Con người đóng vai trò kiểm duyệt, bổ sung chiều sâu và đảm bảo kết quả phù hợp với mục tiêu nghiên cứu." },

      { t: "h2", text: "5. Đánh giá độ chính xác và hữu ích của AI" },
      { t: "h3", text: "5.1. Độ chính xác" },
      { t: "p", text: "AI có khả năng tóm tắt và trình bày đúng các ý chính của tài liệu, giúp người học nhanh chóng nắm được nội dung cốt lõi. Đây là điểm mạnh rõ ràng, đặc biệt khi phải xử lý nhiều nguồn thông tin trong thời gian ngắn." },
      { t: "p", text: "Tuy nhiên, độ chính xác của AI chủ yếu nằm ở mức khái niệm tổng quát. AI thường lược bỏ các chi tiết kỹ thuật quan trọng như phương pháp nghiên cứu, giả định, cách chứng minh hoặc giới hạn của dữ liệu. Trong một số trường hợp, AI có thể diễn giải vượt quá nội dung tài liệu, ví dụ biến mối tương quan thành quan hệ nhân quả." },
      { t: "p", text: "Vì vậy, thông tin do AI tạo ra không nên được sử dụng trực tiếp như nguồn học thuật chính. Người dùng cần đối chiếu lại với tài liệu gốc trước khi đưa vào báo cáo, bài nghiên cứu hoặc kết luận chính thức." },
      { t: "h3", text: "5.2. Mức độ hữu ích" },
      { t: "p", text: "AI rất hữu ích trong giai đoạn đầu của nghiên cứu. Công cụ này giúp người học tóm tắt tài liệu, tổng hợp nhiều nguồn, xác định các luận điểm chính và gợi ý hướng nghiên cứu tiếp theo. Nhờ đó, quá trình tiếp cận tài liệu trở nên nhanh hơn và có định hướng hơn." },
      { t: "p", text: "Tuy nhiên, AI không thể thay thế việc đọc và phân tích tài liệu gốc. AI cũng không đủ độ tin cậy để trở thành nguồn trích dẫn chính trong một bài nghiên cứu học thuật. Để đạt chất lượng tốt, người nghiên cứu cần xem AI như một công cụ hỗ trợ, không phải người làm thay toàn bộ quá trình nghiên cứu." },

      { t: "h2", text: "6. Phân tích vai trò của AI trong nghiên cứu học thuật" },
      { t: "h3", text: "6.1. AI làm tốt những gì?" },
      { t: "p", text: "AI thể hiện rõ ưu thế ở tốc độ xử lý thông tin, khả năng tóm tắt nhanh và hỗ trợ tổ chức ý tưởng. Khi phải đọc nhiều tài liệu, AI có thể giúp người học xác định nội dung nào quan trọng, tài liệu nào liên quan và nên tiếp cận vấn đề theo hướng nào." },
      { t: "p", text: "Ngoài ra, AI còn giúp tạo ra khung phân tích ban đầu. Điều này đặc biệt hữu ích với sinh viên khi mới bắt đầu làm quen với một chủ đề nghiên cứu, vì người học có thể tránh được tình trạng đọc lan man nhưng không biết nên tập trung vào đâu." },
      { t: "h3", text: "6.2. Hạn chế của AI" },
      { t: "p", text: "Hạn chế lớn nhất của AI là khả năng tạo ra thông tin chưa được kiểm chứng. AI có thể trình bày nội dung rất mạch lạc nhưng không đảm bảo rằng toàn bộ thông tin đều chính xác. Đây là vấn đề nguy hiểm, vì văn bản do AI tạo ra thường có vẻ thuyết phục ngay cả khi bên trong có lỗi." },
      { t: "p", text: "Bên cạnh đó, AI thiếu trải nghiệm thực tế và khả năng đánh giá theo ngữ cảnh cụ thể. Trong nghiên cứu học thuật, một kết luận không chỉ cần đúng về mặt câu chữ mà còn phải đúng trong phạm vi dữ liệu, phương pháp và mục tiêu nghiên cứu." },
      { t: "h3", text: "6.3. Cách sử dụng AI hợp lý" },
      { t: "p", text: "Để sử dụng AI hiệu quả, người học nên xem AI là công cụ hỗ trợ ban đầu. Có thể dùng AI để tóm tắt, gợi ý dàn ý, so sánh nguồn và phát hiện các hướng phân tích. Tuy nhiên, bước cuối cùng vẫn phải là đọc lại tài liệu gốc, kiểm tra thông tin và tự đưa ra đánh giá cá nhân." },
      { t: "p", text: "Một quy trình hợp lý có thể là:" },
      { t: "flow", steps: ["Tài liệu gốc", "AI tóm tắt", "Người học kiểm tra", "Phân tích cá nhân", "Kết luận"] },

      { t: "h2", text: "7. Tổng hợp nhận xét" },
      { t: "table", caption: "Bảng 3: Tổng hợp đánh giá về việc sử dụng AI trong nghiên cứu", rows: [
        ["Nội dung đánh giá", "Nhận xét"],
        ["Tốc độ", "AI giúp rút ngắn thời gian đọc và tổng hợp tài liệu."],
        ["Độ chính xác", "Tương đối tốt ở mức ý chính, nhưng cần kiểm chứng lại."],
        ["Tính học thuật", "Có thể hỗ trợ nghiên cứu, nhưng không nên dùng làm nguồn trích dẫn chính."],
        ["Tính hữu ích", "Hữu ích trong giai đoạn tìm hiểu ban đầu và xây dựng khung nội dung."],
        ["Vai trò của con người", "Vẫn là yếu tố quyết định trong kiểm duyệt, phân tích và kết luận."],
      ]},

      { t: "h2", text: "Kết luận" },
      { t: "p", text: "AI là một công cụ hỗ trợ rất hữu ích trong quá trình đánh giá dữ liệu và nghiên cứu học thuật. Công cụ này giúp người học tiết kiệm thời gian, tóm tắt nhanh tài liệu và xây dựng cái nhìn tổng quan về chủ đề nghiên cứu." },
      { t: "p", text: "Tuy nhiên, AI không thể thay thế hoàn toàn vai trò của con người. Kết quả do AI tạo ra cần được kiểm chứng với tài liệu gốc, đặc biệt trong các nội dung yêu cầu độ chính xác cao. Cách sử dụng hợp lý nhất là kết hợp tốc độ xử lý của AI với khả năng đánh giá, phản biện và hiểu bối cảnh của con người." },

      { t: "h2", text: "Danh sách công cụ và tài liệu đã sử dụng" },
      { t: "table", caption: "Bảng 4: Danh sách công cụ và nguồn thông tin", rows: [
        ["STT", "Công cụ / Tài liệu", "Mục đích sử dụng"],
        ["1", "ChatGPT", "Hỗ trợ tóm tắt, phân tích và so sánh nội dung tài liệu"],
        ["2", "Tài liệu về hồi quy tuyến tính", "Cung cấp kiến thức nền về phân tích dữ liệu"],
        ["3", "Bài báo về tác động của AI trong giáo dục", "Phân tích ảnh hưởng của AI đến học tập và ra quyết định"],
        ["4", "Bài báo về AI và sự phát triển học thuật của sinh viên", "Đánh giá vai trò của AI trong môi trường giáo dục"],
      ]},
    ],
  },

  /* ===================================================================
     03 — Viết Prompt hiệu quả cho các tác vụ học tập  (PDF)
  =================================================================== */
  {
    title: "Viết Prompt hiệu quả cho các tác vụ học tập",
    source: { label: "Báo cáo PDF", file: "assets/reports/prompt-engineering.pdf" },
    blocks: [
      { t: "h2", text: "1. Giới thiệu chủ đề" },
      { t: "p", text: "Báo cáo này nghiên cứu và ứng dụng Prompt Engineering trong quá trình học tập với chủ đề: Tìm hiểu về các thư viện điều khiển thời gian thực. Tài liệu nghiên cứu chính được sử dụng là cuốn Real-Time C++ của Christopher Kormanyos." },
      { t: "p", text: "Prompt Engineering là kỹ năng thiết kế câu lệnh đầu vào cho AI nhằm thu được kết quả chính xác, có cấu trúc và phù hợp với mục tiêu học tập. Với các tài liệu kỹ thuật chuyên sâu như lập trình C++ thời gian thực, cách đặt prompt có ảnh hưởng lớn đến chất lượng câu trả lời của AI." },
      { t: "p", text: "Mục tiêu của báo cáo là lựa chọn các tác vụ học tập phù hợp, xây dựng nhiều phiên bản prompt từ cơ bản đến nâng cao, thử nghiệm kết quả và rút ra nguyên tắc viết prompt hiệu quả." },
      { t: "info", rows: [
        ["Chủ đề nghiên cứu", "Tìm hiểu về các thư viện điều khiển thời gian thực."],
        ["Tài liệu nghiên cứu", "Real-Time C++ – Christopher Kormanyos."],
      ]},

      { t: "h2", text: "2. Lựa chọn và phân tích tác vụ học tập" },
      { t: "p", text: "Để đạt được hiệu quả cao nhất trong việc nghiên cứu một tài liệu kỹ thuật chuyên sâu về hệ thống nhúng, ba tác vụ học tập được lựa chọn và phân tích kỹ lưỡng. Các tác vụ này không chỉ yêu cầu AI tóm tắt thông tin, mà còn cần giải thích khái niệm, phân loại thuật ngữ và tạo câu hỏi kiểm tra tư duy hệ thống." },
      { t: "h3", text: "2.1. Tác vụ 1: Tóm tắt cấu trúc và hệ thống thuật ngữ cốt lõi" },
      { t: "info", rows: [
        ["Mục tiêu", "Xây dựng một “bản đồ khái niệm” cho cuốn sách hơn 600 trang, tập trung vào các thư viện C++ thời gian thực."],
        ["Thách thức", "Phải tách biệt được sự khác biệt giữa C++ tiêu chuẩn và C++ tối ưu cho vi điều khiển, đặc biệt trong các môi trường có giới hạn về bộ nhớ, tốc độ xử lý và tính xác định thời gian."],
      ]},
      { t: "h3", text: "2.2. Tác vụ 2: Giải thích khái niệm phức tạp" },
      { t: "info", rows: [
        ["Mục tiêu", "Chuyển đổi các lý thuyết trừu tượng về lập trình siêu mẫu thành các ví dụ thực hành cụ thể."],
        ["Thách thức", "Giải thích cách dịch chuyển tính toán từ runtime sang compile-time để đảm bảo tính deterministic, tức thời gian thực thi có thể dự đoán được trong hệ thống thời gian thực."],
      ]},
      { t: "h3", text: "2.3. Tác vụ 3: Thiết kế bộ câu hỏi kiểm tra tư duy hệ thống" },
      { t: "info", rows: [
        ["Mục tiêu", "Tạo ra các tình huống giả định để kiểm tra khả năng vận dụng kiến thức vào xử lý ngắt, quản lý bộ nhớ và quản lý tài nguyên."],
        ["Thách thức", "Các câu hỏi cần mang tính phân tích sự đánh đổi, hay trade-offs, thay vì chỉ kiểm tra khả năng ghi nhớ lý thuyết."],
      ]},
      { t: "table", caption: "Bảng 1: Ba tác vụ học tập được lựa chọn", rows: [
        ["Tác vụ", "Mục tiêu", "Thách thức"],
        ["1", "Tóm tắt cấu trúc và thuật ngữ cốt lõi", "Phân biệt C++ tiêu chuẩn và C++ tối ưu cho vi điều khiển"],
        ["2", "Giải thích khái niệm phức tạp", "Làm rõ compile-time, runtime và deterministic timing"],
        ["3", "Thiết kế bộ câu hỏi kiểm tra", "Tạo câu hỏi phân tích trade-offs thay vì học thuộc"],
      ]},

      { t: "h2", text: "3. Xây dựng các phiên bản prompt" },
      { t: "p", text: "Quá trình xây dựng prompt được chia thành ba cấp độ: Cơ bản, Cải tiến và Nâng cao. Mỗi cấp độ thể hiện mức độ cụ thể hóa yêu cầu khác nhau. Prompt càng rõ vai trò, bối cảnh và cấu trúc đầu ra thì kết quả AI trả về càng có chất lượng tốt hơn." },
      { t: "h3", text: "3.1. Tác vụ 1: Tóm tắt tài liệu và tổng hợp thuật ngữ" },
      { t: "prompt", label: "Prompt cơ bản", text: "Tóm tắt các thư viện C++ được đề cập trong cuốn sách Real-Time C++ của Kormanyos." },
      { t: "prompt", label: "Prompt cải tiến", text: "Hãy liệt kê và tóm tắt ngắn gọn các thư viện quan trọng nhất dùng trong lập trình phần mềm nhúng từ cuốn sách của Kormanyos. Chia thành nhóm thư viện chuẩn và thư viện tối ưu riêng cho vi điều khiển." },
      { t: "prompt", label: "Prompt nâng cao – Role-playing & Taxonomy", text: "Bạn là một giảng viên chuyên ngành Hệ thống nhúng. Hãy lập một bảng tóm tắt các thư viện và thuật ngữ phức tạp được đề cập trong cuốn sách Real-Time C++. Yêu cầu:\n• Tên thư viện.\n• Chức năng chính.\n• Thuật ngữ quan trọng đi kèm, ví dụ: ISR, Fixed-point arithmetic.\n• Giải thích tại sao các thư viện này giúp tối ưu hóa bộ nhớ." },
      { t: "h3", text: "3.2. Tác vụ 2: Giải thích khái niệm Template Metaprogramming" },
      { t: "prompt", label: "Prompt cơ bản", text: "Template Metaprogramming trong Real-Time C++ là gì?" },
      { t: "prompt", label: "Prompt cải tiến", text: "Giải thích khái niệm Template Metaprogramming dựa trên nội dung sách của Kormanyos. Tại sao kỹ thuật này lại quan trọng đối với việc tối ưu hóa hiệu suất hệ thống thời gian thực?" },
      { t: "prompt", label: "Prompt nâng cao – Few-shot & Structured Reasoning", text: "Bạn là một Senior Embedded Software Engineer. Hãy giải thích Template Metaprogramming theo quy trình:\n• Định nghĩa kỹ thuật trong ngữ cảnh compile-time.\n• Cung cấp ví dụ mã nguồn so sánh cách tính giai thừa bằng hàm thông thường ở runtime và bằng TMP ở compile-time.\n• Phân tích lợi ích về deterministic timing cho hệ thống an toàn." },
      { t: "h3", text: "3.3. Tác vụ 3: Thiết kế bộ câu hỏi kiểm tra" },
      { t: "prompt", label: "Prompt cơ bản", text: "Tạo 5 câu hỏi trắc nghiệm về cuốn sách Real-Time C++." },
      { t: "prompt", label: "Prompt cải tiến", text: "Tạo bộ 5 câu hỏi kiểm tra từ mức độ dễ đến khó về các chủ đề: quản lý bộ nhớ, xử lý ngắt và tối ưu hóa C++ trong hệ thống nhúng dựa trên tài liệu của Kormanyos." },
      { t: "prompt", label: "Prompt nâng cao – Contextual Scenarios", text: "Dựa trên nội dung cuốn Real-Time C++, hãy đóng vai một người phỏng vấn kỹ thuật để tạo bộ 5 câu hỏi tình huống. Ví dụ: “Nếu hệ thống gặp lỗi tràn bộ nhớ khi sử dụng Dynamic Memory, bạn sẽ dùng kỹ thuật nào trong sách để khắc phục?”\nYêu cầu: Mỗi câu hỏi phải đi kèm đáp án phân tích sâu về các trade-offs giữa tốc độ thực thi và dung lượng bộ nhớ." },

      { t: "h2", text: "4. Thử nghiệm và so sánh kết quả" },
      { t: "h3", text: "4.1. Quá trình thử nghiệm" },
      { t: "p", text: "Các phiên bản prompt được thử nghiệm bằng ChatGPT AI nhằm quan sát sự khác biệt giữa đầu ra của prompt cơ bản, prompt cải tiến và prompt nâng cao. Kết quả thử nghiệm được lưu trong các tài liệu riêng:" },
      { t: "ul", items: ["Prompt cơ bản: Prompt cơ bản.pdf", "Prompt cải tiến: Prompt cải tiến.pdf", "Prompt nâng cao: Prompt nâng cao.pdf"] },
      { t: "h3", text: "4.2. Liên kết kết quả thử nghiệm" },
      { t: "p", text: "Kết quả thử nghiệm của ba cấp độ prompt được lưu dưới dạng file riêng. Các liên kết dưới đây thể hiện quá trình sử dụng ChatGPT AI để kiểm tra chất lượng đầu ra của từng loại prompt." },
      { t: "table", caption: "Bảng 2: Liên kết kết quả thử nghiệm các phiên bản prompt", rows: [
        ["STT", "Phiên bản prompt", "Liên kết kết quả thử nghiệm"],
        ["1", "Prompt cơ bản", { text: "Xem kết quả Prompt cơ bản", href: "https://drive.google.com/file/d/1ESv7djxy_4ELAWKRbtGBU41cklQx9Pdy/view?usp=drive_link" }],
        ["2", "Prompt cải tiến", { text: "Xem kết quả Prompt cải tiến", href: "https://drive.google.com/file/d/1Ssr3bwRoI8CDvVJgQQeOh-075Sa72h-k/view?usp=drive_link" }],
        ["3", "Prompt nâng cao", { text: "Xem kết quả Prompt nâng cao", href: "https://drive.google.com/file/d/1GaexAtUr5H9Eah6XWtVRAqgufZbLHOA7/view?usp=drive_link" }],
      ]},
      { t: "h3", text: "4.3. So sánh kết quả" },
      { t: "table", caption: "Bảng 3: So sánh kết quả giữa ba cấp độ prompt", rows: [
        ["Tiêu chí", "Cơ bản", "Cải tiến", "Nâng cao"],
        ["Độ chính xác", "Trung bình, dễ bị chung chung", "Cao, bám sát tài liệu", "Rất cao, có chiều sâu chuyên môn"],
        ["Cấu trúc", "Liệt kê đơn giản", "Có phân loại rõ ràng", "Có hệ thống, logic chặt chẽ"],
        ["Tính ứng dụng", "Chỉ dùng để tham khảo sơ bộ", "Dùng được cho học tập", "Dùng được trong nghiên cứu hoặc phát triển dự án"],
      ]},
      { t: "p", text: "Qua bảng so sánh, có thể thấy prompt nâng cao tạo ra kết quả tốt nhất vì có vai trò rõ ràng, yêu cầu cụ thể và bối cảnh chuyên môn đầy đủ. Prompt cơ bản thường chỉ tạo ra câu trả lời chung chung, trong khi prompt cải tiến đã có chất lượng tốt hơn nhờ giới hạn phạm vi và yêu cầu phân loại." },

      { t: "h2", text: "5. Phân tích hiệu quả prompt" },
      { t: "p", text: "Sự vượt trội của prompt nâng cao đến từ việc áp dụng các kỹ thuật Prompt Engineering chuyên sâu. Khi AI được cung cấp vai trò, bối cảnh, yêu cầu định dạng và tiêu chí đánh giá, kết quả trả về thường có chiều sâu hơn và ít bị lan man." },
      { t: "h3", text: "5.1. Thiết lập vai trò" },
      { t: "p", text: "Việc định danh AI là “Senior Embedded Software Engineer” hoặc “giảng viên chuyên ngành Hệ thống nhúng” giúp câu trả lời mang tính chuyên môn hơn. Vai trò này định hướng AI tập trung vào các yếu tố như an toàn hệ thống, tối ưu phần cứng, bộ nhớ và thời gian thực thi." },
      { t: "h3", text: "5.2. Ràng buộc cấu trúc" },
      { t: "p", text: "Prompt nâng cao yêu cầu AI trả lời theo cấu trúc cụ thể, ví dụ so sánh giữa runtime và compile-time hoặc lập bảng thư viện, chức năng, thuật ngữ liên quan. Điều này giúp đầu ra dễ đọc, dễ kiểm tra và phù hợp với mục tiêu học tập." },
      { t: "h3", text: "5.3. Kết nối chất lượng đầu ra" },
      { t: "p", text: "Cấu trúc prompt càng chặt chẽ, câu trả lời càng ít hiện tượng “hallucination” và bám sát hơn vào tài liệu thực tế. Trong các chủ đề kỹ thuật như Real-Time C++, điều này đặc biệt quan trọng vì một sai lệch nhỏ về khái niệm có thể dẫn đến hiểu nhầm nghiêm trọng." },
      { t: "table", caption: "Bảng 4: Các kỹ thuật Prompt Engineering được áp dụng", rows: [
        ["Kỹ thuật Prompt Engineering", "Hiệu quả tạo ra"],
        ["Role-playing", "Giúp AI trả lời theo góc nhìn chuyên môn phù hợp"],
        ["Structural Constraints", "Làm đầu ra rõ ràng, có tổ chức và dễ đánh giá"],
        ["Few-shot / ví dụ mẫu", "Giúp AI hiểu kiểu câu trả lời mong muốn"],
        ["Contextual Scenarios", "Tăng tính thực tế và khả năng vận dụng"],
        ["Taxonomy", "Hỗ trợ phân loại khái niệm, thuật ngữ và thư viện"],
      ]},

      { t: "h2", text: "6. Tổng hợp nguyên tắc và mẹo viết prompt" },
      { t: "p", text: "Dựa trên kết quả thử nghiệm, có thể rút ra một số nguyên tắc quan trọng để tối ưu hóa việc học tập qua AI." },
      { t: "h3", text: "6.1. Nguyên tắc định vị nguồn tri thức" },
      { t: "p", text: "Khi làm việc với tài liệu cụ thể, prompt nên đi kèm tên tài liệu, tác giả hoặc phiên bản. Ví dụ: Real-Time C++ 3rd Edition. Điều này giúp giới hạn không gian dữ liệu của AI và giảm nguy cơ trả lời lan man ngoài phạm vi." },
      { t: "h3", text: "6.2. Kỹ thuật tư duy đa chiều" },
      { t: "p", text: "Thay vì hỏi “Cái này là gì?”, người học nên đặt câu hỏi dạng so sánh hoặc điều kiện. Ví dụ: “Cái này khác với kỹ thuật X như thế nào trong điều kiện Y?”. Cách hỏi này thúc đẩy AI tạo câu trả lời có chiều sâu và mang tính phản biện hơn." },
      { t: "h3", text: "6.3. Yêu cầu minh họa thực tế" },
      { t: "p", text: "Đối với lập trình, nên yêu cầu ví dụ mã nguồn và giải thích từng phần để kiểm chứng độ hiểu của AI về cú pháp và logic. Với chủ đề Template Metaprogramming, ví dụ so sánh runtime và compile-time giúp làm rõ sự khác biệt giữa lý thuyết và ứng dụng." },
      { t: "h3", text: "6.4. Kiểm soát tông giọng" },
      { t: "p", text: "Các từ khóa như “ngôn ngữ kỹ thuật chính xác”, “giải thích cho sinh viên ngành công nghệ” hoặc “phân tích theo hướng hệ thống nhúng” giúp câu trả lời tránh bị đại trà. Đây là cách đơn giản nhưng hiệu quả để điều chỉnh chất lượng đầu ra." },
      { t: "h3", text: "Quy trình viết prompt hiệu quả" },
      { t: "flow", steps: ["Xác định mục tiêu", "Chỉ rõ nguồn tài liệu", "Thiết lập vai trò", "Ràng buộc cấu trúc đầu ra", "Yêu cầu ví dụ / tình huống", "Kiểm tra và tinh chỉnh"] },

      { t: "h2", text: "7. Nguồn tài liệu" },
      { t: "p", text: "Nguồn tài liệu chính được sử dụng trong báo cáo:" },
      { t: "ul", items: [
        "Real-Time C++: Efficient Object-Oriented and Template Microcontroller Programming, 3rd Edition – Christopher Kormanyos.",
        "Link tham khảo: https://fr.scribd.com/document/985792277/Real-Time-C-Efficient-Object-Oriented-and-Template-Microcontroller-Programming-3rd-Edition-Kormanyos-PDF",
      ]},
      { t: "p", text: "Bài báo cáo có sự hỗ trợ của AI trong việc rà soát lỗi nhỏ, lập khung bảng so sánh và thiết kế sườn bài." },

      { t: "h2", text: "Kết luận" },
      { t: "p", text: "Qua quá trình thử nghiệm, có thể thấy Prompt Engineering đóng vai trò quan trọng trong việc nâng cao chất lượng học tập với AI. Prompt cơ bản chỉ phù hợp để tham khảo nhanh, prompt cải tiến giúp kết quả rõ ràng hơn, còn prompt nâng cao tạo ra câu trả lời có chiều sâu, bám sát ngữ cảnh và có giá trị ứng dụng cao hơn." },
      { t: "p", text: "Đối với các tài liệu kỹ thuật chuyên sâu như Real-Time C++, người học cần thiết kế prompt có nguồn tri thức rõ ràng, vai trò cụ thể, cấu trúc đầu ra chặt chẽ và yêu cầu phân tích thực tế. AI không thay thế việc học, nhưng có thể trở thành công cụ hỗ trợ mạnh nếu được sử dụng đúng cách." },

      { t: "h2", text: "Tóm tắt nội dung chính" },
      { t: "table", caption: "Bảng 5: Tóm tắt báo cáo", rows: [
        ["STT", "Nội dung", "Kết quả chính"],
        ["1", "Chủ đề nghiên cứu", "Ứng dụng Prompt Engineering để tìm hiểu thư viện điều khiển thời gian thực"],
        ["2", "Tài liệu chính", "Real-Time C++ của Christopher Kormanyos"],
        ["3", "Ba cấp độ prompt", "Cơ bản, Cải tiến, Nâng cao"],
        ["4", "Kết quả so sánh", "Prompt nâng cao cho kết quả tốt nhất"],
        ["5", "Bài học rút ra", "Cần đặt vai trò, giới hạn nguồn, yêu cầu cấu trúc và kiểm tra lại kết quả"],
      ]},
    ],
  },

  /* ===================================================================
     04 — Tổ chức và quản lý cuộc họp trực tuyến  (PDF)
  =================================================================== */
  {
    title: "Tổ chức và quản lý cuộc họp trực tuyến",
    source: { label: "Báo cáo PDF", file: "assets/reports/to-chuc-cuoc-hop-truc-tuyen.pdf" },
    blocks: [
      { t: "h2", text: "1. Giới thiệu chủ đề" },
      { t: "p", text: "Báo cáo này trình bày quá trình tổ chức và quản lý một cuộc họp trực tuyến của nhóm nhằm lập kế hoạch thực hiện đồ án “Xây dựng Website giới thiệu sản phẩm công nghệ” trên Trello." },
      { t: "p", text: "Cuộc họp được thực hiện trên nền tảng Google Meet, với mục tiêu thống nhất công nghệ sử dụng, phân chia nhiệm vụ cho các thành viên và thiết lập quy trình quản lý công việc trên Trello. Đây là hoạt động quan trọng giúp nhóm làm việc có tổ chức hơn, tránh tình trạng nhiệm vụ bị trùng lặp hoặc không rõ người phụ trách." },
      { t: "info", rows: [
        ["Chủ đề cuộc họp", "Lập kế hoạch thực hiện đồ án “Xây dựng Website giới thiệu sản phẩm công nghệ” trên Trello."],
        ["Hình thức", "Họp trực tuyến qua Google Meet."],
        ["Mục tiêu chính", "Thống nhất công nghệ, phân chia nhiệm vụ và quản lý tiến độ bằng Trello."],
      ]},

      { t: "h2", text: "2. Kế hoạch cuộc họp" },
      { t: "h3", text: "2.1. Thông tin chung" },
      { t: "p", text: "Cuộc họp được tổ chức trực tuyến nhằm giúp các thành viên thảo luận và thống nhất kế hoạch làm việc cho giai đoạn đầu của đồ án. Việc họp online giúp tiết kiệm thời gian di chuyển, phù hợp với lịch học của các thành viên và vẫn đảm bảo khả năng trao đổi trực tiếp." },
      { t: "table", caption: "Bảng 1: Thông tin chung của cuộc họp", rows: [
        ["Nội dung", "Thông tin"],
        ["Nền tảng họp", "Google Meet"],
        ["Thời gian dự kiến", "20:30 – 21:00, ngày 18/04/2026"],
        ["Thời lượng dự kiến", "30 phút"],
        ["Chủ đề", "Lập kế hoạch xây dựng Website giới thiệu sản phẩm công nghệ"],
        ["Công cụ quản lý", "Trello"],
      ]},
      { t: "h3", text: "2.2. Danh sách thành viên" },
      { t: "p", text: "Nhóm gồm 6 thành viên tham gia đầy đủ vào cuộc họp:" },
      { t: "ol", items: ["Vũ Mộc Anh", "Đặng Xuân Bắc", "Phạm Xuân Bắc", "Phạm Đức Anh", "Trần Quang Anh", "Nguyễn Tài Dũng"] },
      { t: "h3", text: "2.3. Mục tiêu cuộc họp" },
      { t: "p", text: "Cuộc họp được tổ chức với ba mục tiêu chính:" },
      { t: "ul", items: [
        "Thống nhất các tính năng chính và ngôn ngữ lập trình cho website.",
        "Thiết lập quy trình quản lý thẻ nhiệm vụ trên Trello.",
        "Phân chia nhiệm vụ cụ thể cho 6 thành viên và ấn định deadline giai đoạn 1.",
      ]},
      { t: "h3", text: "2.4. Chương trình nghị sự" },
      { t: "table", caption: "Bảng 2: Chương trình nghị sự của cuộc họp", rows: [
        ["Thời gian", "Nội dung"],
        ["20:30 – 20:35", "Khai mạc, điểm danh và kiểm tra kết nối thiết bị"],
        ["20:35 – 20:45", "Thảo luận về kiến trúc website và định nghĩa các cột trên Trello"],
        ["20:45 – 20:55", "Chia nhóm nhỏ Front-end, Back-end và giao đầu việc"],
        ["20:55 – 21:00", "Chốt phương thức báo cáo hằng ngày và kết thúc"],
      ]},
      { t: "h3", text: "2.5. Phân công vai trò trong cuộc họp" },
      { t: "table", caption: "Bảng 3: Phân công vai trò trong cuộc họp", rows: [
        ["Vai trò", "Thành viên phụ trách"],
        ["Người điều phối", "Phạm Xuân Bắc"],
        ["Thư ký", "Vũ Mộc Anh"],
        ["Người trình bày kỹ thuật", "Phạm Đức Anh"],
      ]},

      { t: "h2", text: "3. Biên bản cuộc họp" },
      { t: "h3", text: "3.1. Thời gian thực tế" },
      { t: "p", text: "Cuộc họp bắt đầu lúc 20:30 và kết thúc lúc 21:05. So với kế hoạch ban đầu, cuộc họp vượt quá 5 phút do nhóm thảo luận kỹ hơn về phần cơ sở dữ liệu." },
      { t: "info", rows: [
        ["Thời gian thực tế", "20:30 – 21:05."],
        ["Ghi chú", "Cuộc họp vượt 5 phút do thảo luận kỹ phần cơ sở dữ liệu."],
      ]},
      { t: "h3", text: "3.2. Nội dung thảo luận chính" },
      { t: "h4", text: "3.2.1. Vấn đề 1: Công nghệ sử dụng" },
      { t: "p", text: "Nhóm thống nhất sử dụng React cho phần giao diện và Node.js cho hệ thống máy chủ. Phạm Đức Anh trình bày luồng dữ liệu giữa các trang để giúp nhóm hình dung rõ hơn kiến trúc tổng thể của website." },
      { t: "h4", text: "3.2.2. Vấn đề 2: Quản lý công việc" },
      { t: "p", text: "Trần Quang Anh đề xuất mỗi thẻ Trello cần có checklist chi tiết để dễ theo dõi tiến độ. Nguyễn Tài Dũng sẽ phụ trách kiểm tra các nhiệm vụ đã hoàn thành trước khi chuyển sang trạng thái cuối cùng." },
      { t: "h4", text: "3.2.3. Vấn đề 3: Tiến độ làm việc" },
      { t: "p", text: "Phạm Xuân Bắc đề xuất nhóm họp nhanh qua Zalo vào 22h mỗi tối để cập nhật tiến độ mà không ảnh hưởng đến lịch học ban ngày." },
      { t: "h3", text: "3.3. Tổng hợp các quyết định" },
      { t: "p", text: "Sau quá trình thảo luận, nhóm thống nhất ba quyết định chính:" },
      { t: "ol", items: [
        "Website tập trung vào trải nghiệm người dùng với chuẩn Responsive, tương thích tốt trên thiết bị di động.",
        "Trello sẽ có thêm cột “Kiểm thử (UAT)” trước khi chuyển sang “Hoàn thành”.",
        "Tài liệu thiết kế Figma phải được hoàn thành trước khi bắt đầu code Front-end.",
      ]},
      { t: "h3", text: "3.4. Danh sách nhiệm vụ tiếp theo" },
      { t: "table", caption: "Bảng 4: Danh sách nhiệm vụ sau cuộc họp", rows: [
        ["Nhiệm vụ", "Người phụ trách", "Thời hạn"],
        ["Khởi tạo Repo GitHub và phân quyền", "Vũ Mộc Anh", "20/04/2026"],
        ["Thiết kế UI/UX trên Figma", "Đặng Xuân Bắc & Phạm Xuân Bắc", "21/04/2026"],
        ["Thiết kế Database Schema", "Phạm Đức Anh & Trần Quang Anh", "22/04/2026"],
        ["Soạn thảo tài liệu API cơ bản", "Nguyễn Tài Dũng", "23/04/2026"],
      ]},

      { t: "h2", text: "4. Đánh giá của các thành viên" },
      { t: "p", text: "Sau cuộc họp, các thành viên đưa ra đánh giá cá nhân về hiệu quả tổ chức, mức độ tham gia và những điểm cần cải thiện." },
      { t: "table", caption: "Bảng 5: Đánh giá cá nhân của các thành viên", rows: [
        ["Thành viên", "Đánh giá"],
        ["Phạm Xuân Bắc", "Cuộc họp diễn ra sôi nổi. Tuy nhiên, với số lượng 6 người, đôi khi việc thảo luận bị loãng. Lần sau cần kiểm soát thời gian chặt chẽ hơn cho từng người phát biểu."],
        ["Đặng Xuân Bắc", "Các mục tiêu đều được ghi chú đầy đủ. Việc họp buổi tối giúp mọi người tập trung vì không vướng lịch lên lớp."],
        ["Vũ Mộc Anh", "Việc chia nhóm nhỏ, mỗi nhóm 2 người phụ trách một phần, là hợp lý để tối ưu hóa nhân sự."],
        ["Phạm Đức Anh", "Nhóm đã thống nhất được khung kỹ thuật nhanh hơn dự kiến. Tinh thần cộng tác rất tốt."],
        ["Trần Quang Anh", "Việc sử dụng Trello trực quan giúp dễ dàng biết nhiệm vụ cần làm vào ngày tiếp theo."],
        ["Nguyễn Tài Dũng", "Cần chú ý hơn về việc bật camera để tăng tính tương tác nhóm."],
      ]},

      { t: "h2", text: "5. Bài học kinh nghiệm" },
      { t: "h3", text: "5.1. Điểm tốt" },
      { t: "p", text: "Cuộc họp đạt được nhiều kết quả tích cực. Trước hết, sự chuẩn bị kỹ của người trình bày kỹ thuật giúp nhóm dễ dàng hình dung hệ thống. Các nội dung quan trọng như công nghệ sử dụng, cấu trúc website và quy trình quản lý công việc đều được thống nhất rõ ràng." },
      { t: "p", text: "Bên cạnh đó, việc sử dụng Trello giúp quá trình phân công 6 thành viên không bị chồng chéo nhiệm vụ. Mỗi người đều biết mình cần làm gì, thời hạn là khi nào và nhiệm vụ sẽ được kiểm tra theo quy trình nào. Ngoài ra, các thành viên thể hiện tinh thần trách nhiệm tốt, tham gia đầy đủ và đúng giờ." },
      { t: "h3", text: "5.2. Điểm cần cải thiện" },
      { t: "p", text: "Do nhóm có 6 thành viên, việc thảo luận đôi khi kéo dài hơn dự kiến. Cuộc họp vượt 5 phút so với kế hoạch ban đầu, cho thấy nhóm cần có quy định rõ hơn về thời gian phát biểu tối đa cho mỗi ý kiến." },
      { t: "p", text: "Một số thành viên gặp vấn đề về micro lúc đầu. Vì vậy, trong các cuộc họp tiếp theo, các thành viên nên vào phòng họp sớm khoảng 5 phút để kiểm tra thiết bị, đường truyền và âm thanh." },
      { t: "table", caption: "Bảng 6: Tổng hợp bài học kinh nghiệm", rows: [
        ["Nội dung", "Nhận xét"],
        ["Điểm tốt", "Chuẩn bị kỹ, phân công rõ, dùng Trello hiệu quả, thành viên tham gia đầy đủ"],
        ["Điểm cần cải thiện", "Cần kiểm soát thời gian phát biểu và kiểm tra thiết bị trước cuộc họp"],
        ["Giải pháp đề xuất", "Vào phòng họp sớm 5 phút, giới hạn thời gian cho mỗi ý kiến và ghi chú quyết định ngay trên Trello"],
      ]},

      { t: "h2", text: "6. Đánh giá hiệu quả sử dụng công cụ" },
      { t: "h3", text: "6.1. Google Meet" },
      { t: "p", text: "Google Meet giúp nhóm tổ chức cuộc họp trực tuyến nhanh chóng, dễ truy cập và phù hợp với lịch học của các thành viên. Công cụ này hỗ trợ trao đổi trực tiếp, trình bày nội dung và xử lý nhanh các vấn đề phát sinh." },
      { t: "p", text: "Tuy nhiên, chất lượng cuộc họp phụ thuộc vào thiết bị và đường truyền của từng thành viên. Nếu micro hoặc kết nối không ổn định, quá trình trao đổi có thể bị gián đoạn." },
      { t: "h3", text: "6.2. Trello" },
      { t: "p", text: "Trello đóng vai trò là công cụ quản lý nhiệm vụ chính của nhóm. Việc chia công việc thành các thẻ giúp nhóm theo dõi tiến độ rõ ràng hơn. Các cột như “Việc cần làm”, “Đang thực hiện”, “Kiểm thử (UAT)” và “Hoàn thành” giúp quy trình làm việc trực quan và dễ kiểm soát." },
      { t: "p", text: "Nhờ Trello, nhóm có thể biết nhiệm vụ nào đang chậm, ai là người phụ trách và công việc nào cần được kiểm tra trước khi hoàn tất." },
      { t: "table", caption: "Bảng 7: Đánh giá các công cụ hỗ trợ làm việc nhóm", rows: [
        ["Công cụ", "Vai trò", "Nhận xét"],
        ["Google Meet", "Tổ chức họp trực tuyến", "Dễ sử dụng, tiện trao đổi, nhưng phụ thuộc vào thiết bị và đường truyền"],
        ["Trello", "Quản lý nhiệm vụ và tiến độ", "Trực quan, dễ phân công, phù hợp với làm việc nhóm"],
        ["Zalo", "Báo cáo nhanh hằng ngày", "Tiện cập nhật tiến độ ngắn, không cần tổ chức họp dài"],
      ]},

      { t: "h2", text: "Kết luận" },
      { t: "p", text: "Cuộc họp trực tuyến đã giúp nhóm thống nhất được kế hoạch thực hiện đồ án “Xây dựng Website giới thiệu sản phẩm công nghệ”. Các nội dung quan trọng như công nghệ sử dụng, quy trình quản lý Trello, phân công nhiệm vụ và deadline đều được xác định rõ ràng." },
      { t: "p", text: "Thông qua cuộc họp, nhóm rút ra bài học rằng một cuộc họp hiệu quả cần có agenda cụ thể, vai trò rõ ràng, công cụ quản lý phù hợp và quy định thời gian hợp lý. Google Meet hỗ trợ trao đổi trực tiếp, Trello giúp quản lý công việc trực quan, còn Zalo phù hợp để cập nhật tiến độ hằng ngày." },
      { t: "p", text: "Trong các cuộc họp tiếp theo, nhóm cần kiểm soát thời gian thảo luận tốt hơn và kiểm tra thiết bị trước khi bắt đầu để tăng hiệu quả làm việc." },

      { t: "h2", text: "Tóm tắt nội dung chính" },
      { t: "table", caption: "Bảng 8: Tóm tắt báo cáo", rows: [
        ["STT", "Nội dung", "Kết quả chính"],
        ["1", "Chủ đề cuộc họp", "Lập kế hoạch xây dựng website giới thiệu sản phẩm công nghệ"],
        ["2", "Nền tảng họp", "Google Meet"],
        ["3", "Công cụ quản lý", "Trello"],
        ["4", "Công nghệ thống nhất", "React cho giao diện, Node.js cho máy chủ"],
        ["5", "Kết quả chính", "Phân công nhiệm vụ, thống nhất deadline và quy trình báo cáo"],
      ]},
    ],
  },

  /* ===================================================================
     05 — Tận dụng AI trong môi trường số  (PDF báo cáo + PPTX)
  =================================================================== */
  {
    title: "Tận dụng AI trong môi trường số",
    source: { label: "Báo cáo PDF", file: "https://drive.google.com/drive/folders/1AAPphkXzxgSCixd1C3YL9YOSKviHi_mM?usp=drive_link" },
    blocks: [
      { t: "h2", text: "1. Giới thiệu dự án" },
      { t: "p", text: "Dự án tạo ra một bài thuyết trình PowerPoint 10 slide với chủ đề “Tận dụng AI trong Môi trường Số”, hướng đến sinh viên đại học. Mục tiêu là trình bày vai trò của các công cụ AI trong học tập và làm việc, đồng thời thực hành sử dụng ít nhất 3 công cụ AI tạo sinh theo yêu cầu bài tập." },
      { t: "p", text: "Chủ đề được chọn vì tính thực tiễn cao và sự liên quan trực tiếp đến sinh viên. Quan trọng hơn, bản thân dự án là minh chứng sống động: nội dung về AI được tạo ra bằng chính các công cụ AI." },

      { t: "h2", text: "2. Quá trình sử dụng công cụ AI" },
      { t: "h3", text: "2.1. Công cụ 1 – Claude" },
      { t: "p", text: "Claude được dùng để xây dựng outline tổng thể cho bài thuyết trình." },
      { t: "prompt", label: "Prompt sử dụng", text: "Hãy xây dựng outline chi tiết cho bài thuyết trình 10-12 slide về chủ đề ’Tận dụng AI trong môi trường số’, dành cho sinh viên đại học. Mỗi slide cần có tiêu đề, 3-4 ý chính, và gợi ý hình ảnh minh họa." },
      { t: "p", text: "Claude trả về outline 10 slide đầy đủ với tiêu đề, ý chính và gợi ý hình ảnh minh họa. Kết quả có cấu trúc logic tốt, các phần chuyển tiếp tự nhiên. Sau khi nhận kết quả, tôi điều chỉnh một số ví dụ cho phù hợp hơn với sinh viên Việt Nam." },
      { t: "figure", src: IMG.tandung + "image-p2-1.png", caption: "Màn hình Claude: prompt và outline kết quả" },

      { t: "h3", text: "2.2. Công cụ 2 – ChatGPT" },
      { t: "p", text: "Sau khi có outline, ChatGPT được dùng để viết nội dung chi tiết cho từng slide." },
      { t: "prompt", label: "Prompt sử dụng", text: "Chỉ viết nội dung dạng text thuần túy, KHÔNG tạo slide, KHÔNG dùng bảng. Viết nội dung chi tiết cho 10 slide trong bài thuyết trình \"Tận dụng AI trong môi trường số\". Mỗi slide gồm tiêu đề, 3-4 gạch đầu dòng ngắn gọn, và 1 câu mô tả hình ảnh bằng tiếng Anh. Viết tiếng Việt, ngôn ngữ trẻ trung." },
      { t: "p", text: "ChatGPT trả về nội dung sinh động với nhiều ví dụ thực tế. Lưu ý: ban đầu ChatGPT tự tạo bảng và định dạng phức tạp – phải thêm lệnh “KHÔNG tạo slide, KHÔNG dùng bảng” vào prompt thì mới nhận được kết quả đúng. Đây là bài học thực tế về kỹ năng viết prompt." },
      { t: "figrow", items: [
        { src: IMG.tandung + "image-p3-2.png", caption: "Viết prompt" },
        { src: IMG.tandung + "image-p3-3.png", caption: "Kết quả prompting" },
      ]},

      { t: "h3", text: "2.3. Công cụ 3 – Gamma" },
      { t: "p", text: "Gamma là công cụ AI chuyên tạo bài thuyết trình. Toàn bộ nội dung từ ChatGPT được dán vào Gamma để tự động tạo slide với thiết kế chuyên nghiệp." },
      { t: "flow", steps: ["Đăng nhập Gamma", "Create new / Paste in text", "Dán nội dung", "Chọn theme", "Bấm Generate", "Chỉnh sửa từng slide"] },
      { t: "p", text: "Gamma tự động tạo layout, chọn hình ảnh minh họa và sắp xếp nội dung cho từng slide. Sau khi generate, tôi chỉnh sửa thêm về vị trí text, font chữ và một số hình ảnh chưa phù hợp." },
      { t: "figrow", items: [
        { src: IMG.tandung + "image-p3-4.png", caption: "Gamma đang Generate" },
        { src: IMG.tandung + "image-p3-5.png", caption: "Kết quả sau khi tạo xong" },
      ]},

      { t: "h2", text: "3. So sánh các công cụ AI" },
      { t: "table", caption: "Bảng 1: So sánh 3 công cụ AI đã sử dụng", rows: [
        ["Tiêu chí", "Claude", "ChatGPT", "Gamma"],
        ["Mục đích", "Tạo outline", "Viết nội dung", "Thiết kế slide"],
        ["Điểm mạnh", "Cấu trúc logic, mạch lạc", "Sinh động, nhiều ví dụ", "Tự động tạo slide đẹp"],
        ["Điểm yếu", "Đôi khi hơi học thuật", "Tự format không mong muốn", "Hạn chế tùy chỉnh sâu"],
        ["Miễn phí", "Có (giới hạn)", "Có (giới hạn)", "Có (giới hạn)"],
      ]},
      { t: "p", text: "Ba công cụ không cạnh tranh mà bổ trợ nhau theo chuỗi: Claude xây nền tảng → ChatGPT phát triển nội dung → Gamma hoàn thiện hình thức. Đây là mô hình AI Workflow hiệu quả trong thực tế." },

      { t: "h2", text: "4. Phân tích vai trò của AI" },
      { t: "h3", text: "4.1. AI làm tốt những gì?" },
      { t: "p", text: "AI thể hiện rõ ưu thế ở tốc độ (toàn bộ nội dung 10 slide hoàn thành dưới 3 phút), cấu trúc (tự động tổ chức thông tin logic) và gợi ý ý tưởng (đề xuất nhiều góc nhìn mà người dùng có thể chưa nghĩ đến)." },
      { t: "h3", text: "4.2. Hạn chế của AI" },
      { t: "p", text: "AI còn bộc lộ một số hạn chế: thiếu bối cảnh địa phương (ví dụ mang tính toàn cầu, ít liên quan sinh viên Việt Nam), rủi ro hallucination (đôi khi đưa ra số liệu không có nguồn xác thực), và thiếu cảm xúc cá nhân (nội dung trung tính, thiếu góc nhìn riêng)." },
      { t: "h3", text: "4.3. AI thay đổi quy trình sáng tạo như thế nào?" },
      { t: "p", text: "Trước đây, tạo bài thuyết trình đi theo hướng tuyến tính: nghiên cứu → viết → thiết kế, mỗi bước tốn nhiều thời gian riêng biệt. Với AI, quy trình trở thành vòng lặp nhanh: yêu cầu AI → đánh giá → tinh chỉnh → tích hợp. Người sáng tạo chuyển từ “người thực hiện” sang “người định hướng và kiểm duyệt”." },
      { t: "h3", text: "4.4. Các vấn đề đạo đức" },
      { t: "p", text: "Sử dụng AI trong học tập đòi hỏi sự minh bạch và trách nhiệm. Cần phân biệt rõ ranh giới giữa hỗ trợ hợp lệ và gian lận học thuật. Không nên nhập thông tin cá nhân nhạy cảm vào AI công cộng. Quan trọng nhất: AI là công cụ hỗ trợ, không phải thay thế tư duy cá nhân." },

      { t: "h2", text: "Kết luận" },
      { t: "p", text: "Dự án đã chứng minh rằng AI tạo sinh là công cụ khuếch đại năng lực, không phải thay thế con người. Khi sử dụng đúng cách – với prompt rõ ràng, tư duy phê phán và đóng góp cá nhân thực sự – AI giúp tạo ra sản phẩm chất lượng cao trong thời gian ngắn. Kỹ năng cốt lõi trong thời đại AI là biết cộng tác hiệu quả với công cụ, không phải làm mọi thứ một mình." },

      { t: "h2", text: "Danh sách công cụ đã sử dụng" },
      { t: "table", caption: "Bảng 2: Danh sách công cụ đã sử dụng", rows: [
        ["STT", "Công cụ", "Mục đích"],
        ["1", "Claude", "Tạo outline, viết code LaTeX"],
        ["2", "ChatGPT", "Viết nội dung chi tiết"],
        ["3", "Gamma", "Thiết kế slide"],
      ]},
    ],
  },

  /* ===================================================================
     06 — Sử dụng AI có trách nhiệm  (PDF)
  =================================================================== */
  {
    title: "Sử dụng AI có trách nhiệm",
    source: { label: "Báo cáo PDF", file: "assets/reports/su-dung-ai-co-trach-nhiem.pdf" },
    blocks: [
      { t: "h2", text: "I. Nghiên cứu chính sách sử dụng AI của trường" },
      { t: "p", text: "Nguồn tham khảo: Chính sách sử dụng AI của Trường Đại học Công nghệ — ĐHQGHN (UET), kết hợp tham khảo hướng dẫn của UNESCO (2023) về AI trong giáo dục đại học." },
      { t: "p", text: "Các điểm chính:" },
      { t: "ul", items: [
        "Sinh viên được dùng các công cụ AI để hỗ trợ học tập nhưng phải ghi rõ trong bài nộp.",
        "Phải ghi chú cụ thể: dùng công cụ gì, prompt gì, chỉnh sửa như thế nào.",
        "Không được nộp nguyên đầu ra AI mà không chỉnh sửa hay khai báo; không dùng AI trong kiểm tra trừ khi thầy cô cho phép.",
        "Sinh viên vẫn chịu trách nhiệm hoàn toàn về nội dung dù có dùng AI hỗ trợ.",
      ]},
      { t: "p", text: "So sánh với trường khác: Các trường khác có nhiều điểm tương đồng trong chính sách sử dụng AI." },

      { t: "h2", text: "II. Thực hiện nhiệm vụ học tập với sự hỗ trợ của AI" },
      { t: "info", rows: [
        ["Nhiệm vụ được chọn", "Tóm tắt tài liệu — tóm tắt chương về cấu trúc dữ liệu và giải thuật."],
        ["Tài liệu gốc", "Sedgewick, R. & Wayne, K. (2011). Algorithms, 4th ed., Addison-Wesley."],
      ]},
      { t: "h3", text: "Prompt 1 — Yêu cầu tóm tắt ban đầu" },
      { t: "prompt", label: "Prompt", text: "Đọc chương 1 của tài liệu sau và tóm tắt đoạn văn sau trong khoảng 150 từ bằng tiếng Việt, tập trung vào các khái niệm chính về cấu trúc dữ liệu cơ bản (stack, queue, linked list)." },
      { t: "info", rows: [
        ["Đầu ra AI", "Tóm tắt được định nghĩa cơ bản và hoạt động của Stack, Queue, Linked List. Tuy nhiên, văn phong còn mang tính đời thường (ví dụ “deadline”), thiếu sự nhất quán trong thuật ngữ chuyên môn và chưa đề cập đến độ phức tạp thời gian."],
        ["Chỉnh sửa", "Thống nhất thuật ngữ tiếng Việt (Ngăn xếp, Hàng đợi), bổ sung bảng so sánh độ phức tạp O(1) cho các thao tác cơ bản, và thêm ví dụ thực tế để làm rõ tính ứng dụng của từng cấu trúc."],
      ]},
      { t: "h3", text: "Prompt 2 — Yêu cầu điều chỉnh" },
      { t: "prompt", label: "Prompt", text: "Viết lại đoạn tóm tắt trên theo phong cách học thuật, thêm ví dụ ứng dụng thực tế cho từng cấu trúc dữ liệu và so sánh ưu nhược điểm, giới hạn 200 từ. Sử dụng từ ngữ khoa học." },
      { t: "info", rows: [
        ["Đầu ra AI", "Đã chuyển đổi sang văn phong khoa học, phân tách rõ ưu/nhược điểm và ứng dụng thực tế cho từng cấu trúc. Tuy nhiên, vẫn thiếu sự thống nhất hoàn toàn về thuật ngữ tiếng Việt cho “Stack/Queue” và chưa có bảng so sánh trực quan về độ phức tạp thời gian."],
        ["Chỉnh sửa", "Chuẩn hóa thuật ngữ chuyên ngành đồng nhất, bổ sung các ví dụ ứng dụng điển hình (như lời gọi hàm, hàng đợi tiến trình), và trình bày so sánh ưu/nhược điểm dưới dạng danh sách."],
      ]},
      { t: "note", text: "Trích dẫn sử dụng AI: Bài tóm tắt hoàn chỉnh được thực hiện với sự hỗ trợ của ChatGPT. Các prompt sử dụng được ghi lại ở trên. Toàn bộ đầu ra đã được người viết kiểm tra, chỉnh sửa và đối chiếu với tài liệu gốc trước khi hoàn thiện." },
      { t: "figure", src: IMG.trachnhiem + "image-p3-1.png", caption: "Màn hình ChatGPT với prompt và đầu ra của Prompt 1" },
      { t: "figure", src: IMG.trachnhiem + "image-p4-2.png", caption: "Màn hình ChatGPT với prompt và đầu ra của Prompt 2" },

      { t: "h2", text: "III. Phân tích các vấn đề đạo đức khi sử dụng AI" },
      { t: "h3", text: "1. Ranh giới giữa hỗ trợ hợp lý và gian lận học thuật" },
      { t: "p", text: "Theo mình, dùng AI để hiểu bài, gợi ý cấu trúc hay sửa lỗi ngữ pháp là ổn vì mình vẫn tự suy nghĩ và chịu trách nhiệm. Nhưng nếu copy nguyên đầu ra AI rồi nộp mà không khai báo thì đó là gian lận, vì thực chất không phải sản phẩm của mình." },
      { t: "h3", text: "2. Vấn đề quyền sở hữu trí tuệ và trích dẫn" },
      { t: "p", text: "Nội dung AI tạo ra không rõ tác giả và về mặt pháp lý chưa được bảo vệ rõ ràng. Nếu trình bày như thành quả của bản thân mà không ghi chú là có thể vi phạm quy định liêm chính." },
      { t: "h3", text: "3. Tác động đến quá trình học và phát triển kỹ năng" },
      { t: "p", text: "Nếu lạm dụng AI quá mức thì mình sẽ không tự rèn được tư duy giải quyết vấn đề, viết lách hay phân tích — những thứ quan trọng hơn nhiều về lâu dài so với việc hoàn thành bài nhanh." },

      { t: "h2", text: "IV. Bộ nguyên tắc cá nhân về sử dụng AI có trách nhiệm" },
      { t: "ol", items: [
        "Luôn khai báo: Ghi rõ trong bài nếu có dùng AI — dùng tool gì, để làm gì.",
        "AI hỗ trợ, không làm thay: Ý tưởng và lập luận phải là của mình, AI chỉ giúp diễn đạt hoặc gợi ý thêm.",
        "Kiểm tra lại trước khi nộp: Không nộp nguyên đầu ra AI, luôn đọc lại và chỉnh sửa cho đúng với ý mình muốn nói.",
        "Không dùng trong thi/kiểm tra: Trừ khi thầy cô cho phép rõ ràng.",
        "Dùng AI để hiểu sâu hơn: Ví dụ hỏi AI giải thích lại khái niệm khó, tạo ví dụ minh họa — thay vì dùng để bỏ qua việc học.",
        "Không dùng AI để gian lận: Không tạo nội dung đạo văn hay vi phạm bản quyền.",
        "Cập nhật theo quy định: Chính sách về AI thay đổi nhanh, cần theo dõi để dùng đúng cách trong từng môn.",
      ]},

      { t: "h2", text: "V. Infographic: Sử dụng AI có trách nhiệm trong học thuật" },
      { t: "figure", src: IMG.trachnhiem + "image-p5-3.png", caption: "Infographic minh họa các nguyên tắc sử dụng AI có trách nhiệm trong học thuật" },

      { t: "h2", text: "Kết luận" },
      { t: "p", text: "Bài tập này giúp mình nhìn rõ hơn về việc dùng AI sao cho hợp lý. Trước đây mình hay dùng AI rồi copy luôn mà không nghĩ nhiều, nhưng qua bài này mới thấy ranh giới giữa hỗ trợ và gian lận khá mỏng. Quan trọng nhất vẫn là minh bạch — dùng thì cứ khai báo, nhưng phải tự chỉnh sửa và chịu trách nhiệm về nội dung." },
      { t: "note", text: "Nguyên tắc cốt lõi: Dùng AI không có nghĩa là sai, mà sai là khi dùng mà không khai báo, hoặc dùng để bỏ qua hoàn toàn quá trình tự suy nghĩ." },

      { t: "h2", text: "Sử dụng AI trong báo cáo" },
      { t: "ol", items: [
        "ChatGPT tạo infographic dựa trên ý tưởng được trình bày, hỗ trợ tóm tắt tài liệu.",
        "Claude hỗ trợ trình bày định dạng LaTeX.",
      ]},

      { t: "h2", text: "Tài liệu tham khảo" },
      { t: "ol", items: [
        "Sedgewick, R. & Wayne, K. (2011) Algorithms. 4th edn. Upper Saddle River: Addison-Wesley.",
        "OpenAI. (2024) Usage policies. Truy cập tại: https://openai.com/policies/usage-policies",
      ]},
    ],
  },
];
