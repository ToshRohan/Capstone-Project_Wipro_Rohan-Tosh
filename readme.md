IMDb Web Automation Testing Framework project by Rohan Tosh.


# 🎬 IMDb Functional Testing Automation Framework Using Playwright

## 📌 Overview
This project contains end-to-end automation tests for the IMDb website using Playwright.  
The goal is to validate core user flows and ensure key features work correctly across different sections of the application.

---

# 📊 GitHub Stats:
![](https://github-readme-stats.shion.dev/api?username=ToshRohan&theme=dark&hide_border=false&include_all_commits=true&count_private=false)<br/>
![](https://streak-stats.demolab.com/?user=ToshRohan&theme=dark&hide_border=false)<br/>
![](https://github-readme-stats.shion.dev/api/top-langs/?username=ToshRohan&theme=dark&hide_border=false&include_all_commits=true&count_private=false&layout=compact)

---

## 🧪 Test Planner
- Identify major IMDb services and user flows
- Design test scenarios for each service
- Implement automated test cases using Playwright
- Validate UI navigation and page loading
- Generate stable and repeatable test execution

---

## ⚙️ Requirements
- Node.js
- Playwright
- npm / yarn
- Modern browser (Chromium/Firefox/WebKit via Playwright)

---

- # 💻 Tech Stack:
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Playwright](https://img.shields.io/badge/-playwright-%232EAD33?style=for-the-badge&logo=playwright&logoColor=white) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

---

## 🧩 Services Covered in Testing


| Service No. | IMDb Service                |
|-------------|----------------------------|
| 1           | IMDb Homepage              |
| 2           | IMDb Top 250 Movies        |
| 3           | IMDb Popular Celebrities   |
| 4           | IMDb What To Watch         |
| 5           | IMDb Events                |
| 6           | IMDb Satyajit Ray Profile  |
| 7           | IMDb Showtimes & Tickets   |

---

## 🔄 CI/CD Pipeline (GitHub Actions)

This project uses **GitHub Actions** for Continuous Integration. Every push or pull request automatically triggers test execution to ensure code quality and stability.

---

### ⚙️ Flow:
- Code pushed to GitHub  
- GitHub Actions workflow triggers  
- Node.js environment is set up  
- Dependencies and Playwright browsers are installed  
- Test cases are executed in headless mode  
- Allure results are generated for reporting  

---

### 🧪 Key Commands Used:
```bash
npm install
npx playwright install
npx playwright test
npm run allure:generate
npm run allure:open
```
---

## 📌 Conclusion

This project successfully implements an end-to-end automation testing framework for IMDb using Playwright. It validates key user flows across 7 major services with reliable and repeatable test execution. The framework improves regression testing speed, ensures UI stability, and supports CI/CD integration through GitHub Actions with detailed reporting via Allure.

[![](https://komarev.com/ghpvc/?username=ToshRohan&icon=4&color=0)](https://visitcount.itsvg.in)

```bash
