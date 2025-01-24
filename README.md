# LLM-PersianRTLFix


این افزونه کروم به شما کمک می‌کنه تا جهت متن‌های فارسی و انگلیسی رو به‌صورت خودکار توی *Deepseek* , *chatgpt* تنظیم کنید. برای مثال، وقتی متن فارسی دارید، به‌طور خودکار راست‌چین میشه و وقتی متن انگلیسی دارید، چپ‌چین میشه.

---

## ویژگی‌ها
- شناسایی متن فارسی و انگلیسی
- تنظیم خودکار جهت متن به `rtl` یا `ltr`
- پشتیبانی از صفحات داینامیک مثل React

---

## نحوه نصب

1. این پروژه رو از گیت‌هاب دانلود کنید یا کلون کنید:
   ```bash
   git clone https://github.com/your-username/your-repo-name.git
وارد صفحه Extensions در کروم بشید:


chrome://extensions/
گزینه Developer mode رو روشن کنید.

روی Load unpacked کلیک کنید و پوشه پروژه رو انتخاب کنید.

افزونه نصب شد و آماده استفاده است!

نحوه استفاده
این افزونه به‌صورت خودکار روی صفحه‌های پشتیبانی‌شده (https://chat.deepseek.com, https://chatgpt.com)  کار می‌کنه و جهت متن رو بر اساس زبان تنظیم می‌کنه.

توضیح اسکریپت
اسکریپت موجود در فایل content.js با استفاده از زبان فارسی و انگلیسی، جهت متن رو به‌طور خودکار تنظیم می‌کنه:

وقتی متن فارسی پیدا کنه، اون رو راست‌چین می‌کنه.
وقتی متن انگلیسی پیدا کنه، اون رو چپ‌چین می‌کنه.