import * as React from 'react';
import {AuthenticatedContextProvider} from './hooks/useAuthenticatedContext';
import {PlayersContextProvider} from './hooks/usePlayers';

import {VoiceChannelActivity} from './components/VoiceChannelActivity';
import './App.css';

import {Engine} from './components/Engine';

export default function App() {
  return (
    <AuthenticatedContextProvider>
      <PlayersContextProvider>
        <VoiceChannelActivity />
        <Engine />
      </PlayersContextProvider>
    </AuthenticatedContextProvider>
  );
}
