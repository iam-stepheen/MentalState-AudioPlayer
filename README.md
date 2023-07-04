# BrainFM Challenge README

## Project Overview

This project is a React Native app that simulates a simple audio player focused on promoting specific mental states - namely "focus", "relax", and "sleep". The application is split into two parts:

1. **Server**: A Node.js server (`brainfm-server`) that manages and serves track URLs based on the selected mental state.
2. **Client**: A React Native application (`mini-brainfm`) that provides the user interface and audio playing functionality.

The React Native app consists of two screens: a landing screen for selecting the desired mental state, and a player screen for playing, pausing, and skipping tracks.

## Prerequisites

Before starting, please ensure you have the following software installed on your machine:

- [Node.js](https://nodejs.org/en/download/) (v14.0.0 or newer)
- [npm](https://www.npmjs.com/get-npm) (v6.14.0 or newer)
- [git](https://git-scm.com/downloads)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (v4.0.0 or newer)

## Directory Structure

Here's the high-level structure of the project:

brainfm-challenge/
│
├── brainfm-server/
│ ├── index.js
│ └── package.json
│
└── mini-brainfm/
├── .gitignore
├── app.d.ts
├── app.json
├── babel.config.js
├── index.js
├── package.json
├── README.md
├── tailwind.config.js
├── tsconfig.json
├── app/
├── assets/
├── components/
├── hook/

## Setting Up and Running the Project

To get the project up and running, follow the steps below:

### Setting Up and Running the Server

1. Open a terminal, navigate to the project directory and then to the `brainfm-server` directory:

   ```
   cd path/to/brainfm-challenge/brainfm-server
   ```

2. Install the project dependencies:

   ```
   npm install
   ```

3. Start the server:

   ```
   node index.js
   ```

   The server will start running, and it will be listening for requests on `http://localhost:3200`.

### Setting Up and Running the App

1. Open another terminal, navigate to the project directory and then to the `mini-brainfm` directory:

   ```
   cd path/to/brainfm-challenge/mini-brainfm
   ```

2. Install the project dependencies:

   ```
   npm install
   ```

3. Start the Expo server:

   ```
   npx expo start
   ```

   Expo will open a page in your default web browser. From this page, you can run the app on an Android or iOS emulator or on your own mobile device by scanning the provided QR code.

## Asset Management

This project does not bundle MP3 files within the application. These files are served by the server and the URLs are dynamic depending upon the selected mental state. This design decision is made to keep the application lightweight and to demonstrate the separation of concerns between the front end and back end.

## Video Walkthrough

A video walkthrough of the application is available for you to view. This video demonstrates how the application works and shows off its various features. This will give you a visual understanding of the functionality of the application without needing to install or run it yourself.

The video walkthrough can be found in the project root directory. Simply open the video file in your preferred media player to view it.
