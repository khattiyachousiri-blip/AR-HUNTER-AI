# AR HUNTER AI

เกม AR/HAND/MOUSE สำหรับจำแนกเป้าหมาย AI กับ Non-AI

## โครงสร้าง
- `index.html` — เกมฉบับปรับปรุง
- `assets/ai-01.png` ถึง `ai-20.png` — เป้าหมาย AI 20 รูป
- `assets/non-ai-01.png` ถึง `non-ai-20.png` — เป้าหมายไม่ใช่ AI 20 รูป
- `assets/home-hunter.png` — พื้นหลังหน้าหลัก
- `assets/logo-kru-da.png` — โลโก้ ครูดา พาเรียน
- `Code.gs` — Google Apps Script สำหรับบันทึกคะแนนลง Google Sheets

## GitHub Pages
อัปโหลดทั้งโฟลเดอร์ขึ้น repository เดียวกัน แล้วเปิด GitHub Pages โดยให้ `index.html` อยู่ที่ root

## Google Sheets
1. สร้าง Google Sheet
2. Extensions → Apps Script
3. วางเนื้อหา `Code.gs`
4. Deploy → New deployment → Web app
5. ตั้ง Execute as: Me และ Who has access: Anyone
6. นำ URL `/exec` ที่ได้ไปใส่ใน `GOOGLE_APP_SCRIPT_URL` ใน `index.html`

หมายเหตุ: ถ้ายังไม่ใส่ URL เกมจะบันทึกคะแนนในเครื่องด้วย localStorage และไม่ส่งข้อมูลขึ้น Cloud
