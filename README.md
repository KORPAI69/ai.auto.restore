# 📸 AI Auto-Restore 

**AI Auto-Restore** is a powerful, 100% client-side web application designed to help users analyze old, damaged, or faded photographs and generate highly optimized, professional-grade prompts for AI restoration tools (like Claude, Midjourney, or Stable Diffusion). 

โปรเจกต์นี้สร้างขึ้นจากความหลงใหลในการถ่ายภาพและการฟื้นฟูรูปภาพเก่าเพื่อรักษากาลเวลา ผสมผสานกับการพัฒนาเว็บแอปพลิเคชันสมัยใหม่ที่เน้นความรวดเร็ว ปลอดภัย และใช้งานง่ายโดยไม่ต้องพึ่งพาเซิร์ฟเวอร์

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

🔗 **[Live Demo: Try AI Auto-Restore Here](https://korpai69.github.io/ai.auto.restore/)**

---

## ✨ Key Features (ฟีเจอร์เด่น)

* **12 Professional AI Prompts:** ชุดคำสั่งคุณภาพสูงที่ออกแบบมาเฉพาะด้าน ตั้งแต่การลบรอยขีดข่วน, ฟื้นฟูสีภาพวินเทจ, ปรับแก้สีผิว ไปจนถึงการฟื้นฟูแบบเต็มรูปแบบ
* **Smart Image Analysis:** วิเคราะห์คุณภาพรูปภาพ 5 มิติ (ความสะอาด, สี, ความสว่าง, ความคมชัด, สัญญาณรบกวน) พร้อมคำนวณคะแนนรวม
* **Analytics Dashboard:** ติดตามสถิติการใช้งานของคุณด้วยกราฟ Radar และ Line Chart ที่สร้างจาก HTML5 `<canvas>` ล้วน
* **Local History Tracking:** บันทึกประวัติการวิเคราะห์รูปล่าสุดพร้อมภาพตัวอย่างขนาดเล็ก (Compressed Canvas Thumbnails) เพื่อให้กลับมาดูซ้ำได้โดยไม่เปลืองพื้นที่
* **Favorites & Downloads:** บันทึก Prompt ที่ใช้บ่อยเป็นรายการโปรด และดาวน์โหลด Prompt เป็นไฟล์ `.txt` ได้ในคลิกเดียว
* **Bilingual Interface:** รองรับการใช้งานทั้งภาษาอังกฤษ (EN) และภาษาไทย (TH)
* **Dark Mode Support:** สลับโหมดกลางวัน/กลางคืนได้อย่างสมูท พร้อมระบบจดจำการตั้งค่า

---

## 🚀 How to Use (วิธีใช้งาน)

1.  เปิดแอปพลิเคชันผ่าน [Live Demo] หรือดาวน์โหลดมารันในเครื่อง
2.  ลากไฟล์รูปภาพที่ต้องการฟื้นฟู (JPG, PNG, WebP ขนาดไม่เกิน 10MB) มาวางในพื้นที่อัปโหลด
3.  กด **"Analyze Image"** เพื่อให้ระบบจำลองการประเมินจุดบกพร่องของภาพ
4.  เลือกวิธีแก้ปัญหาจาก 12 หมวดหมู่ที่แนะนำ
5.  กด **"Copy Prompt"** และนำข้อความที่ได้ไปวางใน AI ตัวโปรดของคุณ (เช่น Claude.ai) เพื่อรับภาพที่ถูกฟื้นฟูอย่างสมบูรณ์แบบ

---

## 🛠️ Technical Details (ข้อมูลทางเทคนิค)

แอปพลิเคชันนี้ถูกเขียนขึ้นด้วยแนวคิด **"Zero Dependencies"** เพื่อประสิทธิภาพสูงสุดและลดความเสี่ยงด้านความปลอดภัย:
* **Pure Vanilla Web Stack:** ใช้เพียง HTML5, CSS3, และ Vanilla JavaScript เท่านั้น ไม่มี React, Vue, หรือ Tailwind
* **No External Libraries:** กราฟสถิติถูกวาดขึ้นมาใหม่ทั้งหมดด้วยสมการคณิตศาสตร์และ HTML5 Canvas API (ไม่ใช้ Chart.js)
* **100% Client-Side:** ข้อมูลรูปภาพ ประวัติการใช้งาน และรายการโปรดทั้งหมดถูกประมวลผลและจัดเก็บผ่าน `localStorage` บนเบราว์เซอร์ของผู้ใช้ ไม่มีการส่งข้อมูลขึ้นเซิร์ฟเวอร์ภายนอก (Privacy First)

---

## 👨‍💻 Local Deployment (การติดตั้งบนเครื่องส่วนตัว)

เนื่องจากโปรเจกต์นี้ไม่มี Dependency ใดๆ คุณสามารถดาวน์โหลดหรือ Clone Repository นี้ และดับเบิลคลิกที่ไฟล์ `index.html` เพื่อใช้งานผ่านเบราว์เซอร์ได้ทันที ไม่ต้องใช้ Node.js หรือ Local Server

```bash
git clone [https://github.com/](https://github.com/)[korpai69]/ai-auto-restore.gi
cd ai-auto-restore
# Open index.html in your browser
