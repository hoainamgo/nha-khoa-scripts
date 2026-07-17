// Dữ liệu kịch bản CSKH + báo giá Nha Khoa Quốc Tế American
// Giọng: Mai (dễ thương, ấm áp). Nội dung tham khảo, không thay thế bác sĩ khám.

const CLINIC = {
  name: "Nha Khoa Quốc Tế American",
  hotline: "0918.522.272",
  branches: [
    "Trụ sở chính: LK02-14&15, Hồng Gai, Hạ Long (đối diện chợ Loong Toòng)",
    "Cơ sở 1: 76 Phong Cốc (cạnh bưu điện Phong Cốc)",
    "Cơ sở 2: 40+41 Quảng Yên (đối diện hiệu vàng Kim Liên)"
  ]
};

const DATA = {
  services: [
    { id: "sv1", title: "Khám tổng quát", body:
      "Dạ em chào anh/chị ạ 😊 Em là Mai từ Nha Khoa Quốc Tế American. Mình cần khám tổng quát đúng không ạ? Bên em khám khoảng 30–60 phút, bác sĩ kiểm tra kỹ và tư vấn phác đồ riêng cho mình. Khám lần đầu bên em thường miễn phí ạ! Mình rảnh khung giờ nào để em đặt lịch?" },
    { id: "sv2", title: "Cạo vôi + đánh bóng", body:
      "Dạ cạo vôi + đánh bóng bên em khoảng 30–45 phút ạ, làm sạch mảng bám, phòng viêm lợi, răng cũng sáng hơn nè 😊 Chi phí tham khảo 500K–1M. Mình đặt lịch sớm để em giữ ưu đãi nha!" },
    { id: "sv3", title: "Trám răng", body:
      "Dạ trám răng bên em dùng composite cao cấp, 20–40 phút/răng ạ. Chi phí 1M–2.5M/răng tùy mức độ. Bác sĩ khám xong báo chính xác + có bảo hành 2 năm cho mình 💕" },
    { id: "sv4", title: "Nhổ răng", body:
      "Dạ nhổ răng bên em gây tê nhẹ nhàng, 15–60 phút tùy ca ạ. Chi phí 1M–3M/răng (răng khôn phức tạp tính riêng). Anh/chị yên tâm, đa số khách nói êm ru à 🥰" },
    { id: "sv5", title: "Điều trị tủy", body:
      "Dạ điều trị tủy bên em 1–3 buổi, bác sĩ chữa viêm tủy, bảo tồn răng mình ạ. Chi phí 2M–5M/răng. Mình nên đến sớm kẻo đau tăng nha!" },
    { id: "sv6", title: "Bọc răng sứ", body:
      "Dạ bọc sứ bên em 2–3 buổi, phục hình răng vỡ lớn hoặc làm thẩm mỹ ạ. Chi phí 5M–15M/răng, bảo hành 5–10 năm. Mình tham khảo thêm cho răng cười nhé 😊" },
    { id: "sv7", title: "Cấy ghép Implant", body:
      "Dạ Implant bên em trồng răng đã mất, quy trình 3–6 tháng nhiều giai đoạn ạ. Chi phí 25M–50M/răng, bảo hành 10 năm. Mình đặt lịch tư vấn miễn phí để bác sĩ lên kế hoạch nha 🦷" },
    { id: "sv8", title: "Niềng răng (chỉnh nha)", body:
      "Dạ niềng răng bên em có mắc cài kim loại, sứ hoặc trong suốt Invisalign ạ. Thời gian 18–24 tháng. Chi phí 30M–100M tùy phương án. Em tư vấn rõ cho mình nhé!" },
    { id: "sv9", title: "Tẩy trắng răng", body:
      "Dạ tẩy trắng bên em ~60 phút, răng trắng sáng tự nhiên ạ. Chi phí 3M–8M, bảo hành 1 năm. Mình cười tự tin hơn sau 1 buổi nè 😊" },
    { id: "sv10", title: "Răng trẻ em", body:
      "Dạ khám/trám/tư vấn răng sữa cho bé bên em 15–30 phút ạ, chi phí 300K–2M. Bác sĩ nhi thân thiện, bé không sợ đâu ạ 💕" }
  ],

  symptoms: [
    { id: "sy1", title: "Đau răng", body:
      "Ôi anh/chị ráng chút nha 🥺. Mình bị đau vị trí nào, mức độ thế nào ạ? Đau khi ăn ngọt/nóng/lạnh không? Trường hợp này bác sĩ thường khám rồi trám hoặc tủy tùy mức độ. Mình đến sớm đỡ đau + tiết kiệm hơn ạ!" },
    { id: "sy2", title: "Chảy máu lợi", body:
      "Dạ chảy máu lợi có thể do viêm lợi hoặc nhiều vôi răng ạ. Bên em cạo vôi + khám là đỡ ngay. Mình đặt lịch sớm cho răng chắc khỏe nha!" },
    { id: "sy3", title: "Ê buốt", body:
      "Dạ ê buốt lạnh/nóng có thể do mòn men hoặc sâu nhẹ ạ. Mình nên khám xác định sớm, tránh nặng thêm. Em đặt lịch giúp mình nhé?" },
    { id: "sy4", title: "Hôi miệng", body:
      "Dạ hơi thở có mùi thường do vệ sinh, vôi răng hoặc nha chu ạ. Bên em cạo vôi + khám tổng quát là thơm tho lại 😊 Mình đặt lịch nha!" },
    { id: "sy5", title: "Răng lung lay", emergency: true, body:
      "⚠️ Răng lung lay có thể do nha chu, cần khám gấp ạ! Anh/chị liên hệ hotline 0918.522.272 để được xếp lịch sớm nhất nha." },
    { id: "sy6", title: "Sưng mặt / sốt (Cấp cứu)", emergency: true, body:
      "⚠️ Trường hợp sưng mặt hoặc sốt cần đến ngay ạ! Anh/chị gọi hotline 0918.522.272 hoặc đến Nha Khoa Quốc Tế American (LK02-14&15 Hồng Gai, Hạ Long) gấp nhé!" },
    { id: "sy7", title: "Răng vàng ố", body:
      "Dạ răng ố vàng tẩy trắng hoặc bọc sứ tùy nhu cầu ạ. Bên em tẩy trắng ~60 phút là sáng bật tông. Mình tham khảo thêm nhé 😊" },
    { id: "sy8", title: "Mất răng", body:
      "Dạ mất răng lâu ngày dễ tiêu xương hàm ạ. Bên em có Implant hoặc cầu răng, mình đặt lịch tư vấn miễn phí để bác sĩ lên phương án nha 🦷" }
  ],

  concerns: [
    { id: "cn1", title: "Giá bao nhiêu?", body:
      "Dạ chi phí tùy tình trạng răng mình nha anh/chị. Bác sĩ khám xong báo chính xác + đang có ưu đãi ạ 😊. Mình qua khám cho yên tâm nhé!" },
    { id: "cn2", title: "Có đau không?", body:
      "Anh/chị yên tâm nha, bên em gây tê nhẹ nhàng, đa số khách nói êm ru à 🥰. Có thể hơi ê vài ngày đầu thôi ạ." },
    { id: "cn3", title: "Mất bao lâu?", body:
      "Dạ [dịch vụ] khoảng [thời gian] thôi ạ, nhanh gọn cho mình nha 😊." },
    { id: "cn4", title: "Bảo hành thế nào?", body:
      "Dạ có ạ! Bên em bảo hành rõ từng dịch vụ (vd sứ 5–10 năm, trám 2 năm). Mình yên tâm nhé 💕." },
    { id: "cn5", title: "Để suy nghĩ thêm", body:
      "Dạ được nha 😊. Mình cần gì cứ nhắn em ạ. Em giữ ưu đãi cho mình nhe 🌸." },
    { id: "cn6", title: "Xa / bận quá", body:
      "Dạ em hiểu ạ. Mình chọn giờ tiện nhất, em xếp linh hoạt ở 1 trong 3 cơ sở cho mình nha 🥰." }
  ],

  pricing: [
    { id: "pr1", title: "Khám tổng quát", price: "300K – 500K", note: "Thường miễn phí lần đầu đặt lịch" },
    { id: "pr2", title: "Cạo vôi + đánh bóng", price: "500K – 1M", note: "30–45 phút, phòng viêm lợi" },
    { id: "pr3", title: "Trám răng (composite)", price: "1M – 2.5M / răng", note: "Bảo hành 2 năm" },
    { id: "pr4", title: "Nhổ răng thường", price: "1M – 3M / răng", note: "Răng khôn phức tạp tính riêng" },
    { id: "pr5", title: "Điều trị tủy", price: "2M – 5M / răng", note: "1–3 buổi" },
    { id: "pr6", title: "Bọc răng sứ", price: "5M – 15M / răng", note: "Bảo hành 5–10 năm" },
    { id: "pr7", title: "Cấy ghép Implant", price: "25M – 50M / răng", note: "Bảo hành 10 năm" },
    { id: "pr8", title: "Niềng răng", price: "30M – 100M", note: "Tùy mắc cài / sứ / Invisalign" },
    { id: "pr9", title: "Tẩy trắng răng", price: "3M – 8M", note: "Bảo hành 1 năm" },
    { id: "pr10", title: "Răng trẻ em", price: "300K – 2M", note: "Khám/trám/tư vấn răng sữa" }
  ]
};
