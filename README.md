# MarsAir - Automation

This repository contains automated tests written using CodeceptJS and TypeScript.

## Prerequisites

- Node.js (version 16.15.0)
- npm (version 8.5.5)

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/huyduong95/mars.git


2. Install dependencies:

    ```bash
   cd mars
   yarn

3. Run test:

   ```bash
   yarn test:all

## Project Structure
- codecept.config.js: confiure of all plugins, playwright setup for running automation script
- test: Contains all the test files written in CodeceptJS using TypeScript.
- pages:  Contains page objects representing the web pages or components.
- configuration: store .env file and controler (customer scenario)
- common: common file using in everywhere in platform


## Reporting
This project uses Allure for test reporting. 
If not install Allure, please follow this (https://docs.qameta.io/allure/)

After running the tests, you can view the Allure reports.

   ```bash
   yarn allure


## Test Cases
Could find through: https://docs.google.com/spreadsheets/d/1S9OWrcXl2srKn1gqwzgn3bqTKu_ePGz-lHp94XKhaRw/edit?usp=sharing