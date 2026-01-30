function openPopup(id) {
  closeAllPopups();
  document.getElementById(id).style.display = 'flex';
}

function closePopup(id) {
  document.getElementById(id).style.display = 'none';
}

function closeAllPopups() {
  if (document.getElementById('popup1')) document.getElementById('popup1').style.display = 'none';
  if (document.getElementById('popup2')) document.getElementById('popup2').style.display = 'none';
}

// ลบข้อมูล
function removeStudent(index) {
    students.splice(index, 1);
    saveData();
    render();
}

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;
  fetch('php/login.php', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      // Success: reload or redirect, or close popup
      alert('เข้าสู่ระบบสำเร็จ!');
      closePopup('popup2');
      // location.reload(); // Uncomment to reload page
    } else {
      // Fail: show error
      alert('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง');
    }
  })
  .catch(() => alert('เกิดข้อผิดพลาดในการเชื่อมต่อ'));
});
