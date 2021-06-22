# SkyProject

**Sky Assessments:**
This repo meant for automating the Sky website functions.

**Project tech stack**
  -- WebdriverIO
  -- JavaScript
  -- Mocha framework
  -- Chai
  -- Allure reports
  -- Node.js
  -- VS Code
  -- Chrome & Firefox

**Tests**

  I. Feature 1
        1. Test 1 - User navigates to sky home page
        2. Test 2 - User sees a list of deals on the deals page
        3. Test 3 - User sees error message on login page
    II Feature 2
        4. Test 4 - User sees the editorial section in specific searches

**To start:**
    1.0 Access the repository from GitHub
    2.0 Clone the branch locally
    3.0 Launch VSCode Ide and load the project files
    3.0 Run npm install  (This downloads all the node_modules which are required for project)
    4.0 Download the geckodriver and saved under project root directory (https://github.com/mozilla/geckodriver/releases)
    5.0 Download Firefox browser (in case your machine doesn't have already) and make a note of file path.
    6.0 For running the allure reports, you need to install 'allure commandline' using command : npm install -g allure-commandline --save-dev


**Run Tests:**
1) Split the terminal1, run firefox executable file using command: ./geckodriver.exe --binary [C:/Program Files/Mozilla Firefox/firefox.exe]  
2) In terminal 2 run - npx wdio wdio.conf.js  (Which runs all 2 specs, 4 tests, 1 spec on each Chrome and Firefox browsers)
3) For viewing the Allure html reports, run: 	allure generate allure-results --clean && allure open
