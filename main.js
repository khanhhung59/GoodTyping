// Hàm trợ giúp tìm phím ảo để tránh lặp code (DRY - Don't Repeat Yourself)
/*function getVirtualKey(event) {
    const userPress = event.key.toLowerCase();
    
    // Nếu gõ phím Cách (Space), event.key trả về một khoảng trắng " "
    // Chúng ta trả về bộ chọn chuẩn xác cho phím cách
    if (userPress === ' ') return document.querySelector('.key[data-key=" "]');
    
    // Tìm phím ảo dựa vào data-key thông thường
    return document.querySelector(`.key[data-key="${userPress}"]`);
}

// 1. Xử lý khi nhấn phím xuống
document.addEventListener('keydown', (event) => {
    const result = getVirtualKey(event);
    if (result) {
        result.classList.add('active');
    }

    // --- PHẦN SỬA ĐỔI: Ghi dữ liệu vào thanh nhật ký ---
    const typedStream = document.getElementById('live-typed-text');
    if (!typedStream) return; // Phòng hờ nếu chưa có thẻ HTML

    // Xóa chữ placeholder gợi ý ở lần gõ đầu tiên
    const placeholder = typedStream.querySelector('.placeholder-text');
    if (placeholder) placeholder.remove();

    const key = event.key;

    // Bỏ qua các phím hệ thống dài dòng (F1-F12, Control, Alt, CapsLock...)
    if (key.length > 1 && key !== 'Enter' && key !== 'Backspace' && key !== 'Tab') {
        return; 
    }

    // Tạo thẻ span chứa chữ cái gõ vào
    const charSpan = document.createElement('span');
    charSpan.classList.add('char-correct'); // Mặc định màu xanh

    if (key === ' ') {
        charSpan.innerHTML = '&nbsp;';
        typedStream.appendChild(charSpan);
    } else if (key === 'Enter') {
        charSpan.innerText = '↵';
        typedStream.appendChild(charSpan);
    } else if (key === 'Backspace') {
        if (typedStream.lastChild) typedStream.removeChild(typedStream.lastChild);
    } else {
        charSpan.innerText = key;
        typedStream.appendChild(charSpan);
    }

    // Tự động cuộn dòng chữ về bên phải
    typedStream.scrollLeft = typedStream.scrollWidth;
});

// 2. Xử lý khi buông phím ra
document.addEventListener('keyup', (event) => {
    const result = getVirtualKey(event);
    if (result) {
        result.classList.remove('active');
    }
});*/