# FileTree

This file tree represents the structure of a React project built using Colyseus, which is a library for real-time multiplayer games and collaborative applications.
The project consists of two main parts: the client-side application and the server-side application.

```
└── react-colyseus
    ├── packages
    │   ├── client
    │   │   ├── src
    │   │   │   ├── App.tsx
    │   │   │   ├── components
    │   │   │   │   ├── LoadingScreen.css
    │   │   │   │   ├── LoadingScreen.tsx
    │   │   │   │   ├── Player.css
    │   │   │   │   ├── Player.tsx
    │   │   │   │   └── VoiceChannelActivity.css
    │   │   │   │       └── VoiceChannelActivity.tsx
    │   │   │   ├── hooks
    │   │   │   │   ├── useAuthenticatedContext.tsx
    │   │   │   │   └── usePlayers.tsx
    │   │   │   ├── utils
    │   │   │   │   ├── getUserAvatarUrl.tsx
    │   │   │   │   └── getUserDisplayName.tsx
    │   │   └── index.html
    │   │
    │   └── server
    │       ├── src
    │       │   └─ app.ts
    │       ├── environment.d.ts
    │       └── src
    │           ├─ rooms
    │           │   └── StateHandleRoom.ts
    │           └─ shared
    │               ├── Constants.ts
    │               └── hello.ts
    └──────────────────────────────────────────────────────────────
```

# Client-side application:

- packages/client: This folder contains all the files necessary for building and running the client-side React application using Vite.

  - index.html: The main HTML file for the client-side application.
  - src/: The source code of the client-side application is located in this directory, including components, hooks, and utility functions.

    - App.tsx: The main entry point for the React component.
    - discordSdk.tsx: A custom TypeScript module for interacting with Discord API.
    - index.css: Global CSS file.
    - main.tsx: The entry point of the application where the React App is rendered.
    - types.tsx: Custom TypeScript types and interfaces used in the project.

    - components/: This folder contains various React components used in the application.
    - hooks/: Custom React hooks are defined in this folder.
    - utils/: Utility functions are defined in this folder.

# Server-side application:

- packages/server: This folder contains all the files necessary for building and running the server-side application using TypeScript and Colyseus.

  - environment.d.ts: A TypeScript declaration file for environment variables.

  - src/: The source code of the server-side application is located in this directory, including entities, rooms, and shared modules.

    - app.ts: The entry point of the application, where the server logic starts.
    - entities/: A folder that holds TypeScript classes defining data structures used in the app, such as Player.ts and State.ts.
    - rooms/: A folder for handling different rooms or states, including StateHandlerRoom.ts.
    - shared/: A folder containing shared utility files, like Constants.ts and a simple "hello.ts" file.
