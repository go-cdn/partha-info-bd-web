@echo off
title GitHub Push Script

echo ==========================================
echo        GitHub Push Automation
echo ==========================================
echo.

set REPO_URL=https://github.com/go-cdn/partha-info-bd.git
set BRANCH=main
set MESSAGE=Update project

if not exist ".git" (
    echo Initializing Git repository...
    git init
)

echo.
echo Adding files...
git add .

echo.
echo Committing...
git commit -m "%MESSAGE%"

echo.
echo Setting branch...
git branch -M %BRANCH%

echo.
echo Checking remote...
git remote get-url origin >nul 2>&1

if %errorlevel%==0 (
    git remote set-url origin %REPO_URL%
) else (
    git remote add origin %REPO_URL%
)

echo.
echo Pushing to GitHub...
git push -u origin %BRANCH%

echo.
echo ==========================================
echo Done.
echo ==========================================
pause