# Google-Form-Auto-Close

# GoogleFormAutoClose

## 中文說明
這個專案利用 Google Apps Script 定時自動關閉 Google 表單的回應功能。

### 主要功能
- 在指定時間自動關閉表單回應。
- 可擴充功能，如在關閉時寄出通知信件等。

### 注意事項
- **表單 ID**：請務必將程式碼中的表單 ID 替換成你自己的表單 ID。
- **關閉時間**：根據需求修改觸發器中的日期與時間（範例中預設為 2025/3/31 23:59:59，月份從 0 開始計算）。

### 使用方式
1. 在 Google Apps Script 中建立新專案，將此程式碼貼上。
2. 更新 `FormApp.openById` 中的表單 ID。
3. 修改 `new Date` 中的日期和時間，設定你需要的關閉時刻。
4. 部署並運行程式，系統會在指定時間自動關閉表單回應。

## English
This project uses Google Apps Script to automatically close a Google Form at a specified time.

### Key Features
- Automatically disable form responses at a scheduled time.
- Can be extended with additional functionalities such as sending notification emails.

### Important Notes
- **Form ID**: Replace the form ID in the code with your own.
- **Closing Time**: Adjust the trigger date and time as needed (the example is set to 2025/3/31 23:59:59, noting that months are 0-indexed).

### How to Use
1. Create a new project in Google Apps Script and paste in the provided code.
2. Update the form ID in `FormApp.openById` with your own form's ID.
3. Modify the date and time in `new Date` to set your desired closing time.
4. Deploy and run the script; the form responses will be automatically disabled at the specified time.
